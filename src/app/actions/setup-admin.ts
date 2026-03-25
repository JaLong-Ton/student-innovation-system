'use server'

import { clerkClient } from '@clerk/nextjs/server'
import { auth } from '@clerk/nextjs/server'

/**
 * 设置当前用户为管理员（临时工具，生产环境应移除）
 */
export async function setCurrentUserAsAdmin() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return {
        success: false,
        message: '用户未登录'
      }
    }

    const clerk = await clerkClient()
    await clerk.users.updateUser(userId, {
      publicMetadata: {
        role: 'admin'
      }
    })

    return {
      success: true,
      message: '已设置为管理员，请刷新页面'
    }
  } catch (error) {
    console.error('设置管理员失败:', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : '设置管理员失败'
    }
  }
}
