import { Users, Trophy, FileText, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Plus, Users as UsersIcon } from 'lucide-react'
import Link from 'next/link'
import { getDashboardStats } from '@/app/actions/admin'
import { DashboardCharts } from '@/components/admin/dashboard-charts'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'

export default async function AdminDashboard() {
  const stats = await getDashboardStats()

  return (
    <div className="space-y-8">
      {/* 醒目的标题 */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          管理员控制台
        </h1>
        <p className="text-gray-600 mt-2">
          系统概览与管理中心
        </p>
      </div>

      {/* 统计卡片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 系统总用户数 */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">系统总用户数</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalUsers}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        {/* 已发布竞赛数 */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">已发布竞赛数</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalCompetitions}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Trophy className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        {/* 报名总数 */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">报名总数</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalRegistrations}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        {/* 待审核数量 */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">待审核数量</p>
              <p className={`text-3xl font-bold mt-2 ${stats.pendingReviews > 0 ? 'text-red-600' : 'text-gray-900'}`}>
                {stats.pendingReviews}
              </p>
            </div>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stats.pendingReviews > 0 ? 'bg-red-100' : 'bg-orange-100'}`}>
              <AlertTriangle className={`h-6 w-6 ${stats.pendingReviews > 0 ? 'text-red-600' : 'text-orange-600'}`} />
            </div>
          </div>
        </div>
      </div>

      {/* 图表区域 */}
      <DashboardCharts 
        categoryStats={stats.categoryStats}
        topCompetitions={stats.topCompetitions}
      />

      {/* 底部区域：快速操作 + 待办事项 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 快速操作区域 */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">快速操作</h2>
          <div className="grid grid-cols-1 gap-4">
            <Link href="/admin/competitions/create">
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-all cursor-pointer group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Plus className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">创建新竞赛</h3>
                </div>
                <p className="text-sm text-gray-600 ml-13">发布新的创新创业竞赛</p>
              </div>
            </Link>
            
            <Link href="/admin/users">
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-green-300 transition-all cursor-pointer group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <UsersIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">用户管理</h3>
                </div>
                <p className="text-sm text-gray-600 ml-13">查看和管理系统用户</p>
              </div>
            </Link>
          </div>
        </div>

        {/* 待办事项区域 */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">待审核报名</h2>
            {stats.recentPending.length > 0 && (
              <Link href="/admin/registrations">
                <Button variant="outline" size="sm">
                  查看全部
                </Button>
              </Link>
            )}
          </div>
          
          {stats.recentPending.length > 0 ? (
            <div className="space-y-3">
              {stats.recentPending.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{item.applicantName}</div>
                    <div className="text-sm text-gray-600">{item.competitionName}</div>
                    <div className="text-xs text-gray-500">
                      {format(item.createdAt, 'yyyy-MM-dd HH:mm', { locale: zhCN })}
                    </div>
                  </div>
                  <Link href="/admin/registrations">
                    <Button variant="outline" size="sm">
                      去处理
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-gray-600">暂无待审核的报名申请</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
