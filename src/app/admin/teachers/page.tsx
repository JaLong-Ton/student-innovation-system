'use client'

import { useState, useEffect } from 'react'
import { Plus, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getTeachers, createTeacher, deleteTeacher } from '@/app/actions/admin'
import { toast } from 'sonner'
import { TeacherImportButton } from '@/components/admin/teacher-import-button'
import { TeacherDataTable } from '@/components/admin/teacher-data-table'

export default function TeachersManagementPage() {
  const [teachers, setTeachers] = useState<any[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    department: ''
  })

  // 加载老师列表
  useEffect(() => {
    const loadTeachers = async () => {
      try {
        const teachersData = await getTeachers()
        setTeachers(teachersData)
      } catch (error) {
        console.error('加载老师列表失败:', error)
      }
    }
    loadTeachers()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim()) {
      toast.error('教师姓名不能为空')
      return
    }

    setIsSubmitting(true)
    try {
      const result = await createTeacher(formData)
      
      if (result.success) {
        toast.success('🎉 指导老师添加成功！')
        // 重新加载列表
        const updatedTeachers = await getTeachers()
        setTeachers(updatedTeachers)
        // 重置表单并关闭对话框
        setFormData({ name: '', department: '' })
        setIsDialogOpen(false)
      } else {
        toast.error(result.message || '添加失败，请稍后重试')
      }
    } catch (error) {
      toast.error('添加失败，请稍后重试')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`确定要删除指导老师"${name}"吗？此操作不可撤销。`)) {
      return
    }

    try {
      const result = await deleteTeacher(id)
      
      if (result.success) {
        toast.success('🗑️ 指导老师删除成功！')
        // 重新加载列表
        const updatedTeachers = await getTeachers()
        setTeachers(updatedTeachers)
      } else {
        toast.error(result.message || '删除失败，请稍后重试')
      }
    } catch (error) {
      toast.error('删除失败，请稍后重试')
    }
  }

  return (
    <div className="space-y-6">
      {/* 页面标题和操作按钮 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">指导老师库</h1>
          <p className="text-gray-600 mt-1">管理创新创业指导老师信息</p>
        </div>
        
        {/* 操作按钮组 */}
        <div className="flex items-center gap-3">
          {/* 批量导入按钮 */}
          <TeacherImportButton />
          
          {/* 添加老师对话框 */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                添加指导老师
              </Button>
            </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                添加新指导老师
              </DialogTitle>
              <DialogDescription>
                请填写老师的基本信息，系统将自动生成教师编号
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">教师姓名 *</Label>
                <Input
                  id="name"
                  placeholder="请输入教师姓名"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  disabled={isSubmitting}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="department">所属学院</Label>
                <Input
                  id="department"
                  placeholder="请输入所属学院（选填）"
                  value={formData.department}
                  onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="flex justify-end gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                  disabled={isSubmitting}
                >
                  取消
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      添加中...
                    </>
                  ) : (
                    '确认添加'
                  )}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
        </div>
      </div>

      {/* 交互式数据表格 */}
      <TeacherDataTable teachers={teachers} />
    </div>
  )
}
