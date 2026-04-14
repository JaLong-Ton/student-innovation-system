'use server'

import { revalidatePath } from 'next/cache'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'

/**
 * 获取竞赛列表，如果数据库为空则自动填充测试数据
 */
export async function getCompetitions(category?: string) {
  try {
    const { userId } = await auth()
    
    // 静默修复过期数据
    await prisma.competition.updateMany({
      where: {
        deadline: {
          lt: new Date()
        }
      },
      data: {
        deadline: new Date('2026-12-31')
      }
    })
    
    // 检查竞赛表是否为空
    const competitionCount = await prisma.competition.count()
    
    if (competitionCount === 0) {
      // 自动填充测试数据
      await prisma.competition.createMany({
        data: [
          {
            name: '全国大学生自动化控制设计大赛',
            category: 'TECHNICAL',
            level: 'STATE',
            description: '面向全国高校学生的自动化控制设计竞赛，鼓励创新思维和工程实践能力。',
            deadline: new Date('2026-06-30'),
            maxParticipants: 500,
            currentParticipants: 0,
            isActive: true
          },
          {
            name: 'C++算法与数据结构挑战赛',
            category: 'PROGRAMMING',
            level: 'PROVINCE',
            description: '考验参赛者的C++编程能力和算法思维，包含多种数据结构题目。',
            deadline: new Date('2026-05-15'),
            maxParticipants: 1000,
            currentParticipants: 0,
            isActive: true
          },
          {
            name: 'AI与地质灾害预测创新应用赛',
            category: 'AI',
            level: 'STATE',
            description: '运用人工智能技术解决地质灾害预测问题，推动AI在防灾减灾中的应用。',
            deadline: new Date('2026-07-20'),
            maxParticipants: 200,
            currentParticipants: 0,
            isActive: true
          },
          {
            name: '全国大学生英语演讲比赛',
            category: 'LANGUAGE',
            level: 'STATE',
            description: '展示英语口语表达能力，提升跨文化交流技巧的全国性赛事。',
            deadline: new Date('2026-04-30'),
            maxParticipants: 300,
            currentParticipants: 0,
            isActive: true
          },
          {
            name: '创新创业项目路演大赛',
            category: 'INNOVATION',
            level: 'PROVINCE',
            description: '展示创新创业项目，连接创业者和投资人的重要平台。',
            deadline: new Date('2026-08-10'),
            maxParticipants: 150,
            currentParticipants: 0,
            isActive: true
          }
        ]
      })
    }

    // 获取竞赛列表
    const competitions = await prisma.competition.findMany({
      where: { 
        isActive: true,
        ...(category && { category })
      },
      orderBy: { deadline: 'asc' }
    })

    // 如果用户已登录，获取用户的报名状态
    let userRegistrations: string[] = []
    if (userId) {
      const registrations = await prisma.registration.findMany({
        where: { userId },
        select: { competitionId: true }
      })
      userRegistrations = registrations.map((reg: any) => reg.competitionId)
    }

    // 为每个竞赛添加报名状态
    const competitionsWithStatus = competitions.map((competition: any) => ({
      ...competition,
      isRegistered: userRegistrations.includes(competition.id),
      isExpired: competition.deadline < new Date()
    }))

    return competitionsWithStatus

  } catch (error) {
    console.error('获取竞赛列表失败:', error)
    return []
  }
}

/**
 * 修复过期数据 - 将所有竞赛截止日期更新到 2026 年 12 月 31 日
 */
export async function fixExpiredCompetitions() {
  try {
    await prisma.competition.updateMany({
      where: {
        deadline: {
          lt: new Date()
        }
      },
      data: {
        deadline: new Date('2026-12-31')
      }
    })

    return {
      success: true,
      message: '已修复所有过期竞赛数据'
    }

  } catch (error) {
    console.error('修复过期数据失败:', error)
    
    return {
      success: false,
      message: error instanceof Error ? error.message : '修复失败，请稍后重试'
    }
  }
}
export async function registerCompetition(data: {
  competitionId: string
  applicantName: string
  projectName?: string
  teamMembers?: string
  teacherId?: string
  notes?: string
}) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return {
        success: false,
        message: '用户未登录'
      }
    }

    // 确保用户在数据库中存在（解决外键约束问题）
    try {
      const { syncUserToDatabase } = await import('@/lib/clerk')
      await syncUserToDatabase(userId)
    } catch (syncError) {
      console.error('同步用户到数据库失败:', syncError)
      // 继续执行，因为可能用户已经存在
    }

    // 验证必填字段
    if (!data.applicantName || data.applicantName.trim().length === 0) {
      return {
        success: false,
        message: '申请人姓名不能为空'
      }
    }

    // 检查竞赛是否存在
    const competition = await prisma.competition.findUnique({
      where: { id: data.competitionId }
    })

    if (!competition) {
      return {
        success: false,
        message: '竞赛不存在'
      }
    }

    // 检查是否已报名
    const existingRegistration = await prisma.registration.findFirst({
      where: {
        userId,
        competitionId: data.competitionId
      }
    })

    if (existingRegistration) {
      return {
        success: false,
        message: '您已报名过此比赛'
      }
    }

    // 检查是否已过期
    if (competition.deadline < new Date()) {
      return {
        success: false,
        message: '竞赛报名已截止'
      }
    }

    // NOTE: 使用实时 count 查询来检查是否满员，而非依赖可能不一致的 currentParticipants 字段
    const activeRegistrationCount = await prisma.registration.count({
      where: {
        competitionId: data.competitionId,
        status: { notIn: ['REJECTED_FINAL'] }  // 只有彻底驳回的不算名额占用
      }
    })

    if (activeRegistrationCount >= competition.maxParticipants) {
      return {
        success: false,
        message: '竞赛报名人数已满'
      }
    }

    // 验证指导老师是否存在（如果提供了teacherId）
    if (data.teacherId) {
      const teacher = await prisma.teacher.findUnique({
        where: { id: data.teacherId }
      })
      
      if (!teacher) {
        return {
          success: false,
          message: '选择的指导老师不存在'
        }
      }
    }

    // 创建报名记录
    await prisma.registration.create({
      data: {
        userId,
        competitionId: data.competitionId,
        applicantName: data.applicantName.trim(),
        projectName: data.projectName?.trim() || null,
        teamMembers: data.teamMembers?.trim() || null,
        teacherId: data.teacherId || null,
        notes: data.notes?.trim() || null,
        status: 'PENDING'
      }
    })

    // NOTE: 同步更新 currentParticipants 为真实计数值（保证与数据库一致）
    const updatedCount = await prisma.registration.count({
      where: {
        competitionId: data.competitionId,
        status: { notIn: ['REJECTED_FINAL'] }
      }
    })
    await prisma.competition.update({
      where: { id: data.competitionId },
      data: { currentParticipants: updatedCount }
    })

    // 重新验证缓存
    revalidatePath('/competitions')

    return {
      success: true,
      message: '报名成功！'
    }

  } catch (error) {
    console.error('报名竞赛失败:', error)
    
    return {
      success: false,
      message: error instanceof Error ? error.message : '报名失败，请稍后重试'
    }
  }
}

