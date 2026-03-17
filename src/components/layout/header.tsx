'use client'

import { useCurrentUser } from '@/hooks/use-user'
import { SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  const { isSignedIn, user } = useCurrentUser()

  return (
    <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">大学生双创系统</h1>
        </Link>
        
        <nav className="flex items-center space-x-4">
          {isSignedIn ? (
            <>
              <Link href="/profile">
                <Button variant="ghost">个人中心</Button>
              </Link>
              <Link href="/competitions">
                <Button variant="ghost">竞赛大厅</Button>
              </Link>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  {user?.firstName || user?.emailAddresses?.[0]?.emailAddress}
                </span>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8"
                    }
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost">登录</Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button>注册</Button>
              </SignInButton>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
