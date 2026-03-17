import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getUserAchievements } from '@/app/actions/achievements'
import { Trophy, FileText, Lightbulb } from 'lucide-react'

export default async function Dashboard() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  // 获取用户成就数据
  const achievements = await getUserAchievements()

  // 统计数据
  const stats = {
    awards: achievements.filter(a => a.type === 'AWARD').length,
    papers: achievements.filter(a => a.type === 'PAPER').length,
    patents: achievements.filter(a => a.type === 'PATENT').length,
    total: achievements.length
  }

  // 最近成就
  const recentAchievements = achievements
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">个人数据大屏</h1>
        <p className="text-gray-600">查看和管理您的双创成就</p>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">总成就数</CardTitle>
            <div className="h-4 w-4 text-muted-foreground">🏆</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">
              累计获得成就
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">获奖项目</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.awards}</div>
            <p className="text-xs text-muted-foreground">
              竞赛获奖数量
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">论文发表</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.papers}</div>
            <p className="text-xs text-muted-foreground">
              学术论文数量
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">专利申请</CardTitle>
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.patents}</div>
            <p className="text-xs text-muted-foreground">
              知识产权数量
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 快速操作 */}
        <Card>
          <CardHeader>
            <CardTitle>快速操作</CardTitle>
            <CardDescription>
              常用功能快速入口
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="/achievements/new">
              <Button className="w-full">添加新成就</Button>
            </Link>
            <Link href="/achievements">
              <Button variant="outline" className="w-full">管理成就</Button>
            </Link>
            <Link href="/competitions">
              <Button variant="outline" className="w-full">浏览竞赛</Button>
            </Link>
            <Button variant="outline" className="w-full" disabled>
              打印履历 (开发中)
            </Button>
          </CardContent>
        </Card>

        {/* 最近成就 */}
        <Card>
          <CardHeader>
            <CardTitle>最近成就</CardTitle>
            <CardDescription>
              您最近添加的成就记录
            </CardDescription>
          </CardHeader>
          <CardContent>
            {recentAchievements.length === 0 ? (
              <div className="text-center text-muted-foreground py-8">
                <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-gray-400" />
                </div>
                <p className="mb-4">暂无成就记录</p>
                <Link href="/achievements/new">
                  <Button size="sm">添加第一个成就</Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {recentAchievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-sm truncate">{achievement.title}</p>
                      <p className="text-xs text-gray-500">
                        {achievement.type === 'AWARD' && '获奖'}
                        {achievement.type === 'PAPER' && '论文'}
                        {achievement.type === 'PATENT' && '专利'}
                        {' • '}
                        {achievement.level === 'STATE' && '国家级'}
                        {achievement.level === 'PROVINCE' && '省级'}
                        {achievement.level === 'SCHOOL' && '校级'}
                      </p>
                    </div>
                    <div className="text-xs text-gray-400">
                      {new Date(achievement.createdAt).toLocaleDateString('zh-CN')}
                    </div>
                  </div>
                ))}
                <Link href="/achievements">
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    查看全部成就
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
