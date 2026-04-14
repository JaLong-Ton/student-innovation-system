import { getAchievementsByUserId } from '@/app/actions/admin'
import { DeleteAchievementButton } from '@/components/admin/delete-achievement-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { prisma } from '@/lib/prisma'
import { Trophy, FileText, Lightbulb, Calendar, User } from 'lucide-react'

export const dynamic = 'force-dynamic';

interface UserAchievementsPageProps {
  params: Promise<{ userId: string }>
}

export default async function UserAchievementsPage({ 
  params 
}: { 
  params: Promise<{ userId: string }> 
}) {
  // 1. 必须先 await 解析动态路由参数
  const resolvedParams = await params;
  const userId = resolvedParams.userId;

  // 2. 并发获取用户信息和成就数据
  const [user, achievements] = await Promise.all([
    // 从数据库获取用户信息，不再依赖 Clerk API
    prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true
      }
    }).catch(() => null), // 加上 catch 防止单点崩溃
    
    // 获取成就数据
    getAchievementsByUserId(userId)
  ])

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'AWARD':
        return <Trophy className="h-5 w-5 text-yellow-600" />
      case 'PAPER':
        return <FileText className="h-5 w-5 text-blue-600" />
      case 'PATENT':
        return <Lightbulb className="h-5 w-5 text-purple-600" />
      default:
        return <Trophy className="h-5 w-5 text-gray-600" />
    }
  }

  const getAchievementLabel = (type: string) => {
    switch (type) {
      case 'AWARD':
        return '获奖'
      case 'PAPER':
        return '论文'
      case 'PATENT':
        return '专利'
      default:
        return '其他'
    }
  }

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'STATE':
        return '国家级'
      case 'PROVINCE':
        return '省级'
      case 'SCHOOL':
        return '校级'
      default:
        return level
    }
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  }

  // 处理用户姓名分割
  const firstName = user?.name?.split(' ')[0] || null
  const lastName = user?.name?.split(' ').slice(1).join(' ') || null

  return (
    <div className="space-y-6 p-6">
      {/* 学生基本信息 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <User className="h-5 w-5" />
            学生基本信息
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={undefined} alt={firstName || '用户'} />
              <AvatarFallback className="text-lg">
                {(firstName?.[0] || 'U') + (lastName?.[0] || '')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {user?.name || '未设置姓名'}
              </h2>
              <p className="text-gray-600">
                {user?.email || '无邮箱'}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                用户ID: {userId}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 成就列表 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          成就列表 ({achievements.length})
        </h3>
        
        {achievements.length > 0 ? (
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <Card key={achievement.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    {/* 左侧：成就信息 */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {getAchievementIcon(achievement.type)}
                        <h4 className="text-lg font-medium text-gray-900">
                          {achievement.title}
                        </h4>
                        <Badge variant="secondary">
                          {getAchievementLabel(achievement.type)}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          获得时间：{formatDate(achievement.date)}
                        </div>
                        <div>
                          级别：{getLevelLabel(achievement.level)}
                        </div>
                      </div>
                    </div>
                    
                    {/* 右侧：删除按钮 */}
                    <DeleteAchievementButton
                      achievementId={achievement.id}
                      achievementTitle={achievement.title}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="text-gray-500">
                该学生暂无成就记录
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
