'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { toast } from 'sonner'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { createAchievementFromForm } from '@/app/actions/achievements'

interface AchievementFormState {
  success?: boolean
  message?: string
  errors?: Record<string, string[]>
}

export function AchievementFormClient() {
  const [state, formAction] = useActionState<AchievementFormState, FormData>(
    async (prevState, formData) => {
      const result = await createAchievementFromForm(formData)
      
      if (result.success) {
        toast.success('🎉 记录添加成功')
      } else {
        // 如果有字段级错误，遍历显示具体错误
        if (result.errors) {
          const errorMessages = Object.entries(result.errors)
            .filter(([_, errors]) => errors.length > 0)
            .map(([field, errors]) => {
              const fieldName = {
                title: '标题',
                type: '类型',
                level: '级别',
                date: '日期'
              }[field] || field
              return `${fieldName}: ${errors.join(', ')}`
            })
          
          if (errorMessages.length > 0) {
            toast.error(errorMessages.join('; '))
          } else {
            toast.error(result.message || '添加失败，请稍后重试')
          }
        } else {
          toast.error(result.message || '添加失败，请稍后重试')
        }
      }
      
      return result
    },
    {}
  )

  const { pending } = useFormStatus()

  return (
    <Card>
      <CardHeader>
        <CardTitle>新增成就</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          {/* 成就名称 */}
          <div className="space-y-2">
            <Label htmlFor="title">成就名称</Label>
            <Input
              id="title"
              name="title"
              placeholder="例如：无人机灾害监测论文"
              required
            />
            {state.errors?.title && (
              <p className="text-sm text-red-500">{state.errors.title[0]}</p>
            )}
          </div>

          {/* 类型 */}
          <div className="space-y-2">
            <Label htmlFor="type">类型</Label>
            <Select name="type" required>
              <SelectTrigger>
                <SelectValue placeholder="选择类型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AWARD">获奖</SelectItem>
                <SelectItem value="PAPER">论文</SelectItem>
                <SelectItem value="PATENT">专利</SelectItem>
              </SelectContent>
            </Select>
            {state.errors?.type && (
              <p className="text-sm text-red-500">{state.errors.type[0]}</p>
            )}
          </div>

          {/* 级别 */}
          <div className="space-y-2">
            <Label htmlFor="level">级别</Label>
            <Select name="level" required>
              <SelectTrigger>
                <SelectValue placeholder="选择级别" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="STATE">国家级</SelectItem>
                <SelectItem value="PROVINCE">省级</SelectItem>
                <SelectItem value="SCHOOL">校级</SelectItem>
              </SelectContent>
            </Select>
            {state.errors?.level && (
              <p className="text-sm text-red-500">{state.errors.level[0]}</p>
            )}
          </div>

          {/* 获得时间 */}
          <div className="space-y-2">
            <Label htmlFor="date">获得时间</Label>
            <Input
              id="date"
              name="date"
              type="date"
              required
            />
            {state.errors?.date && (
              <p className="text-sm text-red-500">{state.errors.date[0]}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={pending}
          >
            {pending ? '提交中...' : '添加成就'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
