import { getCompetitions, getAvailableTeachers } from '@/app/actions/competitions'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { RegisterButton } from '@/components/competitions/register-button'
import { Calendar, Users, Clock } from 'lucide-react'

// 定义类型
interface Competition {
  id: string
  name: string
  description: string
  deadline: Date
  category?: string
  isRegistered: boolean
  isExpired: boolean
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
      TECHNICAL: 'bg-purple-100 text-purple-800',
      PROGRAMMING: 'bg-blue-100 text-blue-800',
      AI: 'bg-green-100 text-green-800',
      LANGUAGE: 'bg-yellow-100 text-yellow-800',
      INNOVATION: 'bg-red-100 text-red-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
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
    return (
      <div className="border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md">
        {/* Header - 标题和分类标签并排 */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-bold text-gray-900 flex-1 mr-3">{competition.name}</h3>
          {competition.category && (
            <span className={`inline-block px-2 py-1 rounded text-xs ${getCategoryColor(competition.category)} flex-shrink-0`}>
              {getCategoryLabel(competition.category)}
            </span>
          )}
        </div>
        
        {/* 描述 */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{competition.description}</p>
        
        {/* 截止日期 */}
        <div className="text-sm text-orange-600 mb-4">
          截止日期：{formatDate(competition.deadline)}
        </div>
        
        {/* 报名按钮 */}
        <RegisterButton 
          competitionId={competition.id}
          isRegistered={competition.isRegistered}
          isExpired={competition.isExpired}
          teachers={teachers}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
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
