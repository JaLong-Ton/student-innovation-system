'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { cancelRegistration } from '@/app/actions/competitions'

export function CancelRegistrationButton({ registrationId }: { registrationId: string }) {
  const [isCanceling, setIsCanceling] = useState(false)
  const router = useRouter()

  const handleCancel = async () => {
    if (!window.confirm('确定要取消报名并释放名额吗？此操作不可恢复。')) return

    setIsCanceling(true)
    try {
      // 调用之前写好的后端事务函数
      await cancelRegistration(registrationId)
      toast.success('报名已取消，名额已释放！')
      router.refresh() // 刷新页面数据
    } catch (error: any) {
      toast.error(error.message || '取消报名失败，请重试')
    } finally {
      setIsCanceling(false)
    }
  }

  return (
    <button 
      onClick={handleCancel}
      disabled={isCanceling}
      className="text-sm font-medium text-red-500 hover:text-red-700 hover:underline disabled:opacity-50 transition-all"
    >
      {isCanceling ? '正在取消...' : '取消报名'}
    </button>
  )
}
