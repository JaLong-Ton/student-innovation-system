'use server'

import { revalidatePath } from 'next/cache'
import { auth, clerkClient } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'
import { AchievementInput } from '@/types/achievement'

/**
 * 确保用户在数据库中存在
 */
async function ensureUserExists(userId: string) {
  try {
    // 检查用户是否已存在
    const existingUser = await prisma.user.findUnique({
      where: { id: userId }
    })
    
    if (existingUser) {
      return existingUser
    }
    
    // 从 Clerk 获取用户信息并创建数据库记录
    const clerk = await clerkClient()
    const clerkUser = await clerk.users.getUser(userId)
    const email = clerkUser.emailAddresses[0]?.emailAddress
    
    if (!email) {
      throw new Error('用户邮箱未找到')
    }
    
    const user = await prisma.user.create({
      data: {
        id: userId,
        email,
        name: `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim() || null,
      },
    })
    
    return user
  } catch (error) {
    console.error('同步用户失败:', error)
    throw new Error('用户同步失败，请稍后重试')
  }
}

/**
 * 创建新成就
 */
export async function createAchievement(data: AchievementInput) {
  try {
    // 获取当前用户ID
    const { userId } = await auth()
    
    if (!userId) {
      return {
        success: false,
        message: '用户未登录'
      }
    }

    // 验证输入数据
    const validation = validateAchievementInput(data)
    
    // 如果有验证错误，返回错误信息
    if (validation.errors) {
      return {
        success: false,
        message: '请检查表单填写是否正确',
        errors: validation.errors
      }
    }
    
    // 创建成就记录
    const achievement = await prisma.achievement.create({
      data: {
        ...validation.data,
        userId,
        date: new Date(validation.data.date),
      },
    })

    // 重新验证缓存，刷新页面数据
    revalidatePath('/profile')
    revalidatePath('/dashboard')
    revalidatePath('/achievements')

    return {
      success: true,
      data: achievement,
      message: '成就添加成功！'
    }

  } catch (error) {
    console.error('创建成就失败:', error)
    
    return {
      success: false,
      message: error instanceof Error ? error.message : '添加成就失败，请稍后重试'
    }
  }
}

/**
 * 创建新成就（FormData 版本，用于表单提交）
 */
export async function createAchievementFromForm(formData: FormData) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return {
        success: false,
        message: '用户未登录'
      }
    }

    // 确保用户在数据库中存在
    await ensureUserExists(userId)

    // 从 FormData 提取数据
    const title = formData.get('title') as string
    const type = formData.get('type') as "AWARD" | "PAPER" | "PATENT"
    const level = formData.get('level') as "STATE" | "PROVINCE" | "SCHOOL"
    const date = formData.get('date') as string

    // 验证输入数据
    const validation = validateAchievementInput({
      title,
      type,
      level,
      date
    })
    
    // 如果有验证错误，返回错误信息
    if (validation.errors) {
      return {
        success: false,
        message: '请检查表单填写是否正确',
        errors: validation.errors
      }
    }
    
    // 创建成就记录
    const achievement = await prisma.achievement.create({
      data: {
        ...validation.data,
        userId,
        date: new Date(validation.data.date),
      },
    })

    // 重新验证缓存，刷新页面数据
    revalidatePath('/profile')
    revalidatePath('/dashboard')
    revalidatePath('/achievements')

    return {
      success: true,
      data: achievement,
      message: '成就添加成功！'
    }

  } catch (error) {
    console.error('创建成就失败:', error)
    
    return {
      success: false,
      message: error instanceof Error ? error.message : '添加成就失败，请稍后重试'
    }
  }
}

/**
 * 获取用户的所有成就（简化版本，用于个人中心）
 */
export async function getAchievements() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return []
    }

    const achievements = await prisma.achievement.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    })

    // 如果没有成就，返回一些测试数据用于演示
    if (achievements.length === 0) {
      return [
        {
          id: 'demo-1',
          userId,
          title: '全国大学生数学建模竞赛一等奖',
          type: 'AWARD',
          level: 'STATE',
          date: new Date('2024-09-15'),
          createdAt: new Date('2024-09-15')
        },
        {
          id: 'demo-2',
          userId,
          title: '基于深度学习的图像识别算法研究',
          type: 'PAPER',
          level: 'PROVINCE',
          date: new Date('2024-06-20'),
          createdAt: new Date('2024-06-20')
        },
        {
          id: 'demo-3',
          userId,
          title: '智能垃圾分类系统发明专利',
          type: 'PATENT',
          level: 'SCHOOL',
          date: new Date('2024-03-10'),
          createdAt: new Date('2024-03-10')
        }
      ]
    }

    return achievements
  } catch (error) {
    console.error('获取成就列表失败:', error)
    return []
  }
}

/**
 * 获取用户的所有成就
 */
export async function getUserAchievements() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return []
    }

    const achievements = await prisma.achievement.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
    })

    return achievements

  } catch (error) {
    console.error('获取成就列表失败:', error)
    return []
  }
}

/**
 * 删除成就
 */
export async function deleteAchievement(achievementId: string) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      throw new Error('用户未登录')
    }

    // 验证成就是否属于当前用户
    const achievement = await prisma.achievement.findFirst({
      where: {
        id: achievementId,
        userId
      }
    })

    if (!achievement) {
      throw new Error('成就不存在或无权限删除')
    }

    // 删除成就
    await prisma.achievement.delete({
      where: { id: achievementId }
    })

    // 重新验证缓存
    revalidatePath('/profile')
    revalidatePath('/dashboard')
    revalidatePath('/achievements')

    return {
      success: true,
      message: '成就删除成功！'
    }

  } catch (error) {
    console.error('删除成就失败:', error)
    
    return {
      success: false,
      message: error instanceof Error ? error.message : '删除成就失败，请稍后重试'
    }
  }
}

/**
 * 更新成就
 */
export async function updateAchievement(achievementId: string, data: Partial<AchievementInput>) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      throw new Error('用户未登录')
    }

    // 验证成就是否属于当前用户
    const existingAchievement = await prisma.achievement.findFirst({
      where: {
        id: achievementId,
        userId
      }
    })

    if (!existingAchievement) {
      throw new Error('成就不存在或无权限修改')
    }

    // 验证输入数据
    const validatedData = data.date ? {
      ...data,
      date: new Date(data.date)
    } : data

    // 更新成就
    const updatedAchievement = await prisma.achievement.update({
      where: { id: achievementId },
      data: validatedData
    })

    // 重新验证缓存
    revalidatePath('/profile')
    revalidatePath('/dashboard')
    revalidatePath('/achievements')

    return {
      success: true,
      data: updatedAchievement,
      message: '成就更新成功！'
    }

  } catch (error) {
    console.error('更新成就失败:', error)
    
    return {
      success: false,
      message: error instanceof Error ? error.message : '更新成就失败，请稍后重试'
    }
  }
}

/**
 * 验证成就输入数据
 */
function validateAchievementInput(data: AchievementInput): { data: AchievementInput; errors?: Record<string, string[]> } {
  const errors: Record<string, string[]> = {
    title: [],
    type: [],
    level: [],
    date: []
  }

  // 验证标题
  if (!data.title || data.title.trim().length === 0) {
    errors.title.push('成就标题不能为空')
  } else if (data.title.length > 100) {
    errors.title.push('成就标题不能超过100个字符')
  }

  // 验证类型
  if (!['AWARD', 'PAPER', 'PATENT'].includes(data.type)) {
    errors.type.push('成就类型无效')
  }

  // 验证级别
  if (!['STATE', 'PROVINCE', 'SCHOOL'].includes(data.level)) {
    errors.level.push('成就级别无效')
  }

  // 验证日期
  if (!data.date) {
    errors.date.push('获得日期不能为空')
  } else {
    const date = new Date(data.date)
    if (isNaN(date.getTime())) {
      errors.date.push('日期格式无效')
    } else if (date > new Date()) {
      errors.date.push('获得日期不能是未来时间')
    }
  }

  // 检查是否有错误
  const hasErrors = Object.values(errors).some(fieldErrors => fieldErrors.length > 0)
  
  if (hasErrors) {
    return { data, errors }
  }

  return {
    data: {
      title: data.title.trim(),
      type: data.type,
      level: data.level,
      date: data.date
    }
  }
}
