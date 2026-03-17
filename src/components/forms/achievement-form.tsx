'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { createAchievement } from '@/app/actions/achievements'
import { ACHIEVEMENT_TYPES, ACHIEVEMENT_LEVELS } from '@/types/achievement'

// 表单验证 schema
const formSchema = z.object({
  title: z.string()
    .min(1, '成就标题不能为空')
    .max(100, '成就标题不能超过100个字符'),
  type: z.enum(['AWARD', 'PAPER', 'PATENT']).refine((val) => val !== undefined, {
    message: '请选择成就类型'
  }),
  level: z.enum(['STATE', 'PROVINCE', 'SCHOOL']).refine((val) => val !== undefined, {
    message: '请选择成就级别'
  }),
  date: z.string()
    .min(1, '请选择获得日期')
    .refine((date) => {
      const selectedDate = new Date(date)
      const today = new Date()
      return selectedDate <= today
    }, '获得日期不能是未来时间')
})

type FormData = z.infer<typeof formSchema>

interface AchievementFormProps {
  onSuccess?: () => void
  onCancel?: () => void
}

export function AchievementForm({ onSuccess, onCancel }: AchievementFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      type: undefined,
      level: undefined,
      date: ''
    }
  })

  async function onSubmit(values: FormData) {
    setIsSubmitting(true)
    
    try {
      const result = await createAchievement(values)
      
      if (result.success) {
        // 重置表单
        form.reset()
        
        // 成功回调
        onSuccess?.()
        
        // 如果没有取消回调，跳转到 dashboard
        if (!onCancel) {
          router.push('/dashboard')
          router.refresh()
        }
      } else {
        // 显示错误信息
        form.setError('root', { message: result.message })
      }
    } catch (error) {
      console.error('提交表单失败:', error)
      form.setError('root', { message: '提交失败，请稍后重试' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>添加新成就</CardTitle>
        <CardDescription>
          记录您的获奖、论文或专利等成就
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* 成就标题 */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>成就标题</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="例如：全国大学生数学建模竞赛一等奖" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    请输入成就的完整名称
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 成就类型和级别 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>成就类型</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="选择类型" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ACHIEVEMENT_TYPES.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>成就级别</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="选择级别" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ACHIEVEMENT_LEVELS.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* 获得日期 */}
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>获得日期</FormLabel>
                  <FormControl>
                    <Input 
                      type="date" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    请选择获得该成就的日期
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 表单错误信息 */}
            {form.formState.errors.root && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-sm text-red-600">
                  {form.formState.errors.root.message}
                </p>
              </div>
            )}

            {/* 提交按钮 */}
            <div className="flex justify-end space-x-4">
              {onCancel && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={onCancel}
                  disabled={isSubmitting}
                >
                  取消
                </Button>
              )}
              <Button 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? '添加中...' : '添加成就'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
