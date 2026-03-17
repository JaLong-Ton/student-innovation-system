'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Eye, Check, X, AlertCircle } from 'lucide-react'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { toast } from 'sonner'

interface ReviewRegistrationDialogProps {
  registration: {
    id: string
    status: string
    applicantName?: string | null
    projectName?: string | null
    teamMembers?: string | null
    notes?: string | null
    feedback?: string | null
    createdAt: Date
    competition: {
      id: string
      name: string
      category?: string | null
      deadline: Date
    }
    teacher?: {
      id: string
      name: string
      teacherNo: string
      department?: string | null
    } | null
    user: {
      id: string
      name: string | null
      email: string
    }
  }
  onReview: (id: string, status: string, feedback?: string) => Promise<{ success: boolean; message: string }>
}

export function ReviewRegistrationDialog({ registration, onReview }: ReviewRegistrationDialogProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [rejectionMode, setRejectionMode] = useState<'REJECTED_RETRY' | 'REJECTED_FINAL' | null>(null)
  const [feedback, setFeedback] = useState('')

  // 获取状态信息
  const getStatusInfo = (status: string) => {
    const statusMapping = {
      PENDING: { label: '待审批', className: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
      pending: { label: '待审批', className: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
      APPROVED: { label: '已通过', className: 'bg-green-100 text-green-800 border-green-200' },
      approved: { label: '已通过', className: 'bg-green-100 text-green-800 border-green-200' },
      REJECTED_RETRY: { label: '退回修改', className: 'bg-orange-100 text-orange-800 border-orange-200' },
      rejected_retry: { label: '退回修改', className: 'bg-orange-100 text-orange-800 border-orange-200' },
      REJECTED_FINAL: { label: '彻底驳回', className: 'bg-red-100 text-red-800 border-red-200' },
      rejected_final: { label: '彻底驳回', className: 'bg-red-100 text-red-800 border-red-200' },
      REJECTED: { label: '彻底驳回', className: 'bg-red-100 text-red-800 border-red-200' },
      rejected: { label: '彻底驳回', className: 'bg-red-100 text-red-800 border-red-200' }
    }
    const normalizedStatus = status?.toString().toUpperCase() || 'UNKNOWN'
    return (statusMapping as any)[normalizedStatus] || { label: '未知状态', className: 'bg-gray-100 text-gray-800 border-gray-200' }
  }

  const handleApprove = async () => {
    setIsSubmitting(true)
    try {
      const result = await onReview(registration.id, 'APPROVED')
      if (result.success) {
        toast.success('✅ 报名审批通过')
        setOpen(false)
        window.location.reload()
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      toast.error('审批失败，请稍后重试')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReject = async (status: 'REJECTED_RETRY' | 'REJECTED_FINAL') => {
    if (!feedback.trim()) {
      toast.error('请填写驳回原因')
      return
    }

    setIsSubmitting(true)
    try {
      const result = await onReview(registration.id, status, feedback.trim())
      if (result.success) {
        toast.success(`✅ 报名已${status === 'REJECTED_RETRY' ? '退回修改' : '彻底驳回'}`)
        setOpen(false)
        window.location.reload()
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      toast.error('审批失败，请稍后重试')
    } finally {
      setIsSubmitting(false)
      setRejectionMode(null)
      setFeedback('')
    }
  }

  const statusInfo = getStatusInfo(registration.status)
  const isPending = registration.status?.toString().toUpperCase() === 'PENDING'

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={isPending ? "default" : "outline"} 
          size="sm"
          className={isPending ? "bg-blue-600 hover:bg-blue-700 text-white" : ""}
        >
          <Eye className="h-4 w-4 mr-1" />
          {isPending ? '审查' : '查看详情'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>报名审查详情</DialogTitle>
          <DialogDescription>
            {isPending ? '请仔细审查以下报名信息并做出审批决定' : '查看该报名的详细信息'}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* 基础信息区 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-700">申请人姓名</Label>
              <div className="mt-1 text-sm text-gray-900">
                {registration.applicantName || registration.user.name || '未知'}
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700">联系邮箱</Label>
              <div className="mt-1 text-sm text-gray-900">{registration.user.email}</div>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700">赛事名称</Label>
              <div className="mt-1 text-sm text-gray-900">{registration.competition.name}</div>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700">指导老师</Label>
              <div className="mt-1 text-sm text-gray-900">
                {registration.teacher ? (
                  <div>
                    <div>{registration.teacher.name}</div>
                    <div className="text-xs text-gray-500">
                      {registration.teacher.department && `[${registration.teacher.department}] `}
                      {registration.teacher.teacherNo}
                    </div>
                  </div>
                ) : (
                  <span className="text-gray-500">未选择</span>
                )}
              </div>
            </div>
            <div className="col-span-2">
              <Label className="text-sm font-medium text-gray-700">提交时间</Label>
              <div className="mt-1 text-sm text-gray-900">
                {format(registration.createdAt, 'yyyy年MM月dd日 HH:mm', { locale: zhCN })}
              </div>
            </div>
          </div>

          {/* 详细资料区 */}
          <div className="bg-gray-50 p-4 rounded-md space-y-3">
            <h4 className="font-medium text-gray-900 mb-3">详细资料</h4>
            
            <div>
              <Label className="text-sm font-medium text-gray-700">作品名称</Label>
              <div className="mt-1 text-sm text-gray-900">
                {registration.projectName || '未填写'}
              </div>
            </div>
            
            <div>
              <Label className="text-sm font-medium text-gray-700">团队成员</Label>
              <div className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">
                {registration.teamMembers || '无'}
              </div>
            </div>
            
            <div>
              <Label className="text-sm font-medium text-gray-700">报名说明/备注</Label>
              <div className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">
                {registration.notes || '无'}
              </div>
            </div>

            {/* 当前状态和反馈 */}
            <div className="border-t pt-3">
              <Label className="text-sm font-medium text-gray-700">当前状态</Label>
              <div className="mt-2 flex items-center gap-2">
                <Badge className={statusInfo.className}>
                  {statusInfo.label}
                </Badge>
                <span className="text-sm text-gray-600">
                  {format(registration.createdAt, 'yyyy年MM月dd日', { locale: zhCN })}
                </span>
              </div>
              
              {registration.feedback && (
                <div className="mt-2 p-2 bg-red-50 text-red-700 rounded text-sm">
                  <span className="font-medium">驳回原因：</span>
                  {registration.feedback}
                </div>
              )}
            </div>
          </div>

          {/* 审批操作区 */}
          {isPending && (
            <div className="space-y-3">
              {/* 驳回原因输入区 */}
              {rejectionMode && (
                <div className="space-y-2">
                  <Label htmlFor="feedback" className="text-sm font-medium text-gray-700">
                    驳回原因 <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="请详细说明驳回原因，帮助学生改进..."
                    className="min-h-[80px]"
                    disabled={isSubmitting}
                  />
                </div>
              )}

              {/* 审批按钮组 */}
              <div className="flex gap-2">
                {rejectionMode ? (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setRejectionMode(null)
                        setFeedback('')
                      }}
                      disabled={isSubmitting}
                    >
                      取消驳回
                    </Button>
                    <Button
                      variant={rejectionMode === 'REJECTED_RETRY' ? 'default' : 'outline'}
                      className={rejectionMode === 'REJECTED_RETRY' ? 'bg-orange-600 hover:bg-orange-700 text-white' : ''}
                      onClick={() => handleReject('REJECTED_RETRY')}
                      disabled={isSubmitting || !feedback.trim()}
                    >
                      <AlertCircle className="h-4 w-4 mr-1" />
                      确认退回修改
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => handleReject('REJECTED_FINAL')}
                      disabled={isSubmitting || !feedback.trim()}
                    >
                      <X className="h-4 w-4 mr-1" />
                      确认彻底驳回
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={handleApprove}
                      disabled={isSubmitting}
                    >
                      <Check className="h-4 w-4 mr-1" />
                      通过
                    </Button>
                    <Button
                      variant="outline"
                      className="text-orange-600 border-orange-200 hover:bg-orange-50"
                      onClick={() => setRejectionMode('REJECTED_RETRY')}
                      disabled={isSubmitting}
                    >
                      <AlertCircle className="h-4 w-4 mr-1" />
                      驳回修改
                    </Button>
                    <Button
                      variant="outline"
                      className="text-red-600 border-red-200 hover:bg-red-50"
                      onClick={() => setRejectionMode('REJECTED_FINAL')}
                      disabled={isSubmitting}
                    >
                      <X className="h-4 w-4 mr-1" />
                      彻底驳回
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          {!isPending && (
            <Button variant="outline" onClick={() => setOpen(false)}>
              关闭
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
