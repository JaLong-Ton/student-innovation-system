import { getAllRegistrations } from '@/app/actions/admin'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { RegistrationDataTable } from '@/components/admin/registration-data-table'

export const dynamic = 'force-dynamic';

export default async function RegistrationsPage() {
  const registrations = await getAllRegistrations()

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">报名审批</h1>
          <p className="text-gray-600 mt-2">管理学生的竞赛报名申请</p>
        </div>
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{registrations.length}</div>
              <div className="text-sm text-blue-600">总报名数</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 使用新的交互式数据表格 */}
      <RegistrationDataTable registrations={registrations} />
    </div>
  )
}
