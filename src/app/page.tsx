import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Package, Zap, FileText } from 'lucide-react'

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

  // 3. 未登录游客：继续渲染静态展示页 UI
  return (
    <div className="min-h-screen bg-gray-50/50 font-sans text-gray-900">
      {/* 核心标语区 - 干净无渐变 */}
      <main className="container mx-auto px-6 pt-16 pb-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-600 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
            专注于学生创新创业生态
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
            记录硬核成就，<br />一键生成专属履历。
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            告别繁杂的文档管理。在这里精准追踪前沿赛事，分类沉淀你的获奖、论文与专利，为保研和求职打造最强背书。
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/profile" className="rounded-xl bg-indigo-600 px-8 py-3.5 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors">
              进入个人中心
            </Link>
            <Link href="/competitions" className="rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
              探索竞赛大厅
            </Link>
          </div>
        </div>
      </main>

      {/* 核心功能卡片区 - 完美复刻内部 Dashboard 风格 */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* 卡片 1 */}
          <div className="flex flex-col items-start rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-4 rounded-lg bg-blue-50 p-3 text-blue-600">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">沉淀核心资产</h3>
            <p className="text-gray-500 text-sm leading-relaxed">分类记录你的竞赛获奖、学术论文与发明专利，状态一目了然，打造你的数字成就库。</p>
          </div>
          
          {/* 卡片 2 */}
          <div className="flex flex-col items-start rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-4 rounded-lg bg-green-50 p-3 text-green-600">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">精准赛事追踪</h3>
            <p className="text-gray-500 text-sm leading-relaxed">实时同步全网、全校高含金量双创赛事。一键报名，进度状态全链路追踪。</p>
          </div>

          {/* 卡片 3 */}
          <div className="flex flex-col items-start rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-4 rounded-lg bg-purple-50 p-3 text-purple-600">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">一键生成履历</h3>
            <p className="text-gray-500 text-sm leading-relaxed">基于真实成就数据，自动排版导出专业级 PDF 履历，为评优保研提供强力佐证。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
