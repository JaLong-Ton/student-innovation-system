import { getAllRegistrations, reviewRegistration } from '@/app/actions/admin'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ReviewRegistrationDialog } from '@/components/admin/review-registration-dialog'
import { formatDistanceToNow } from 'date-fns'
import { zhCN } from 'date-fns/locale'

export default async function RegistrationsPage() {
  const registrations = await getAllRegistrations()

  // 健壮的状态映射配置对象
  const statusMapping = {
    // 处理大小写，兼容历史数据
    PENDING: { label: '待审批', className: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
    pending: { label: '待审批', className: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
    APPROVED: { label: '已通过', className: 'bg-green-100 text-green-800 border-green-200' },
    approved: { label: '已通过', className: 'bg-green-100 text-green-800 border-green-200' },
    REJECTED_RETRY: { label: '退回修改', className: 'bg-orange-100 text-orange-800 border-orange-200' },
    rejected_retry: { label: '退回修改', className: 'bg-orange-100 text-orange-800 border-orange-200' },
    REJECTED_FINAL: { label: '彻底驳回', className: 'bg-red-100 text-red-800 border-red-200' },
    rejected_final: { label: '彻底驳回', className: 'bg-red-100 text-red-800 border-red-200' },
    // 历史数据兼容
    REJECTED: { label: '彻底驳回', className: 'bg-red-100 text-red-800 border-red-200' },
    rejected: { label: '彻底驳回', className: 'bg-red-100 text-red-800 border-red-200' }
  }

  // 获取状态信息（健壮处理）
  const getStatusInfo = (status: string) => {
    const normalizedStatus = status?.toString().toUpperCase() || 'UNKNOWN'
    return (statusMapping as any)[normalizedStatus] || { label: '未知状态', className: 'bg-gray-100 text-gray-800 border-gray-200' }
  }

  // 格式化时间
  const formatTime = (date: Date) => {
    return formatDistanceToNow(date, {
      addSuffix: true,
      locale: zhCN
    })
  }

  // 截断文本
  const truncateText = (text: string, maxLength: number = 20) => {
    if (!text) return ''
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
  }

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

      <Card>
        <CardHeader>
          <CardTitle>报名申请列表</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>申请人</TableHead>
                <TableHead>比赛名称</TableHead>
                <TableHead>指导老师</TableHead>
                <TableHead>报名时间</TableHead>
                <TableHead>状态</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {registrations.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                    暂无报名申请
                  </TableCell>
                </TableRow>
              ) : (
                registrations.map((registration) => (
                  <TableRow key={registration.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{registration.applicantName || registration.user.name || '未知'}</div>
                        <div className="text-sm text-gray-500">{registration.user.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{registration.competition.name}</div>
                        <div className="text-sm text-gray-500">{registration.projectName || '无项目名称'}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {registration.teacher ? (
                        <div>
                          <div className="font-medium">{registration.teacher.name}</div>
                          <div className="text-sm text-gray-500">
                            {registration.teacher.department ? `[${registration.teacher.department}]` : ''}
                            {registration.teacher.teacherNo}
                          </div>
                        </div>
                      ) : (
                        <span className="text-gray-500">未选择</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-gray-600">
                        {formatTime(registration.createdAt)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <Badge className={getStatusInfo(registration.status).className}>
                          {getStatusInfo(registration.status).label}
                        </Badge>
                        {registration.feedback && (
                          <div className="text-xs text-gray-500 mt-1">
                            原因: {truncateText(registration.feedback, 15)}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <ReviewRegistrationDialog 
                        registration={registration}
                        onReview={reviewRegistration}
                      />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
