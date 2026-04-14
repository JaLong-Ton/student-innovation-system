import { StatsCards } from '@/components/achievements/stats-cards'
import { AchievementList } from '@/components/achievements/achievement-list'

// 模拟数据
const mockAchievements = [
  {
    id: '1',
    title: '全国大学生数学建模竞赛一等奖',
    type: 'AWARD',
    level: 'STATE',
    date: new Date('2024-01-15'),
    userId: 'test-user',
    createdAt: new Date(),
    status: 'APPROVED'
  },
  {
    id: '2',
    title: '基于深度学习的图像识别研究',
    type: 'PAPER',
    level: 'PROVINCE',
    date: new Date('2024-03-20'),
    userId: 'test-user',
    createdAt: new Date(),
    status: 'APPROVED'
  }
]

export default function TestProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* 顶部欢迎语和统计 */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">个人中心测试</h1>
          <StatsCards achievements={mockAchievements} />
        </div>

        {/* 主体内容 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧：简单占位 */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">表单区域</h3>
              <p className="text-sm text-gray-600">这里应该是成就表单</p>
            </div>
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
