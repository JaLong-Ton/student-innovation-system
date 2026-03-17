'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { formatDistanceToNow } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { toast } from 'sonner'
import { resubmitRegistration } from '@/app/actions/competitions'
import { Edit3 } from 'lucide-react'

interface RegistrationListProps {
  registrations: Array<{
    id: string
    status: string
    applicantName?: string
    projectName?: string
    teamMembers?: string
    notes?: string
    feedback?: string
    createdAt: Date
    competition: {
      id: string
      name: string
      category?: string
    }
    teacher?: {
      id: string
      name: string
      teacherNo: string
      department?: string
    }
  }>
  teachers?: Array<{
    id: string
    name: string
    teacherNo: string
    department?: string
  }>
}

export function RegistrationList({ registrations, teachers = [] }: RegistrationListProps) {
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [editingRegistration, setEditingRegistration] = useState<any>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    applicantName: '',
    projectName: '',
    teamMembers: '',
    teacherId: '',
    notes: ''
  })
  // 健壮的状态映射配置对象（与admin同步）
  const statusMapping = {
    // 处理大小写，兼容历史数据
    PENDING: { label: '审核中', className: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
    pending: { label: '审核中', className: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
    APPROVED: { label: '已通过', className: 'bg-green-100 text-green-800 border-green-200' },
    approved: { label: '已通过', className: 'bg-green-100 text-green-800 border-green-200' },
    REJECTED_RETRY: { label: '需修改', className: 'bg-orange-100 text-orange-800 border-orange-200' },
    rejected_retry: { label: '需修改', className: 'bg-orange-100 text-orange-800 border-orange-200' },
    REJECTED_FINAL: { label: '已驳回(终止)', className: 'bg-red-100 text-red-800 border-red-200' },
    rejected_final: { label: '已驳回(终止)', className: 'bg-red-100 text-red-800 border-red-200' },
    // 历史数据兼容
    REJECTED: { label: '已驳回(终止)', className: 'bg-red-100 text-red-800 border-red-200' },
    rejected: { label: '已驳回(终止)', className: 'bg-red-100 text-red-800 border-red-200' }
  }

  // 获取状态信息（健壮处理）
  const getStatusInfo = (status: string) => {
    const normalizedStatus = status?.toString().toUpperCase() || 'UNKNOWN'
    return (statusMapping as any)[normalizedStatus] || { label: '未知状态', className: 'bg-gray-100 text-gray-800 border-gray-200' }
  }

  // 打开编辑对话框
  const handleEdit = (registration: any) => {
    setEditingRegistration(registration)
    setFormData({
      applicantName: registration.applicantName || '',
      projectName: registration.projectName || '',
      teamMembers: registration.teamMembers || '',
      teacherId: registration.teacher?.id || '',
      notes: registration.notes || ''
    })
    setEditDialogOpen(true)
  }

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingRegistration) return

    setIsSubmitting(true)
    try {
      const result = await resubmitRegistration(editingRegistration.id, formData)
      
      if (result.success) {
        toast.success('✅ 报名申请已重新提交，请等待审核')
        setEditDialogOpen(false)
        setEditingRegistration(null)
        // 刷新页面
        window.location.reload()
      } else {
        toast.error(result.message || '重新提交失败，请稍后重试')
      }
    } catch (error) {
      toast.error('重新提交失败，请稍后重试')
    } finally {
      setIsSubmitting(false)
    }
  }

  // 格式化时间
  const formatTime = (date: Date) => {
    return formatDistanceToNow(date, {
      addSuffix: true,
      locale: zhCN
    })
  }

  if (registrations.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">暂无赛事申请记录</div>
        <div className="text-gray-400 text-sm mt-2">快去竞赛大厅报名参加比赛吧！</div>
      </div>
    )
  }

  return (
    <>
      <div className="space-y-4">
        {registrations.map((registration) => {
          const statusInfo = getStatusInfo(registration.status)
          
          return (
            <div
              key={registration.id}
              className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              {/* 头部：比赛名称和状态 */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 flex-1 mr-3">
                  {registration.competition.name}
                </h3>
                <Badge className={statusInfo.className}>
                  {statusInfo.label}
                </Badge>
              </div>

              {/* 次行细节 */}
              <div className="text-sm text-gray-600 space-y-1 mb-3">
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <span>
                    <span className="font-medium">申请人：</span>
                    {registration.applicantName || '未知'}
                  </span>
                  <span>
                    <span className="font-medium">指导老师：</span>
                    {registration.teacher?.name || '无'}
                  </span>
                  <span>
                    <span className="font-medium">提交时间：</span>
                    {formatTime(registration.createdAt)}
                  </span>
                </div>
                
                {/* 项目名称 */}
                {registration.projectName && (
                  <div>
                    <span className="font-medium">项目名称：</span>
                    {registration.projectName}
                  </div>
                )}
                
                {/* 团队成员 */}
                {registration.teamMembers && (
                  <div>
                    <span className="font-medium">团队成员：</span>
                    {registration.teamMembers}
                  </div>
                )}
                
                {/* 备注 */}
                {registration.notes && (
                  <div>
                    <span className="font-medium">备注：</span>
                    {registration.notes}
                  </div>
                )}
              </div>

              {/* 驳回反馈区和重新编辑按钮 */}
              {((registration.status?.toString().toUpperCase() === 'REJECTED_RETRY' || 
                 registration.status?.toString().toUpperCase() === 'REJECTED_FINAL' ||
                 registration.status?.toString().toUpperCase() === 'REJECTED') ) && registration.feedback && (
                <div className="mt-3 p-3 bg-red-50 text-red-600 rounded-md text-sm border border-red-100">
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">⚠️</span>
                    <div className="flex-1">
                      <span className="font-medium">驳回原因：</span>
                      {registration.feedback}
                    </div>
                  </div>
                  
                  {/* 重新编辑按钮 - 严格仅在 REJECTED_RETRY 状态下显示 */}
                  {registration.status?.toString().toUpperCase() === 'REJECTED_RETRY' && (
                    <div className="mt-3 pt-3 border-t border-red-200">
                      <Button
                        onClick={() => handleEdit(registration)}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        size="sm"
                      >
                        <Edit3 className="h-4 w-4 mr-1" />
                        重新编辑并提交
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
      
      {/* 重新编辑对话框 */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>重新编辑报名申请</DialogTitle>
            <DialogDescription>
              请修改报名信息后重新提交，系统将重新进入审核流程
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 申请人姓名 */}
            <div className="space-y-2">
              <Label htmlFor="applicantName">申请人姓名 *</Label>
              <Input
                id="applicantName"
                value={formData.applicantName}
                onChange={(e) => setFormData(prev => ({ ...prev, applicantName: e.target.value }))}
                placeholder="请输入申请人姓名"
                required
                disabled={isSubmitting}
              />
            </div>
            
            {/* 项目名称 */}
            <div className="space-y-2">
              <Label htmlFor="projectName">项目名称</Label>
              <Input
                id="projectName"
                value={formData.projectName}
                onChange={(e) => setFormData(prev => ({ ...prev, projectName: e.target.value }))}
                placeholder="请输入项目名称"
                disabled={isSubmitting}
              />
            </div>
            
            {/* 团队成员 */}
            <div className="space-y-2">
              <Label htmlFor="teamMembers">团队成员</Label>
              <Textarea
                id="teamMembers"
                value={formData.teamMembers}
                onChange={(e) => setFormData(prev => ({ ...prev, teamMembers: e.target.value }))}
                placeholder="请输入团队成员，多个成员用逗号分隔"
                className="min-h-[80px]"
                disabled={isSubmitting}
              />
            </div>
            
            {/* 指导老师 */}
            <div className="space-y-2">
              <Label>指导老师</Label>
              <Select
                value={formData.teacherId}
                onValueChange={(value) => setFormData(prev => ({ ...prev, teacherId: value }))}
                disabled={isSubmitting}
              >
                <SelectTrigger>
                  <SelectValue placeholder="请选择指导老师（可选）" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">无指导老师</SelectItem>
                  {teachers.map((teacher) => (
                    <SelectItem key={teacher.id} value={teacher.id}>
                      {teacher.name} ({teacher.teacherNo})
                      {teacher.department && ` - ${teacher.department}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* 备注 */}
            <div className="space-y-2">
              <Label htmlFor="notes">备注</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="请输入备注信息（可选）"
                className="min-h-[80px]"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setEditDialogOpen(false)}
                disabled={isSubmitting}
              >
                取消
              </Button>
              <Button 
                type="submit"
                disabled={isSubmitting || !formData.applicantName.trim()}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    提交中...
                  </>
                ) : (
                  '重新提交'
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
