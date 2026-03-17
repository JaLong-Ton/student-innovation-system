'use client'

import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { deleteCompetition } from '@/app/actions/admin'
import { toast } from 'sonner'

interface DeleteCompetitionButtonProps {
  competitionId: string
  competitionName: string
}

export function DeleteCompetitionButton({ competitionId, competitionName }: DeleteCompetitionButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm('警告：确定要删除该赛事吗？这将会同时永久删除该赛事下的所有学生报名记录！')) {
      return
    }

    setIsDeleting(true)
    try {
      const result = await deleteCompetition(competitionId)
      
      if (result.success) {
        toast.success('🗑️ 竞赛删除成功')
        // 触发页面刷新
        window.location.reload()
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      toast.error('删除失败，请稍后重试')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Button
      variant="destructive"
      size="sm"
      onClick={handleDelete}
      disabled={isDeleting}
      className="flex items-center gap-2"
    >
      <Trash2 className="h-4 w-4" />
      {isDeleting ? '删除中...' : '删除'}
    </Button>
  )
}
