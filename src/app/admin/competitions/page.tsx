import { prisma } from '@/lib/prisma'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Plus, Calendar, Users, Edit, Trash2 } from 'lucide-react'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { DeleteCompetitionButton } from '@/components/admin/delete-competition-button'
import { ExportCompetitionButton } from '@/components/admin/export-competition-button'
import { ArchiveCompetitionButton } from '@/components/admin/archive-competition-button'

export const dynamic = 'force-dynamic';

export default async function AdminCompetitionsPage() {
  // 获取所有竞赛，按截止日期排序
  const competitions = await prisma.competition.findMany({
    orderBy: { deadline: 'asc' }
  })

  // 分类映射
  const getCategoryLabel = (category: string) => {
    const categoryMap: Record<string, string> = {
      'TECHNICAL': '技术类',
      'PROGRAMMING': '编程类',
      'AI': '人工智能',
      'LANGUAGE': '语言类',
      'INNOVATION': '创新类',
      '科技创新': '科技创新',
      '编程竞赛': '编程竞赛',
      '人工智能': '人工智能',
      '文化艺术': '文化艺术',
      '创新创业': '创新创业'
    }
    return categoryMap[category] || category
  }

  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      'TECHNICAL': 'bg-blue-100 text-blue-800',
      'PROGRAMMING': 'bg-purple-100 text-purple-800',
      'AI': 'bg-green-100 text-green-800',
      'LANGUAGE': 'bg-yellow-100 text-yellow-800',
      'INNOVATION': 'bg-red-100 text-red-800',
      '科技创新': 'bg-blue-100 text-blue-800',
      '编程竞赛': 'bg-purple-100 text-purple-800',
      '人工智能': 'bg-green-100 text-green-800',
      '文化艺术': 'bg-yellow-100 text-yellow-800',
      '创新创业': 'bg-red-100 text-red-800'
    }
    return colorMap[category] || 'bg-gray-100 text-gray-800'
  }

  const getProgressPercentage = (current: number, max: number) => {
    return Math.round((current / max) * 100)
  }

  return (
    <div className="space-y-6">
      {/* 页面标题和操作按钮 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">赛事管理</h1>
          <p className="text-gray-600 mt-1">管理和发布创新创业竞赛</p>
        </div>
        <Link href="/admin/competitions/create">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            发布新赛事
          </Button>
        </Link>
      </div>

      {/* 竞赛列表表格 */}
      <div className="bg-white rounded-lg border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>赛事名称</TableHead>
              <TableHead>分类</TableHead>
              <TableHead>截止日期</TableHead>
              <TableHead>报名进度</TableHead>
              <TableHead className="text-right">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {competitions.length > 0 ? (
              competitions.map((competition) => (
                <TableRow key={competition.id}>
                  <TableCell>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="font-medium text-gray-900 truncate max-w-[300px]">
                          {competition.name}
                        </div>
                        {/* 状态徽章 */}
                        <Badge className={competition.isActive ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}>
                          {competition.isActive ? '进行中' : '已归档'}
                        </Badge>
                      </div>
                      {competition.description && (
                        <div className="text-sm text-gray-500 break-all line-clamp-2 max-w-[300px]">
                          {competition.description}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getCategoryColor(competition.category)}>
                      {getCategoryLabel(competition.category)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      {format(competition.deadline, 'yyyy年MM月dd日', { locale: zhCN })}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1 text-gray-600">
                          <Users className="h-4 w-4" />
                          {competition.currentParticipants}/{competition.maxParticipants}
                        </span>
                        <span className="text-gray-500">
                          {getProgressPercentage(competition.currentParticipants, competition.maxParticipants)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${getProgressPercentage(competition.currentParticipants, competition.maxParticipants)}%`
                          }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/admin/competitions/${competition.id}/edit`}>
                          <Edit className="h-4 w-4 mr-1" />
                          编辑
                        </Link>
                      </Button>
                      <ExportCompetitionButton 
                        competitionId={competition.id}
                        competitionName={competition.name}
                      />
                      <ArchiveCompetitionButton 
                        competitionId={competition.id}
                        isActive={competition.isActive}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-12">
                  <div className="text-gray-500">
                    <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-gray-400" />
                    </div>
                    <p className="mb-4">暂无竞赛数据</p>
                    <Link href="/admin/competitions/create">
                      <Button variant="outline">
                        <Plus className="h-4 w-4 mr-2" />
                        创建第一个竞赛
                      </Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
