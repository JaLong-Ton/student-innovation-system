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

export default function StatsOnlyPage() {
  const totalCount = mockAchievements.length
  const awardCount = mockAchievements.filter(a => a.type === 'AWARD').length
  const paperCount = mockAchievements.filter(a => a.type === 'PAPER').length

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">统计测试页面</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-600 mb-2">总成就数</h3>
          <div className="text-2xl font-bold">{totalCount}</div>
          <p className="text-xs text-gray-500 mt-1">个人成就总数</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-600 mb-2">获奖数量</h3>
          <div className="text-2xl font-bold">{awardCount}</div>
          <p className="text-xs text-gray-500 mt-1">各类竞赛奖项</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-600 mb-2">论文数量</h3>
          <div className="text-2xl font-bold">{paperCount}</div>
          <p className="text-xs text-gray-500 mt-1">发表学术论文</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-sm font-medium text-gray-600 mb-2">专利数量</h3>
          <div className="text-2xl font-bold">0</div>
          <p className="text-xs text-gray-500 mt-1">申请专利数</p>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow border">
        <h2 className="text-xl font-semibold mb-4">成就列表</h2>
        <div className="space-y-4">
          {mockAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                    {achievement.type === 'AWARD' ? '获奖' : achievement.type === 'PAPER' ? '论文' : '专利'}
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    {achievement.level === 'STATE' ? '国家级' : achievement.level === 'PROVINCE' ? '省级' : '校级'}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  获得时间：{achievement.date.toLocaleDateString('zh-CN')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
