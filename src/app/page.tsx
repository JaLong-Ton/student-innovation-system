import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Trophy, Rocket, LineChart, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default async function HomePage() {
  // 1. 光速获取本地身份令牌
  const { userId, sessionClaims } = await auth()

  // 2. 智能分流：如果已登录，直接跳过首页
  if (userId) {
    const role = (sessionClaims as any)?.role
    if (role === 'admin') {
      redirect('/admin') // 管理员直达后台仪表盘
    } else {
      redirect('/competitions') // 学生直达竞赛大厅
    }
  }

  // 3. 未登录游客：继续渲染原有的静态展示页 UI
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* 高级背景点缀 */}
      <div className="absolute inset-0 -z-10">
        {/* 微弱网格背景 */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        
        {/* 左上角模糊光晕 */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-transparent blur-3xl opacity-20"></div>
        
        {/* 右下角模糊光晕 */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-violet-400 to-transparent blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* 炫酷的 Hero Section */}
        <div className="text-center mb-20">
          {/* 极其醒目的大标题 - 文本渐变效果 */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              大学生双创助手平台
            </span>
          </h1>
          
          {/* 充满极客感的副标题 */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            记录硬核成就，追踪前沿赛事，一键生成你的专属双创履历。
          </p>
          
          {/* 两个并排的行动按钮 (CTA) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/profile" className="flex items-center gap-2">
                进入个人中心
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg font-medium transition-all duration-300">
              <Link href="/competitions">
                探索竞赛大厅
              </Link>
            </Button>
          </div>
        </div>

        {/* 升级功能卡片区 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* 个人成就管理卡片 */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            {/* 图标带淡色背景圆圈 */}
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Trophy className="h-8 w-8 text-yellow-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              个人成就管理
            </h2>
            <p className="text-gray-600 leading-relaxed">
              记录和管理您的获奖、论文、专利等成就，构建完整的个人双创档案，让每一份努力都有迹可循。
            </p>
          </div>
          
          {/* 竞赛大厅卡片 */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            {/* 图标带淡色背景圆圈 */}
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Rocket className="h-8 w-8 text-blue-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              竞赛大厅
            </h2>
            <p className="text-gray-600 leading-relaxed">
              浏览最新竞赛信息，一键报名参赛，实时追踪赛事进展，不错过任何一个展示才华的机会。
            </p>
          </div>
          
          {/* 数据大屏卡片 */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
            {/* 图标带淡色背景圆圈 */}
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <LineChart className="h-8 w-8 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              数据大屏
            </h2>
            <p className="text-gray-600 leading-relaxed">
              查看个人双创数据统计和趋势分析，智能生成可视化报告，让数据为你的双创之路导航。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
