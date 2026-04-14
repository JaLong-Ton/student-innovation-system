'use client'

import { AchievementList } from '@/components/profile/achievement-list'

// 测试数据
const testAchievements = [
  {
    id: 'demo-1',
    userId: 'test-user',
    title: '全国大学生数学建模竞赛一等奖',
    type: 'AWARD',
    level: 'STATE',
    date: new Date('2024-09-15'),
    createdAt: new Date('2024-09-15'),
    status: 'APPROVED'
  },
  {
    id: 'demo-2',
    userId: 'test-user',
    title: '基于深度学习的图像识别算法研究',
    type: 'PAPER',
    level: 'PROVINCE',
    date: new Date('2024-06-20'),
    createdAt: new Date('2024-06-20'),
    status: 'APPROVED'
  },
  {
    id: 'demo-3',
    userId: 'test-user',
    title: '智能垃圾分类系统发明专利',
    type: 'PATENT',
    level: 'SCHOOL',
    date: new Date('2024-03-10'),
    createdAt: new Date('2024-03-10'),
    status: 'APPROVED'
  }
]

export default function PublicTestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">成就列表功能测试</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AchievementList achievements={testAchievements} />
          </div>
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">功能说明</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 点击顶部的分类标签可以过滤成就类型</li>
                <li>• 点击右侧的排序按钮可以切换时间顺序</li>
                <li>• 支持全部、获奖、论文、专利四种分类</li>
                <li>• 支持最新获得和最早获得两种排序</li>
                <li>• 现代化的 SaaS 面板设计风格</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
