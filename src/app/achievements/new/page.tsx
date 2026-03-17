import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { AchievementForm } from '@/components/forms/achievement-form'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default async function NewAchievementPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">添加新成就</h1>
        </div>
        <p className="text-gray-600">
          记录您的获奖、论文或专利等成就信息
        </p>
      </div>

      <AchievementForm 
        onSuccess={() => {
          // 可以在这里添加成功提示
          redirect('/dashboard')
        }}
      />
    </div>
  )
}
