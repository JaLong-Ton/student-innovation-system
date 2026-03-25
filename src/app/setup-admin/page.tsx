'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { setCurrentUserAsAdmin } from '@/app/actions/setup-admin'
import { toast } from 'sonner'

export default function SetupAdminPage() {
  const [isSetting, setIsSetting] = useState(false)

  const handleSetup = async () => {
    if (isSetting) return

    setIsSetting(true)
    try {
      const result = await setCurrentUserAsAdmin()
      
      if (result.success) {
        toast.success(result.message)
        setTimeout(() => {
          window.location.href = '/admin'
        }, 1000)
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      toast.error('设置失败，请稍后重试')
    } finally {
      setIsSetting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>设置管理员权限</CardTitle>
          <CardDescription>
            将当前登录用户设置为管理员，以便访问管理后台
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={handleSetup}
            disabled={isSetting}
            className="w-full"
          >
            {isSetting ? '设置中...' : '设置为管理员'}
          </Button>
          <p className="text-sm text-gray-500 mt-4 text-center">
            ⚠️ 此为临时设置工具，生产环境应移除
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
