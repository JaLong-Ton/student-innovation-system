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
    
    // 检查竞赛表是否为空
    const competitionCount = await prisma.competition.count()
    
    if (competitionCount === 0) {
      // 自动填充测试数据
      await prisma.competition.createMany({
        data: [
          {
            name: '全国大学生自动化控制设计大赛',
            description: '面向全国高校学生的自动化控制设计竞赛，鼓励创新思维和工程实践能力。',
            deadline: new Date('2024-06-30'),
            category: '科技创新',
            maxParticipants: 100
          },
          {
            name: 'C++算法与数据结构挑战赛',
            description: '考验参赛者的C++编程能力和算法思维，包含多种数据结构题目。',
            deadline: new Date('2024-05-15'),
            category: '编程竞赛',
            maxParticipants: 200
          },
          {
            name: 'AI与地质灾害预测创新应用赛',
            description: '运用人工智能技术解决地质灾害预测问题，推动AI在防灾减灾中的应用。',
            deadline: new Date('2024-07-20'),
            category: '人工智能',
            maxParticipants: 50
          },
          {
            name: '全国大学生英语演讲比赛',
            description: '展示英语口语表达能力，提升跨文化交流技巧的全国性赛事。',
            deadline: new Date('2024-04-30'),
            category: '文化艺术',
            maxParticipants: 150
          },
          {
            name: '创新创业项目路演大赛',
            description: '展示创新创业项目，连接创业者和投资人的重要平台。',
            deadline: new Date('2024-08-10'),
            category: '创新创业',
            maxParticipants: 80
          }
        ]
      })
    }

    // 获取竞赛列表
    const competitions = await prisma.competition.findMany({
      orderBy: { deadline: 'asc' }
    })

    // 如果用户已登录，获取用户的报名状态
    let userRegistrations: string[] = []
    if (userId) {
      const registrations = await prisma.registration.findMany({
        where: { userId },
        select: { competitionId: true }
      })
      userRegistrations = registrations.map(reg => reg.competitionId)
    }

    // 为每个竞赛添加报名状态
    const competitionsWithStatus = competitions.map(competition => ({
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
 * 报名竞赛
 */
export async function registerCompetition(competitionId: string) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return {
        success: false,
        message: '用户未登录'
      }
    }

    // 检查竞赛是否存在
    const competition = await prisma.competition.findUnique({
      where: { id: competitionId }
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
        competitionId
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

    // 创建报名记录
    await prisma.registration.create({
      data: {
        userId,
        competitionId,
        status: 'PENDING'
      }
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
