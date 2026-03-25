import { getCompetitions, getAvailableTeachers } from '@/app/actions/competitions'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { RegisterButton } from '@/components/competitions/register-button'
import { Calendar, Users, Clock, Flame } from 'lucide-react'

// 定义类型
interface Competition {
  id: string
  name: string
  description: string
  deadline: Date
  category?: string
  isRegistered: boolean
  isExpired: boolean
  // 新增以下两个字段
  currentParticipants: number
  maxParticipants: number
}

export default async function CompetitionsPage() {
  const competitions = await getCompetitions() as Competition[]
  const teachers: Array<{
    id: string
    name: string
    teacherNo: string
    department?: string | null | undefined
  }> = (await getAvailableTeachers()).map(teacher => ({
    ...teacher,
    department: teacher.department || undefined
  }))

  // 获取所有分类 - 确保顺序稳定
  const categories = ['TECHNICAL', 'PROGRAMMING', 'AI', 'LANGUAGE', 'INNOVATION'].filter(cat => 
    competitions.some(c => c.category === cat)
  )

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      TECHNICAL: 'bg-purple-50 text-purple-700 border-purple-200',
      PROGRAMMING: 'bg-blue-50 text-blue-700 border-blue-200',
      AI: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      LANGUAGE: 'bg-amber-50 text-amber-700 border-amber-200',
      INNOVATION: 'bg-rose-50 text-rose-700 border-rose-200'
    }
    return colors[category] || 'bg-gray-50 text-gray-700 border-gray-200'
  }

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      TECHNICAL: '技术类',
      PROGRAMMING: '编程类',
      AI: '人工智能',
      LANGUAGE: '语言类',
      INNOVATION: '创新类'
    }
    return labels[category] || '其他'
  }

  // 竞赛卡片组件
  function CompetitionCard({ 
    competition, 
    formatDate, 
    getCategoryColor, 
    getCategoryLabel,
    teachers
  }: {
    competition: Competition
    formatDate: (date: Date) => string
    getCategoryColor: (category: string) => string
    getCategoryLabel: (category: string) => string
    teachers: Array<{
      id: string
      name: string
      teacherNo: string
      department?: string | null
    }>
  }) {
    // 计算是否即将截止 (小于3天)
    const isUrgent = competition.deadline.getTime() - new Date().getTime() < 3 * 24 * 60 * 60 * 1000 && !competition.isExpired
    // 计算报名进度百分比
    const percent = Math.min(100, Math.round(((competition.currentParticipants || 0) / (competition.maxParticipants || 1)) * 100))

    return (
      <div className="group flex flex-col h-full justify-between bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
        <div className="flex-1 flex flex-col">
          {/* 顶部：标题与标签 */}
          <div className="flex justify-between items-start mb-4 gap-4">
            <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors truncate flex-1 mr-2">
              {competition.name}
            </h3>
            {competition.category && (
              <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap border ${getCategoryColor(competition.category)}`}>
                {getCategoryLabel(competition.category)}
              </span>
            )}
          </div>
          
          {/* 描述信息 */}
          <p className="text-sm text-gray-500 mb-6 line-clamp-2 break-all leading-relaxed min-h-[40px]">
            {competition.description || '暂无赛事详细介绍'}
          </p>
        </div> {/* 这里是 flex-1 容器的结束闭合 */}

          {/* 底部：数据与操作区 (左右分栏重构) */}
          <div className="mt-auto pt-5 border-t border-gray-100 flex flex-row items-end justify-between gap-4">
            
            {/* 左侧：精简的数据与微型进度条 */}
            <div className="flex-1 space-y-3">
              {/* 截止日期 */}
              <div className="flex items-center text-sm">
                {isUrgent ? (
                  <Flame className="w-4 h-4 mr-1.5 text-red-500 animate-pulse" />
                ) : (
                  <Calendar className="w-4 h-4 mr-1.5 text-gray-400" />
                )}
                <span className={isUrgent ? 'text-red-600 font-medium' : 'text-gray-500'}>
                  {isUrgent ? '即将截止：' : '截止：'}
                  {formatDate(competition.deadline)}
                </span>
              </div>
              
              {/* 微型报名进度 */}
              <div className="space-y-1.5 pr-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">
                    <Users className="w-3.5 h-3.5 inline mr-1 -mt-0.5 text-gray-400" />
                    已报: <span className="font-semibold text-gray-700">{competition.currentParticipants || 0}</span> / {competition.maxParticipants}
                  </span>
                  <span className="font-medium text-gray-400">{percent}%</span>
                </div>
                {/* 进度条变得更纤细精致 */}
                <div className="w-full bg-gray-100 rounded-full h-1">
                  <div 
                    className={`h-1 rounded-full transition-all duration-1000 ${percent > 90 ? 'bg-red-400' : percent > 50 ? 'bg-blue-400' : 'bg-emerald-400'}`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* 右侧：摆脱通栏的精致按钮 */}
            {/* 限制宽度，增加圆角，加入轻微的悬浮上浮动效 */}
            <div className="shrink-0 w-[110px] [&>button]:w-full [&>button]:rounded-xl [&>button]:shadow-sm [&>button]:h-10 hover:[&>button]:-translate-y-0.5 [&>button]:transition-all">
              <RegisterButton 
                competitionId={competition.id}
                isRegistered={competition.isRegistered}
                isExpired={competition.isExpired}
                teachers={teachers}
              />
            </div>
          </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">竞赛大厅</h1>
          <p className="text-lg text-gray-600">探索各类竞赛，挑战自我，展现才华</p>
        </div>

        {/* 强制修复后的现代胶囊式 Tabs */}
        <Tabs defaultValue="all" className="w-full block space-y-6" key="competitions-tabs">
          {/* 1. 胶囊式分类导航（锁定高度，防止无限拉伸） */}
          <TabsList className="mb-8 flex w-full flex-wrap justify-center items-center gap-3 bg-transparent h-auto max-h-20 p-0">
            <TabsTrigger 
              value="all" 
              className="h-10 flex items-center justify-center whitespace-nowrap rounded-full px-6 border border-gray-200 shadow-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600 data-[state=active]:shadow-md transition-all"
            >
              全部比赛
            </TabsTrigger>
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category} 
                className="h-10 flex items-center justify-center whitespace-nowrap rounded-full px-6 border border-gray-200 shadow-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600 data-[state=active]:shadow-md transition-all"
              >
                {getCategoryLabel(category)}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* 2. 全部比赛卡片内容 */}
          <TabsContent value="all" className="mt-0 w-full outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitions.length > 0 ? (
                competitions.map((competition: Competition) => (
                  <CompetitionCard 
                    key={competition.id} 
                    competition={competition}
                    formatDate={formatDate}
                    getCategoryColor={getCategoryColor}
                    getCategoryLabel={getCategoryLabel}
                    teachers={teachers}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="text-gray-500">
                    暂无比赛数据
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          {/* 3. 各分类比赛卡片内容 */}
          {categories.map(category => (
            <TabsContent key={`content-${category}`} value={category} className="mt-0 w-full outline-none">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {competitions
                  .filter((c: Competition) => c.category === category)
                  .length > 0 ? (
                  competitions
                  .filter((c: Competition) => c.category === category)
                  .map((competition: Competition) => (
                    <CompetitionCard 
                      key={competition.id} 
                      competition={competition}
                      formatDate={formatDate}
                      getCategoryColor={getCategoryColor}
                      getCategoryLabel={getCategoryLabel}
                      teachers={teachers}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <div className="text-gray-500">
                      暂无此类比赛
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
