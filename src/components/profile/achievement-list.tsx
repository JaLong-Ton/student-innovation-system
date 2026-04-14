'use client'

import { useState, useMemo } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { ArrowUpDown, ArrowUp, ArrowDown, Trophy, FileText, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Achievement {
  id: string
  title: string
  type: string
  level: string
  status: string
  date: Date
  createdAt: Date
  userId: string
}

interface AchievementListProps {
  achievements: Achievement[]
  filterType?: 'ALL' | 'AWARD' | 'PAPER' | 'PATENT'
}

export function AchievementList({ achievements, filterType: externalFilterType }: AchievementListProps) {
  const [filterType, setFilterType] = useState<'ALL' | 'AWARD' | 'PAPER' | 'PATENT'>('ALL')
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc')

  // 使用外部传入的filterType或内部状态
  const currentFilterType = externalFilterType || filterType

  // 过滤和排序逻辑
  const filteredAndSortedAchievements = useMemo(() => {
    let filtered = achievements

    // 过滤
    if (currentFilterType !== 'ALL') {
      filtered = achievements.filter(achievement => achievement.type === currentFilterType)
    }

    // 排序
    return [...filtered].sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB
    })
  }, [achievements, currentFilterType, sortOrder])

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

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'PENDING':
        return { label: '审核中', color: 'bg-gray-100 text-gray-800 border-gray-200' }
      case 'APPROVED':
        return { label: '已认证', color: 'bg-green-100 text-green-800 border-green-200' }
      case 'REJECTED':
        return { label: '已驳回', color: 'bg-red-100 text-red-800 border-red-200' }
      default:
        return { label: '未知', color: 'bg-gray-100 text-gray-800 border-gray-200' }
    }
  }

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

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  }

  return (
    <div className="space-y-6">
      {/* 高级工具栏 - 只在没有外部filterType时显示 */}
      {!externalFilterType && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          {/* 左侧 - 分类过滤 */}
          <Tabs value={filterType} onValueChange={(value) => setFilterType(value as any)} className="w-full sm:w-auto">
            <TabsList className="grid w-full sm:w-auto grid-cols-4 h-9 bg-gray-100">
              <TabsTrigger 
                value="ALL" 
                className="text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
              >
                全部
              </TabsTrigger>
              <TabsTrigger 
                value="AWARD" 
                className="text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
              >
                获奖
              </TabsTrigger>
              <TabsTrigger 
                value="PAPER" 
                className="text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
              >
                论文
              </TabsTrigger>
              <TabsTrigger 
                value="PATENT" 
                className="text-xs font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
              >
                专利
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* 右侧 - 时间排序 */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
            className="flex items-center gap-2 h-9 text-xs"
          >
            {sortOrder === 'desc' ? (
              <>
                <ArrowDown className="h-3 w-3" />
                最新获得
              </>
            ) : (
              <>
                <ArrowUp className="h-3 w-3" />
                最早获得
              </>
            )}
          </Button>
        </div>
      )}

      {/* 成就列表 */}
      <div className="space-y-4">
        {filteredAndSortedAchievements.length > 0 ? (
          filteredAndSortedAchievements.map((achievement) => (
            <Card key={achievement.id} className="hover:shadow-md transition-shadow duration-200 border border-gray-100">
              <CardContent className="p-6">
                {/* 首行 - 头部：图标+标题 | 类型+状态标签 */}
                <div className="flex items-center justify-between mb-3">
                  {/* 左侧：图标和标题 */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {getAchievementIcon(achievement.type)}
                    <h3 className="text-lg font-medium text-gray-900 truncate">
                      {achievement.title}
                    </h3>
                  </div>
                  
                  {/* 右侧：类型和状态标签 */}
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      {getAchievementLabel(achievement.type)}
                    </Badge>
                    <Badge className={getStatusInfo(achievement.status).color}>
                      {getStatusInfo(achievement.status).label}
                    </Badge>
                  </div>
                </div>
                
                {/* 次行 - 底部信息：时间和级别 */}
                <div className="text-sm text-gray-500">
                  获得时间：{formatDate(achievement.date)} | 级别：{getLevelLabel(achievement.level)}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500">
              {filterType === 'ALL' ? '暂无成就记录' : `暂无${getAchievementLabel(filterType)}记录`}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
