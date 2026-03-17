import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { getAchievements } from '@/app/actions/achievements'
import { AchievementFormClient } from '@/components/forms/achievement-form-client'
import { AchievementList } from '@/components/profile/achievement-list'
import { StatsCards } from '@/components/achievements/stats-cards'
import { Toaster } from '@/components/ui/sonner'
import { prisma } from '@/lib/prisma'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RegistrationList } from '@/components/profile/registration-list'
import { getAvailableTeachers } from '@/app/actions/competitions'

export default async function ProfilePage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  const achievements = await getAchievements()

  // 获取老师列表
  const teachers = await getAvailableTeachers()

  // 获取用户的所有报名记录
  const registrations = await prisma.registration.findMany({
    where: { userId },
    include: {
      competition: true,
      teacher: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  // 转换类型，将 null 转换为 undefined
  const formattedRegistrations = registrations.map(reg => ({
    id: reg.id,
    status: reg.status,
    applicantName: reg.applicantName || undefined,
    projectName: reg.projectName || undefined,
    teamMembers: reg.teamMembers || undefined,
    notes: reg.notes || undefined,
    feedback: (reg as any).feedback || undefined, // 临时处理，等 Prisma 重新生成后移除
    createdAt: reg.createdAt,
    competition: reg.competition,
    teacher: reg.teacher ? {
      id: reg.teacher.id,
      name: reg.teacher.name,
      teacherNo: reg.teacher.teacherNo,
      department: reg.teacher.department || undefined
    } : undefined
  }))

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* 顶部欢迎语和统计 */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">个人中心</h1>
            <StatsCards achievements={achievements} />
          </div>

          {/* 主体内容 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 左侧：新增成就表单 */}
            <div className="lg:col-span-1">
              <AchievementFormClient />
            </div>

            {/* 右侧：Tabs内容区 */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="achievements" className="w-full block space-y-6">
                <TabsList className="inline-flex h-11 items-center justify-center rounded-lg bg-gray-100 p-1 mb-2">
                  <TabsTrigger value="achievements" className="px-6">我的成就</TabsTrigger>
                  <TabsTrigger value="registrations" className="px-6">赛事申请与状态</TabsTrigger>
                </TabsList>
                
                <TabsContent value="achievements" className="mt-0 w-full outline-none">
                  <AchievementList achievements={achievements} />
                </TabsContent>
                
                <TabsContent value="registrations" className="mt-0 w-full outline-none">
                  <RegistrationList registrations={formattedRegistrations} teachers={teachers} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  )
}
