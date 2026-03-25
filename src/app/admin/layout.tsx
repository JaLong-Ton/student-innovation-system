import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { LayoutDashboard, Trophy, Users, ClipboardCheck } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

export default async function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  // 获取当前用户和会话声明
  const { userId, sessionClaims } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  // 直接从本地 JWT Token 中读取 role，零网络请求！
  const role = (sessionClaims as any)?.role
  if (role !== 'admin') {
    redirect('/') // 如果不是管理员，踢回首页
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* 左侧边栏 */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">管理后台</h2>
            
            <nav className="space-y-2">
              {/* 仪表盘链接 */}
              <Link 
                href="/admin"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>仪表盘</span>
              </Link>
              
              {/* 竞赛管理链接 */}
              <Link 
                href="/admin/competitions"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                <Trophy className="h-5 w-5" />
                <span>竞赛管理</span>
              </Link>
              
              {/* 指导老师库链接 */}
              <Link 
                href="/admin/teachers"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                <Users className="h-5 w-5" />
                <span>指导老师库</span>
              </Link>
              
              {/* 报名审批链接 */}
              <Link 
                href="/admin/registrations"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                <ClipboardCheck className="h-5 w-5" />
                <span>报名审批</span>
              </Link>

              {/* 用户成就库链接 */}
              <Link 
                href="/admin/achievements"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                <Trophy className="h-5 w-5" />
                <span>用户成就库</span>
              </Link>
            </nav>
          </div>
        </aside>

        {/* 右侧主内容区 */}
        <main className="flex-1">
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
