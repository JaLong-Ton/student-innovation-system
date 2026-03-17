import { StatsCards } from '@/components/achievements/stats-cards'
import { AchievementList } from '@/components/achievements/achievement-list'

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
  }
]

export default function TestComponentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">组件测试页面</h1>
        
        {/* 统计卡片测试 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">统计卡片</h2>
          <StatsCards achievements={mockAchievements} />
        </div>

        {/* 成就列表测试 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">成就列表</h2>
          <AchievementList achievements={mockAchievements} />
        </div>

        {/* 空状态测试 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">空状态测试</h2>
          <AchievementList achievements={[]} />
        </div>
      </div>
    </div>
  )
}
