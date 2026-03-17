import { auth, clerkClient } from '@clerk/nextjs/server'
import { NextRequest } from 'next/server'
import { prisma } from './prisma'

/**
 * 获取当前登录用户信息（服务端）
 */
export async function getCurrentUser() {
  const { userId } = await auth()
  
  if (!userId) {
    return null
  }

  // 先从 Clerk 获取用户信息
  const clerk = await clerkClient()
  const clerkUser = await clerk.users.getUser(userId)
  
  // 然后从数据库获取用户信息
  const dbUser = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      achievements: true,
      registrations: {
        include: {
          competition: true
        }
      }
    }
  })

  return {
    clerk: clerkUser,
    database: dbUser
  }
}

/**
 * 获取当前用户 ID（服务端）
 */
export async function getCurrentUserId() {
  const { userId } = await auth()
  return userId
}

/**
 * 检查用户是否已登录（服务端）
 */
export async function isAuthenticated() {
  const { userId } = await auth()
  return !!userId
}

/**
 * 同步 Clerk 用户到数据库
 */
export async function syncUserToDatabase(clerkUserId: string) {
  try {
    const clerk = await clerkClient()
    const clerkUser = await clerk.users.getUser(clerkUserId)
    const email = clerkUser.emailAddresses[0]?.emailAddress

    if (!email) {
      throw new Error('User email not found')
    }

    // 使用 upsert 来创建或更新用户
    const user = await prisma.user.upsert({
      where: { id: clerkUserId },
      update: {
        email,
        name: `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim() || null,
      },
      create: {
        id: clerkUserId,
        email,
        name: `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim() || null,
      },
    })

    return user
  } catch (error) {
    console.error('Error syncing user to database:', error)
    throw error
  }
}
