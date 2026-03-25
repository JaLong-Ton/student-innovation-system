'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Archive, RotateCcw } from 'lucide-react'
import { toggleCompetitionArchive } from '@/app/actions/admin'

interface ArchiveCompetitionButtonProps {
  competitionId: string
  isActive: boolean
}

export function ArchiveCompetitionButton({ competitionId, isActive }: ArchiveCompetitionButtonProps) {
  const [isProcessing, setIsProcessing] = useState(false)

  const handleToggle = async () => {
    if (isProcessing) return

    setIsProcessing(true)
    try {
      const result = await toggleCompetitionArchive(competitionId, isActive)
      
      if (result.success) {
        toast.success(result.message)
        // 刷新页面以显示最新状态
        window.location.reload()
      } else {
        toast.error(result.message || '操作失败')
      }
    } catch (error) {
      console.error('切换竞赛状态失败:', error)
      toast.error('操作失败，请稍后重试')
    } finally {
      setIsProcessing(false)
    }
  }

  if (isActive) {
    // 进行中状态 - 显示归档按钮
    return (
      <Button
        variant="secondary"
        size="sm"
        onClick={handleToggle}
        disabled={isProcessing}
        className="flex items-center gap-2"
      >
        {isProcessing ? (
          <>
            <div className="w-4 h-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
            处理中...
          </>
        ) : (
          <>
            <Archive className="w-4 h-4" />
            归档
          </>
        )}
      </Button>
    )
  } else {
    // 已归档状态 - 显示重新上架按钮
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={handleToggle}
        disabled={isProcessing}
        className="flex items-center gap-2 border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300"
      >
        {isProcessing ? (
          <>
            <div className="w-4 h-4 animate-spin rounded-full border-2 border-green-300 border-t-green-600" />
            处理中...
          </>
        ) : (
          <>
            <RotateCcw className="w-4 h-4" />
            重新上架
          </>
        )}
      </Button>
    )
  }
}
