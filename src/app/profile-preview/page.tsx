import { SimpleAchievementForm } from '@/components/forms/simple-achievement-form'
import { AchievementList } from '@/components/achievements/achievement-list'
import { StatsCards } from '@/components/achievements/stats-cards'

// 模拟数据
const mockAchievements = [
  {
    id: '1',
    title: '全国大学生数学建模竞赛一等奖',
    type: 'AWARD' as const,
    level: 'STATE' as const,
    date: new Date('2024-01-15'),
    userId: 'test-user',
    createdAt: new Date()
  },
  {
    id: '2',
    title: '基于深度学习的图像识别研究',
    type: 'PAPER' as const,
    level: 'PROVINCE' as const,
    date: new Date('2024-03-20'),
    userId: 'test-user',
    createdAt: new Date()
  },
  {
    id: '3',
    title: '智能物联网控制系统专利',
    type: 'PATENT' as const,
    level: 'SCHOOL' as const,
    date: new Date('2024-02-10'),
    userId: 'test-user',
    createdAt: new Date()
  }
]

export default function ProfilePreviewPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* 顶部欢迎语和统计 */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">个人中心（预览）</h1>
          <p className="text-gray-600">这是一个预览版本，使用模拟数据展示页面效果</p>
          <StatsCards achievements={mockAchievements} />
        </div>

        {/* 主体内容 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧：新增成就表单 */}
          <div className="lg:col-span-1">
            <SimpleAchievementForm />
          </div>

          {/* 右侧：成就清单 */}
          <div className="lg:col-span-2">
            <AchievementList achievements={mockAchievements} />
          </div>
        </div>
      </div>
    </div>
  )
}
