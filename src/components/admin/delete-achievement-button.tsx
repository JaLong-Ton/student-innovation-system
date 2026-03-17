'use client'

import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { adminDeleteAchievement } from '@/app/actions/admin'
import { toast } from 'sonner'

interface DeleteAchievementButtonProps {
  achievementId: string
  achievementTitle: string
}

export function DeleteAchievementButton({ achievementId, achievementTitle }: DeleteAchievementButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm(`确定要删除成就"${achievementTitle}"吗？此操作不可撤销。`)) {
      return
    }

    setIsDeleting(true)
    try {
      const result = await adminDeleteAchievement(achievementId)
      
      if (result.success) {
        toast.success('🗑️ 成就已成功删除')
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
      {isDeleting ? '删除中...' : '强制删除'}
    </Button>
  )
}
