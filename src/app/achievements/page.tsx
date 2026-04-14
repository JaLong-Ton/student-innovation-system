import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { getUserAchievements } from '@/app/actions/achievements'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Plus, Trophy, FileText, Lightbulb } from 'lucide-react'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'

export const dynamic = 'force-dynamic';

// 获取成就类型图标
function getAchievementIcon(type: string) {
  switch (type) {
    case 'AWARD':
      return <Trophy className="h-5 w-5" />
    case 'PAPER':
      return <FileText className="h-5 w-5" />
    case 'PATENT':
      return <Lightbulb className="h-5 w-5" />
    default:
      return <Trophy className="h-5 w-5" />
  }
}

// 获取成就类型标签
function getAchievementTypeLabel(type: string) {
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

// 获取成就级别标签
function getAchievementLevelLabel(level: string) {
  switch (level) {
    case 'STATE':
      return '国家级'
    case 'PROVINCE':
      return '省级'
    case 'SCHOOL':
      return '校级'
    default:
      return '其他'
  }
}

// 获取成就级别颜色
function getAchievementLevelColor(level: string) {
  switch (level) {
    case 'STATE':
      return 'bg-red-100 text-red-800'
    case 'PROVINCE':
      return 'bg-blue-100 text-blue-800'
    case 'SCHOOL':
      return 'bg-green-100 text-green-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default async function AchievementsPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  const achievements = await getUserAchievements()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">我的成就</h1>
          <p className="text-gray-600 mt-2">记录和管理您的学术成就</p>
        </div>
        <Link href="/achievements/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            添加成就
          </Button>
        </Link>
      </div>

      {achievements.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Trophy className="h-6 w-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">暂无成就记录</h3>
            <p className="text-gray-600 mb-4">
              开始记录您的第一个成就吧！
            </p>
            <Link href="/achievements/new">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                添加成就
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {achievements.map((achievement: any) => (
            <Card key={achievement.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="text-blue-600">
                      {getAchievementIcon(achievement.type)}
                    </div>
                    <Badge variant="secondary">
                      {getAchievementTypeLabel(achievement.type)}
                    </Badge>
                  </div>
                  <Badge className={getAchievementLevelColor(achievement.level)}>
                    {getAchievementLevelLabel(achievement.level)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {achievement.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">📅</span>
                  {format(new Date(achievement.date), 'yyyy年MM月dd日', { locale: zhCN })}
                </div>
                <div className="mt-4 pt-4 border-t flex justify-between items-center">
                  <span className="text-xs text-gray-400">
                    {format(new Date(achievement.createdAt), '添加于 yyyy-MM-dd', { locale: zhCN })}
                  </span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      编辑
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      删除
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
