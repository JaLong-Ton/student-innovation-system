import { format } from 'date-fns'

interface ResumeTemplateProps {
  user: { name: string; email: string; id: string }
  stats: { total: number; awards: number; papers: number; patents: number }
  achievements: any[]
}

export function ResumeTemplate({ user, stats, achievements }: ResumeTemplateProps) {
  return (
    // 核心：将其隐藏在视口之外，但保持在 DOM 中渲染
    <div className="fixed top-[200vh] left-0">
      <div 
        id="resume-print-template" 
        className="bg-white text-black p-12"
        style={{ width: '794px', minHeight: '1123px' }} // A4 纸标准像素比例
      >
        {/* 头部：个人信息 */}
        <div className="border-b-2 border-gray-800 pb-6 mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-widest mb-2">{user.name}</h1>
          <h2 className="text-xl text-gray-600 tracking-widest mb-4">大学生创新创业履历</h2>
          <div className="text-sm text-gray-500 flex justify-center gap-6">
            <span>联系邮箱: {user.email}</span>
            <span>系统编号: {user.id.slice(0, 12)}...</span>
          </div>
        </div>

        {/* 核心数据概览 */}
        <div className="flex justify-between bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
          <div className="text-center"><div className="text-3xl font-bold text-gray-800">{stats.total}</div><div className="text-sm text-gray-600 mt-1">总成就数</div></div>
          <div className="text-center"><div className="text-3xl font-bold text-gray-800">{stats.awards}</div><div className="text-sm text-gray-600 mt-1">竞赛获奖</div></div>
          <div className="text-center"><div className="text-3xl font-bold text-gray-800">{stats.papers}</div><div className="text-sm text-gray-600 mt-1">学术论文</div></div>
          <div className="text-center"><div className="text-3xl font-bold text-gray-800">{stats.patents}</div><div className="text-sm text-gray-600 mt-1">申请专利</div></div>
        </div>

        {/* 成就列表详细时间线 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">荣誉与成果详情</h3>
          {achievements.length === 0 ? (
            <p className="text-gray-500 text-center py-10">暂无记录</p>
          ) : (
            achievements.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="min-w-[120px] text-sm font-medium text-gray-600 pt-1">
                  {item.date} {/* 确保传入的数据有格式化好的日期 */}
                </div>
                <div className="border-l-2 border-gray-300 pl-4 pb-4">
                  <h4 className="text-lg font-bold text-gray-900">{item.name}</h4>
                  <p className="text-gray-600 mt-1">级别: {item.level} | 类型: {item.type}</p>
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* 底部水印/生成时间 */}
        <div className="mt-16 text-center text-xs text-gray-400">
          本文档由 大学生双创系统 自动生成于 {format(new Date(), 'yyyy-MM-dd HH:mm')}
        </div>
      </div>
    </div>
  )
}
