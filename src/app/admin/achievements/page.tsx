'use client'

import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { getAllAchievements, approveAchievement, rejectAchievement } from '@/app/actions/admin'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Filter, Trophy, Award, FileText, Lightbulb, Check, X } from 'lucide-react'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { useEffect, useState } from 'react'

export const dynamic = 'force-dynamic';

// 成就类型图标映射
const achievementIcons = {
  AWARD: Trophy,
  PAPER: FileText,
  PATENT: Lightbulb // 使用 Lightbulb 替代不存在的 Patent 图标
}

// 成就级别颜色映射
const levelColors: Record<string, string> = {
  STATE: 'bg-red-100 text-red-800',
  PROVINCE: 'bg-blue-100 text-blue-800',
  SCHOOL: 'bg-green-100 text-green-800'
}

// 成就级别名称映射
const levelNames: Record<string, string> = {
  STATE: '国家级',
  PROVINCE: '省级',
  SCHOOL: '校级'
}

// 成就状态映射
const statusConfig: Record<string, { label: string; color: string }> = {
  PENDING: {
    label: '审核中',
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  },
  APPROVED: {
    label: '已认证',
    color: 'bg-green-100 text-green-800 border-green-200'
  },
  REJECTED: {
    label: '已驳回',
    color: 'bg-red-100 text-red-800 border-red-200'
  }
}

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const loadAchievements = async () => {
      try {
        const data = await getAllAchievements()
        setAchievements(data)
      } catch (error) {
        console.error('加载成就失败:', error)
        toast.error('加载成就失败')
      } finally {
        setIsLoading(false)
      }
    }

    loadAchievements()
  }, [])

  const handleApprove = (achievementId: string) => {
    startTransition(async () => {
      const result = await approveAchievement(achievementId)
      if (result.success) {
        toast.success(result.message)
        // 更新本地状态
        setAchievements(prev => 
          prev.map(a => a.id === achievementId ? { ...a, status: 'APPROVED' } : a)
        )
      } else {
        toast.error(result.message)
      }
    })
  }

  const handleReject = (achievementId: string) => {
    startTransition(async () => {
      const result = await rejectAchievement(achievementId)
      if (result.success) {
        toast.success(result.message)
        // 更新本地状态
        setAchievements(prev => 
          prev.map(a => a.id === achievementId ? { ...a, status: 'REJECTED' } : a)
        )
      } else {
        toast.error(result.message)
      }
    })
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">用户成就库</h1>
          <p className="text-gray-600 mt-2">查看和管理所有用户的成就记录</p>
        </div>
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{achievements.length}</div>
              <div className="text-sm text-blue-600">总成就数</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 搜索和筛选 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            搜索和筛选
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="搜索学生姓名、成就名称..."
                className="w-full"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              筛选
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 成就列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.length > 0 ? (
          achievements.map((achievement: any) => {
            const IconComponent = achievementIcons[achievement.type as keyof typeof achievementIcons] || Trophy
            const levelColor = levelColors[achievement.level] || levelColors.SCHOOL
            const levelName = levelNames[achievement.level] || levelNames.SCHOOL
            const statusInfo = statusConfig[achievement.status] || statusConfig.PENDING

            return (
              <Card key={achievement.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2 gap-2">
                    {/* 左边：图标 + 标题 */}
                    <div className="flex-1 min-w-0 flex items-start gap-3 pr-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        {/* 关键修复：给标题加上防撑破属性 */}
                        <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2 break-all leading-tight">
                          {achievement.title}
                        </CardTitle>
                        {/* 修复：标签行使用 flex-wrap 防止撑破 */}
                        <div className="flex flex-wrap gap-2 mt-1">
                          <Badge className={levelColor}>
                            {levelName}
                          </Badge>
                          <Badge variant="outline">
                            {achievement.type === 'AWARD' ? '奖项' : 
                             achievement.type === 'PAPER' ? '论文' : '专利'}
                          </Badge>
                          <Badge className={statusInfo.color}>
                            {statusInfo.label}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    {/* 右边：操作按钮区域（关键修复：加上 shrink-0 防止被挤压） */}
                    {achievement.status === 'PENDING' && (
                      <div className="shrink-0 flex items-center gap-1">
                        <Button
                          size="sm"
                          onClick={() => handleApprove(achievement.id)}
                          disabled={isPending}
                          className="h-8 px-2 bg-green-600 hover:bg-green-700 text-white"
                        >
                          <Check className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleReject(achievement.id)}
                          disabled={isPending}
                          variant="destructive"
                          className="h-8 px-2"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {/* 学生信息 */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">
                          {achievement.user?.name?.charAt(0) || 'U'}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 truncate max-w-[120px]">
                          {achievement.user?.name || '未知用户'}
                        </div>
                        <div className="text-sm text-gray-500 truncate max-w-[120px]">
                          {achievement.user?.email || ''}
                        </div>
                      </div>
                    </div>

                    {/* 获得时间 */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Award className="h-4 w-4" />
                      获得时间：{format(new Date(achievement.date), 'yyyy年MM月dd日', { locale: zhCN })}
                    </div>

                    {/* 创建时间 */}
                    <div className="text-xs text-gray-400 border-t pt-2">
                      记录创建：{format(new Date(achievement.createdAt), 'yyyy-MM-dd HH:mm', { locale: zhCN })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })
        ) : (
          <div className="col-span-full">
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">暂无成就记录</h3>
                <p className="text-gray-600 text-center max-w-md">
                  目前还没有任何成就记录。当管理员审批通过学生的竞赛报名后，系统会自动生成相应的成就记录。
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
