import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { getAchievements } from '@/app/actions/achievements'
import { AchievementFormClient } from '@/components/forms/achievement-form-client'
import { StatsCards } from '@/components/achievements/stats-cards'
import { Toaster } from '@/components/ui/sonner'
import { prisma } from '@/lib/prisma'
import { RegistrationList } from '@/components/profile/registration-list'
import { getAvailableTeachers } from '@/app/actions/competitions'
import PDFExportWrapper from '@/components/profile/pdf-export-wrapper'
import { ResumeTemplate } from '@/components/profile/resume-template'
import { CancelRegistrationButton } from '@/components/profile/cancel-registration-button'
import { ProfileContentClient } from '@/components/profile/profile-content-client'

export const dynamic = 'force-dynamic';

export default async function ProfilePage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  const achievements = await getAchievements()

  // 获取用户信息
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true
    }
  })

  if (!user) {
    redirect('/sign-in')
  }

  // 计算统计数据 - 只统计已通过的成就
  const approvedAchievements = achievements.filter(a => a.status === 'APPROVED')
  const stats = {
    total: approvedAchievements.length,
    awards: approvedAchievements.filter(a => a.type === 'AWARD').length,
    papers: approvedAchievements.filter(a => a.type === 'PAPER').length,
    patents: approvedAchievements.filter(a => a.type === 'PATENT').length
  }

  // 格式化成就数据用于模板 - 只包含已通过的成就
  const formattedAchievements = approvedAchievements.map(achievement => ({
    name: achievement.title,
    type: achievement.type,
    level: achievement.level,
    date: achievement.date.toLocaleDateString('zh-CN')
  }))

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
        <div id="resume-content" className="space-y-8">
          {/* 顶部欢迎语和统计 */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">个人中心</h1>
              <PDFExportWrapper targetId="resume-print-template" fileName="我的双创成就履历" />
            </div>
            <StatsCards achievements={achievements} />
          </div>

          {/* 主体内容 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 左侧：新增成就表单 */}
            <div className="lg:col-span-1">
              <AchievementFormClient />
            </div>

            {/* 右侧：动画标签内容区 */}
            <div className="lg:col-span-2">
              <ProfileContentClient 
                achievements={achievements}
                formattedRegistrations={formattedRegistrations}
                teachers={teachers}
              />
            </div>
          </div>
        </div>
      </div>
      <Toaster />
      
      {/* 隐形的履历打印模板 */}
      <ResumeTemplate 
        user={{
          name: user.name || '未设置姓名',
          email: user.email,
          id: user.id
        }}
        stats={stats}
        achievements={formattedAchievements}
      />
    </>
  )
}
