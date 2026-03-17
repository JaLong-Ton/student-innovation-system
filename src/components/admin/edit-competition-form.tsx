'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { updateCompetition } from '@/app/actions/admin'
import { toast } from 'sonner'
import { Calendar, Users } from 'lucide-react'

// 表单验证 schema
const formSchema = z.object({
  name: z.string()
    .min(1, '竞赛名称不能为空')
    .max(100, '竞赛名称不能超过100个字符'),
  category: z.enum(['TECHNICAL', 'PROGRAMMING', 'AI', 'LANGUAGE', 'INNOVATION']).refine((val) => val !== undefined, {
    message: '请选择竞赛分类'
  }),
  description: z.string()
    .max(1000, '赛事介绍不能超过1000个字符')
    .optional(),
  deadline: z.string()
    .min(1, '请选择截止日期')
    .refine((date) => {
      const selectedDate = new Date(date)
      const today = new Date()
      today.setHours(0, 0, 0, 0) // 设置为今天开始
      return selectedDate > today
    }, '截止日期必须是未来时间'),
  maxParticipants: z.string()
    .min(1, '人数上限不能为空')
    .refine((val) => {
      const num = parseInt(val)
      return !isNaN(num) && num > 0 && num <= 10000
    }, '人数上限必须是1-10000之间的数字')
})

type CompetitionFormData = z.infer<typeof formSchema>

interface EditCompetitionFormProps {
  competition: {
    id: string
    name: string
    category: string
    description?: string
    deadline: string
    maxParticipants: number
    currentParticipants: number
  }
}

export function EditCompetitionForm({ competition }: EditCompetitionFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<CompetitionFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: competition.name,
      category: competition.category as any,
      description: competition.description || '',
      deadline: competition.deadline,
      maxParticipants: competition.maxParticipants.toString()
    }
  })

  const onSubmit = async (data: CompetitionFormData) => {
    setIsSubmitting(true)
    try {
      const result = await updateCompetition(competition.id, data)
      
      if (result.success) {
        toast.success('✏️ 竞赛更新成功！')
        router.push('/admin/competitions')
      } else {
        toast.error(result.message || '更新失败，请稍后重试')
      }
    } catch (error) {
      toast.error('更新失败，请稍后重试')
    } finally {
      setIsSubmitting(false)
    }
  }

  const categoryOptions = [
    { value: 'TECHNICAL', label: '技术类' },
    { value: 'PROGRAMMING', label: '编程类' },
    { value: 'AI', label: '人工智能' },
    { value: 'LANGUAGE', label: '语言类' },
    { value: 'INNOVATION', label: '创新类' }
  ]

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* 赛事名称 */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>赛事名称 *</FormLabel>
              <FormControl>
                <Input 
                  placeholder="请输入竞赛名称" 
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormDescription>
                建议使用简洁明了的名称，便于学生识别和记忆
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 赛事分类 */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>赛事分类 *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="请选择竞赛分类" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categoryOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                选择合适的分类有助于学生快速找到感兴趣的竞赛
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 人数上限 */}
        <FormField
          control={form.control}
          name="maxParticipants"
          render={({ field }) => (
            <FormItem>
              <FormLabel>人数上限 *</FormLabel>
              <FormControl>
                <Input 
                  type="number" 
                  placeholder="请输入人数上限" 
                  min="1"
                  max="10000"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormDescription className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                设置参赛人数上限，建议根据实际场地和资源情况设定
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 截止日期 */}
        <FormField
          control={form.control}
          name="deadline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>截止日期 *</FormLabel>
              <FormControl>
                <Input 
                  type="date" 
                  {...field}
                  disabled={isSubmitting}
                  min={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                />
              </FormControl>
              <FormDescription className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                学生报名的截止时间，建议至少预留一周以上的报名时间
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 赛事详情介绍 */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>赛事详情介绍</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="请输入赛事的详细介绍、参赛要求、评选标准等信息..."
                  className="min-h-[120px]"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormDescription>
                详细的介绍有助于学生了解竞赛内容和要求，提高参与度
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 提交按钮 */}
        <div className="flex justify-end gap-4 pt-4">
          <Button 
            type="button" 
            variant="outline"
            onClick={() => router.push('/admin/competitions')}
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
                更新中...
              </>
            ) : (
                '保存修改'
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
