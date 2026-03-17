'use client'

import { useUser } from '@clerk/nextjs'

/**
 * 客户端获取当前用户信息的 Hook
 */
export function useCurrentUser() {
  const { user, isLoaded, isSignedIn } = useUser()
  
  return {
    user,
    isLoaded,
    isSignedIn,
    userId: user?.id || null,
    email: user?.primaryEmailAddress?.emailAddress || null,
    name: user?.fullName || null,
    firstName: user?.firstName || null,
    lastName: user?.lastName || null,
    imageUrl: user?.imageUrl || null
  }
}