/**
 * 获取所有可用的指导老师列表
 */
export async function getAvailableTeachers() {
  try {
    const teachers = await prisma.teacher.findMany({
      select: {
        id: true,
        name: true,
        teacherNo: true,
        department: true
      },
      orderBy: { createdAt: 'desc' }
    })

    // Convert null departments to undefined for frontend compatibility
    return teachers.map((teacher: any) => ({
      ...teacher,
      department: teacher.department === null ? undefined : teacher.department
    }))
  } catch (error) {
    console.error('获取老师列表失败:', error)
    throw error instanceof Error ? error : new Error('获取老师列表失败，请稍后重试')
  }
}

/**
 * 重新提交报名申请（学生使用）
 */
export async function resubmitRegistration(registrationId: string, data: {
  applicantName?: string
  projectName?: string
  teamMembers?: string
  teacherId?: string
  notes?: string
}) {
  const { userId } = await auth()
  
  if (!userId) {
    throw new Error('用户未登录')
  }

  try {
    // 检查报名记录是否存在且属于当前用户
    const existingRegistration = await prisma.registration.findUnique({
      where: { id: registrationId }
    })

    if (!existingRegistration) {
      throw new Error('报名记录不存在')
    }

    if (existingRegistration.userId !== userId) {
      throw new Error('无权限修改此报名记录')
    }

    if (existingRegistration.status !== 'REJECTED_RETRY') {
      throw new Error('只有"打回修改"状态的申请才能重新提交')
    }

    // 更新报名记录
    await prisma.registration.update({
      where: { id: registrationId },
      data: {
        applicantName: data.applicantName || null,
        projectName: data.projectName || null,
        teamMembers: data.teamMembers || null,
        teacherId: data.teacherId === 'none' ? null : data.teacherId || null,
        notes: data.notes || null,
        status: 'PENDING', // 重新设为待审核状态
        feedback: null // 清空之前的反馈
      }
    })

    // 重新验证缓存
    revalidatePath('/profile')

    return {
      success: true,
      message: '报名申请已重新提交，请等待审核'
    }
  } catch (error) {
    console.error('重新提交报名失败:', error)
    throw error instanceof Error ? error : new Error('重新提交报名失败，请稍后重试')
  }
}

/**
 * 取消报名（学生使用）
 */
export async function cancelRegistration(registrationId: string) {
  const { userId } = await auth()
  if (!userId) throw new Error('未登录')

  try {
    // 1. 先查询该报名记录，确保是本人的，且确实存在
    const registration = await prisma.registration.findUnique({
      where: { id: registrationId },
      include: {
        competition: {
          select: {
            deadline: true,
            currentParticipants: true
          }
        }
      }
    })

    if (!registration || registration.userId !== userId) {
      throw new Error('找不到该报名记录或无权操作')
    }

    // 2. 检查是否可以取消（比赛未截止且状态允许）
    if (new Date() > registration.competition.deadline) {
      throw new Error('比赛已截止，无法取消报名')
    }

    if (registration.status === 'REJECTED_FINAL') {
      throw new Error('已被最终驳回，无法取消报名')
    }

    // 3. 开启原子事务：删除记录 + 释放名额
    await prisma.$transaction([
      // 操作 A：彻底删除这条报名记录
      prisma.registration.delete({
        where: { id: registrationId }
      }),
      // 操作 B：对应的比赛报名人数安全减 1（不能低于 0）
      prisma.competition.update({
        where: { 
          id: registration.competitionId,
          currentParticipants: {
            gt: 0 // 确保当前人数大于0才减
          }
        },
        data: {
          currentParticipants: {
            decrement: 1
          }
        }
      })
    ])

    // 刷新缓存
    revalidatePath('/profile')
    revalidatePath('/competitions')

    return { 
      success: true,
      message: '报名已取消，名额已释放'
    }

  } catch (error) {
    console.error('取消报名失败:', error)
    throw error instanceof Error ? error : new Error('取消报名失败，请稍后重试')
  }
}
