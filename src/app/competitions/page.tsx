import { getCompetitions, getAvailableTeachers } from '@/app/actions/competitions'
import { Button } from '@/components/ui/button'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CompetitionsTabsClient } from '@/components/competitions/competitions-tabs-client'
import { RegisterButton } from '@/components/competitions/register-button'

export const dynamic = 'force-dynamic';

// 获取分类标签颜色
const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'TECHNICAL': 'bg-blue-100 text-blue-800 border-blue-200',
    'PROGRAMMING': 'bg-green-100 text-green-800 border-green-200',
    'AI': 'bg-purple-100 text-purple-800 border-purple-200',
    'LANGUAGE': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'INNOVATION': 'bg-pink-100 text-pink-800 border-pink-200'
  }
  return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200'
}

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
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

// 获取级别标签颜色
const getLevelColor = (level: string) => {
  const colors: Record<string, string> = {
    '国际级': 'bg-red-50 text-red-700 border-red-200',
    '国家级': 'bg-orange-50 text-orange-700 border-orange-200',
    '省级': 'bg-blue-50 text-blue-700 border-blue-200',
    '市级': 'bg-green-50 text-green-700 border-green-200',
    '校级': 'bg-gray-50 text-gray-700 border-gray-200'
  }
  return colors[level] || 'bg-gray-50 text-gray-700 border-gray-200'
}

// 竞赛卡片组件
function CompetitionCard({ 
  competition, 
  formatDate, 
  getCategoryColor, 
  getCategoryLabel,
  getLevelColor,
  teachers
}: {
  competition: any
  formatDate: (date: Date) => string
  getCategoryColor: (category: string) => string
  getCategoryLabel: (category: string) => string
  getLevelColor: (level: string) => string
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
          <div className="flex gap-2 flex-wrap">
            {competition.category && (
              <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap border ${getCategoryColor(competition.category)}`}>
                {getCategoryLabel(competition.category)}
              </span>
            )}
            {competition.level && (
              <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap border ${getLevelColor(competition.level)}`}>
                {competition.level}
              </span>
            )}
          </div>
        </div>
        
        {/* 描述信息 */}
        <p className="text-sm text-gray-500 mb-6 line-clamp-2 break-all leading-relaxed min-h-[40px]">
          {competition.description || '暂无赛事详细介绍'}
        </p>
      </div> {/* 这里是 flex-1 容器的结束闭合 */}

        {/* 底部：数据与操作区 (左右分栏重构) */}
        <div className="mt-auto pt-5 border-t border-gray-100 flex flex-row items-end justify-between gap-4">
          {/* 左侧：时间与进度信息 */}
          <div className="flex-1 space-y-3">
            {/* 截止时间 */}
            <div className="flex items-center gap-2 text-sm">
              <div className={`w-2 h-2 rounded-full ${isUrgent ? 'bg-red-500 animate-pulse' : 'bg-gray-300'}`}></div>
              <span className={`${isUrgent ? 'text-red-600 font-bold' : 'text-gray-600'}`}>
                截止: {formatDate(competition.deadline)}
              </span>
            </div>

            {/* 报名进度 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">报名进度</span>
                <span className="font-bold text-gray-900">
                  {competition.currentParticipants || 0}/{competition.maxParticipants}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ease-out ${
                    percent >= 90 ? 'bg-red-500' : percent >= 70 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          </div>

          {/* 右侧：操作按钮 */}
          <div className="flex flex-col gap-2 min-w-0">
            <RegisterButton 
              competitionId={competition.id}
              isRegistered={competition.isRegistered || false}
              isExpired={competition.isExpired || false}
              teachers={teachers}
            />
          </div>
        </div>
    </div>
  )
}

export default async function CompetitionsPage() {
  // 并行获取所有数据
  const [competitions, teachers] = await Promise.all([
    getCompetitions(),
    getAvailableTeachers()
  ])

  const categories = ['TECHNICAL', 'PROGRAMMING', 'AI', 'LANGUAGE', 'INNOVATION']

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">竞赛大厅</h1>
          <p className="text-lg text-gray-600">探索各类竞赛，挑战自我，展现才华</p>
        </div>

        {/* 强制修复后的现代胶囊式 Tabs */}
        <CompetitionsTabsClient defaultValue="all" className="w-full block space-y-6" key="competitions-tabs-fixed">
          {/* 1. 胶囊式分类导航（锁定高度，防止无限拉伸） */}
          <TabsList className="mb-8 flex w-full flex-wrap justify-center items-center gap-3 bg-transparent h-auto max-h-20 p-0">
            <TabsTrigger 
              value="all" 
              key="tab-all"
              className="h-10 flex items-center justify-center whitespace-nowrap rounded-full px-6 border border-gray-200 shadow-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600 data-[state=active]:shadow-md transition-all"
            >
              全部比赛
            </TabsTrigger>
            {categories.map(category => (
              <TabsTrigger 
                key={`tab-${category}`} 
                value={category} 
                className="h-10 flex items-center justify-center whitespace-nowrap rounded-full px-6 border border-gray-200 shadow-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600 data-[state=active]:shadow-md transition-all"
              >
                {getCategoryLabel(category)}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* 2. 全部比赛卡片内容 */}
          <TabsContent value="all" key="content-all" className="mt-0 w-full outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitions.length > 0 ? (
                competitions.map((competition: any) => (
                  <CompetitionCard 
                    key={competition.id} 
                    competition={competition}
                    formatDate={formatDate}
                    getCategoryColor={getCategoryColor}
                    getCategoryLabel={getCategoryLabel}
                    getLevelColor={getLevelColor}
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
                  .filter((c: any) => c.category === category)
                  .length > 0 ? (
                  competitions
                  .filter((c: any) => c.category === category)
                  .map((competition: any) => (
                    <CompetitionCard 
                      key={competition.id} 
                      competition={competition}
                      formatDate={formatDate}
                      getCategoryColor={getCategoryColor}
                      getCategoryLabel={getCategoryLabel}
                      getLevelColor={getLevelColor}
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
        </CompetitionsTabsClient>
      </div>
    </div>
  )
}
