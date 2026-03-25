'use client'

import { useState, useOptimistic, useTransition } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ReviewRegistrationDialog } from '@/components/admin/review-registration-dialog'
import { batchReviewRegistrations } from '@/app/actions/admin'
import { reviewRegistration } from '@/app/actions/admin'

interface Registration {
  id: string
  status: string
  applicantName?: any
  projectName?: any
  teamMembers?: any
  notes?: any
  feedback?: any
  createdAt: Date
  competition: any
  teacher?: any
  user: any
}

interface RegistrationDataTableProps {
  registrations: Registration[]
}

export function RegistrationDataTable({ registrations }: RegistrationDataTableProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  // 乐观更新：接管本地状态
  const [optimisticRegistrations, addOptimisticUpdate] = useOptimistic(
    registrations,
    (currentState, update: { ids: string[], status: string }) => {
      return currentState.map(reg => 
        update.ids.includes(reg.id) 
          ? { ...reg, status: update.status } 
          : reg
      )
    }
  )
  const [isPending, startTransition] = useTransition()

  // 获取所有待审批的记录ID（基于乐观状态）
  const pendingIds = optimisticRegistrations
    .filter(reg => reg.status === 'PENDING')
    .map(reg => reg.id)

  // 全选/取消全选
  const toggleAll = () => {
    if (selectedIds.length === pendingIds.length) {
      setSelectedIds([])
    } else {
      setSelectedIds(pendingIds)
    }
  }

  // 切换单个选中状态
  const toggleOne = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) 
        ? prev.filter(selectedId => selectedId !== id)
        : [...prev, id]
    )
  }

  // 批量通过
  const handleBatchApprove = () => {
    if (selectedIds.length === 0) {
      toast.error('请选择要审批的记录')
      return
    }

    startTransition(async () => {
      // 1. 瞬间欺骗视觉：本地直接将状态改为 APPROVED
      addOptimisticUpdate({ ids: selectedIds, status: 'APPROVED' })
      
      // 2. 后台静默发送真实请求
      try {
        const result = await batchReviewRegistrations(selectedIds, 'APPROVED')
        
        if (result.success) {
          toast.success(`成功通过 ${result.count} 条报名申请`)
          setSelectedIds([])
          // 注意：成功后不要手动重置状态，Next.js 收到最新 Server 数据后会自动替换
        } else {
          toast.error(result.message || '批量审批失败')
        }
      } catch (error) {
        console.error('批量审批失败:', error)
        toast.error('网络异常，审批状态已回滚')
        // 失败时，React 会自动用服务器的旧数据覆盖掉乐观状态，实现无缝回滚
      }
    })
  }

  // 获取状态徽章样式
  const getStatusBadge = (status: string) => {
    const statusConfig = {
      PENDING: { label: '待审批', variant: 'secondary' as const },
      APPROVED: { label: '已通过', variant: 'default' as const },
      REJECTED_RETRY: { label: '驳回重试', variant: 'destructive' as const },
      REJECTED_FINAL: { label: '最终驳回', variant: 'destructive' as const }
    }
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.PENDING
    return <Badge variant={config.variant}>{config.label}</Badge>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>报名审批管理</CardTitle>
      </CardHeader>
      <CardContent>
        {/* 批量操作栏 */}
        {selectedIds.length > 0 && (
          <div className="flex items-center justify-between p-4 mb-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-sm text-blue-800">
              已选择 <span className="font-semibold">{selectedIds.length}</span> 项待审批记录
            </div>
            <Button 
              onClick={handleBatchApprove}
              disabled={isPending}
              className="bg-green-600 hover:bg-green-700"
            >
              {isPending ? '处理中...' : '批量通过'}
            </Button>
          </div>
        )}

        {/* 报名记录表格 */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left p-3 font-medium">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === pendingIds.length && pendingIds.length > 0}
                    onChange={toggleAll}
                    className="rounded border-gray-300"
                    disabled={pendingIds.length === 0}
                  />
                </th>
                <th className="text-left p-3 font-medium">申请人</th>
                <th className="text-left p-3 font-medium">比赛名称</th>
                <th className="text-left p-3 font-medium">项目名称</th>
                <th className="text-left p-3 font-medium">指导老师</th>
                <th className="text-left p-3 font-medium">申请时间</th>
                <th className="text-left p-3 font-medium">状态</th>
                <th className="text-left p-3 font-medium">操作</th>
              </tr>
            </thead>
            <tbody>
              {optimisticRegistrations.map((registration) => (
                <tr key={registration.id} className="border-b hover:bg-gray-50">
                  {/* 选择列 */}
                  <td className="p-3">
                    {registration.status === 'PENDING' ? (
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(registration.id)}
                        onChange={() => toggleOne(registration.id)}
                        className="rounded border-gray-300"
                      />
                    ) : (
                      <div className="w-4 h-4" />
                    )}
                  </td>

                  {/* 申请人 */}
                  <td className="p-3">
                    <div>
                      <div className="font-medium truncate max-w-[150px]">
                        {registration.applicantName || registration.user.name || '未知'}
                      </div>
                      <div className="text-sm text-gray-500 truncate max-w-[150px]">
                        {registration.user.email}
                      </div>
                    </div>
                  </td>

                  {/* 比赛名称 */}
                  <td className="p-3">
                    <div>
                      <div className="font-medium truncate max-w-[150px]">{registration.competition.name}</div>
                      <div className="text-sm text-gray-500 truncate max-w-[150px]">
                        {registration.competition.category}
                      </div>
                    </div>
                  </td>

                  {/* 项目名称 */}
                  <td className="p-3">
                    <div className="truncate max-w-[150px] break-all">
                      {registration.projectName || (
                        <span className="text-gray-400">未填写</span>
                      )}
                    </div>
                  </td>

                  {/* 指导老师 */}
                  <td className="p-3">
                    {registration.teacher ? (
                      <div>
                        <div className="font-medium">{registration.teacher.name}</div>
                        <div className="text-sm text-gray-500">
                          {registration.teacher.department}
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-400">未选择</span>
                    )}
                  </td>

                  {/* 申请时间 */}
                  <td className="p-3">
                    {registration.createdAt.toLocaleString('zh-CN', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </td>

                  {/* 状态 */}
                  <td className="p-3">
                    {getStatusBadge(registration.status)}
                  </td>

                  {/* 操作 */}
                  <td className="p-3">
                    <ReviewRegistrationDialog
                      registration={registration}
                      onReview={async (id, status, feedback) => {
                        return new Promise((resolve) => {
                          startTransition(async () => {
                            // 1. 瞬间欺骗视觉：本地直接将状态改为新状态
                            addOptimisticUpdate({ ids: [id], status })
                            
                            // 2. 后台静默发送真实请求
                            try {
                              const result = await reviewRegistration(id, status, feedback)
                              if (result.success) {
                                toast.success(result.message)
                              } else {
                                toast.error(result.message)
                              }
                              resolve(result)
                              // 注意：成功后不要手动重置状态，Next.js 收到最新 Server 数据后会自动替换
                            } catch (error) {
                              console.error('审批失败:', error)
                              toast.error('网络异常，审批状态已回滚')
                              // 失败时，React 会自动用服务器的旧数据覆盖掉乐观状态，实现无缝回滚
                              resolve({ success: false, message: '网络异常' })
                            }
                          })
                        })
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {optimisticRegistrations.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              暂无报名记录
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
