'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { reviewRegistration } from '@/app/actions/admin'
import { Check, X } from 'lucide-react'

interface ApprovalButtonsProps {
  registrationId: string
  currentStatus: string
}

export function ApprovalButtons({ registrationId, currentStatus }: ApprovalButtonsProps) {
  const [isApproving, setIsApproving] = useState(false)
  const [isRejecting, setIsRejecting] = useState(false)
  const [rejectionReason, setRejectionReason] = useState('')
  const [rejectionType, setRejectionType] = useState('REJECTED_RETRY')
  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false)

  // 处理通过操作
  const handleApprove = async () => {
    setIsApproving(true)
    try {
      const result = await reviewRegistration(registrationId, 'APPROVED')
      
      if (result.success) {
        toast.success('✅ 报名已通过审批')
      } else {
        toast.error(result.message || '审批失败，请稍后重试')
      }
    } catch (error) {
      toast.error('审批失败，请稍后重试')
    } finally {
      setIsApproving(false)
    }
  }

  // 处理驳回操作
  const handleReject = async () => {
    if (!rejectionReason.trim()) {
      toast.error('请输入驳回原因')
      return
    }

    setIsRejecting(true)
    try {
      const result = await reviewRegistration(registrationId, rejectionType, rejectionReason.trim())
      
      if (result.success) {
        const message = rejectionType === 'REJECTED_RETRY' ? '❌ 报名已打回修改' : '❌ 报名已彻底驳回'
        toast.success(message)
        setIsRejectDialogOpen(false)
        setRejectionReason('')
        setRejectionType('REJECTED_RETRY')
      } else {
        toast.error(result.message || '驳回失败，请稍后重试')
      }
    } catch (error) {
      toast.error('驳回失败，请稍后重试')
    } finally {
      setIsRejecting(false)
    }
  }

  // 如果状态不是待审批，不显示操作按钮
  if (currentStatus !== 'PENDING') {
    return null
  }

  return (
    <div className="flex gap-2">
      {/* 通过按钮 */}
      <Button
        onClick={handleApprove}
        disabled={isApproving || isRejecting}
        className="bg-green-600 hover:bg-green-700 text-white"
        size="sm"
      >
        {isApproving ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            处理中...
          </>
        ) : (
          <>
            <Check className="h-4 w-4 mr-1" />
            通过
          </>
        )}
      </Button>

      {/* 驳回按钮和对话框 */}
      <Dialog open={isRejectDialogOpen} onOpenChange={setIsRejectDialogOpen}>
        <DialogTrigger asChild>
          <Button
            disabled={isApproving || isRejecting}
            variant="destructive"
            size="sm"
          >
            <X className="h-4 w-4 mr-1" />
            驳回
          </Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>驳回报名申请</DialogTitle>
            <DialogDescription>
              请选择驳回类型并输入驳回原因，这将帮助学生了解需要改进的地方
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* 驳回类型选择 */}
            <div className="space-y-3">
              <Label>驳回类型 *</Label>
              <RadioGroup value={rejectionType} onValueChange={setRejectionType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="REJECTED_RETRY" id="retry" />
                  <Label htmlFor="retry" className="text-sm">
                    <span className="font-medium">打回修改</span>
                    <span className="text-gray-500 block">允许学生修改后重新提交</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="REJECTED_FINAL" id="final" />
                  <Label htmlFor="final" className="text-sm">
                    <span className="font-medium">彻底驳回</span>
                    <span className="text-gray-500 block">终止该申请，不可再改</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
            
            {/* 驳回原因 */}
            <div className="space-y-2">
              <Label htmlFor="rejection-reason">驳回原因 *</Label>
              <Textarea
                id="rejection-reason"
                placeholder="请输入驳回原因（如：指导老师未确认、作品名称不规范等）"
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                className="min-h-[100px]"
                disabled={isRejecting}
              />
            </div>
            
            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsRejectDialogOpen(false)
                  setRejectionReason('')
                  setRejectionType('REJECTED_RETRY')
                }}
                disabled={isRejecting}
              >
                取消
              </Button>
              <Button 
                onClick={handleReject}
                disabled={isRejecting || !rejectionReason.trim()}
                variant="destructive"
              >
                {isRejecting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    处理中...
                  </>
                ) : (
                  '确认驳回'
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
