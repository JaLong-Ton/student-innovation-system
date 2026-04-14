import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Trophy, FileText, Lightbulb, Award } from 'lucide-react'

interface StatsCardsProps {
  achievements: any[]
}

export function StatsCards({ achievements }: StatsCardsProps) {
  const totalCount = achievements.length
  const awardCount = achievements.filter(a => a.type === 'AWARD').length
  const paperCount = achievements.filter(a => a.type === 'PAPER').length
  const patentCount = achievements.filter(a => a.type === 'PATENT').length

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">总成就数</CardTitle>
          <Trophy className="h-4 w-4 text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalCount}</div>
          <p className="text-xs text-gray-500">个人成就总数</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">获奖数量</CardTitle>
          <Award className="h-4 w-4 text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{awardCount}</div>
          <p className="text-xs text-gray-500">各类竞赛奖项</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">论文数量</CardTitle>
          <FileText className="h-4 w-4 text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{paperCount}</div>
          <p className="text-xs text-gray-500">发表学术论文</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">专利数量</CardTitle>
          <Lightbulb className="h-4 w-4 text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{patentCount}</div>
          <p className="text-xs text-gray-500">申请专利数</p>
        </CardContent>
      </Card>
    </div>
  )
}
