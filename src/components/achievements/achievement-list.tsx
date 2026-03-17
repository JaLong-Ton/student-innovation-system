import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Achievement } from '@prisma/client'
import { format } from 'date-fns'

interface AchievementListProps {
  achievements: Achievement[]
}

const typeLabels: Record<string, string> = {
  AWARD: '获奖',
  PAPER: '论文',
  PATENT: '专利'
}

const levelLabels: Record<string, string> = {
  STATE: '国家级',
  PROVINCE: '省级',
  SCHOOL: '校级'
}

const levelColors: Record<string, string> = {
  STATE: 'bg-red-100 text-red-800',
  PROVINCE: 'bg-blue-100 text-blue-800',
  SCHOOL: 'bg-green-100 text-green-800'
}

export function AchievementList({ achievements }: AchievementListProps) {
  if (achievements.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>我的成就清单</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="text-gray-500">
              <p className="text-lg mb-2">暂无成就记录</p>
              <p className="text-sm">开始添加你的第一个成就吧！</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>我的成就清单</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                  <Badge variant="secondary">{typeLabels[achievement.type]}</Badge>
                  <Badge className={levelColors[achievement.level]}>
                    {levelLabels[achievement.level]}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500">
                  获得时间：{format(new Date(achievement.date), 'yyyy年MM月dd日')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
