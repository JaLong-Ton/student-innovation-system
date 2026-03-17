'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Check, ChevronsUpDown } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command'
import { registerCompetition } from '@/app/actions/competitions'

// 表单验证 schema
const formSchema = z.object({
  applicantName: z.string()
    .min(1, '申请人姓名不能为空')
    .max(50, '申请人姓名不能超过50个字符'),
  projectName: z.string()
    .max(100, '作品名称不能超过100个字符')
    .optional(),
  teamMembers: z.string()
    .max(200, '团队成员信息不能超过200个字符')
    .optional(),
  teacherId: z.string()
    .optional(),
  notes: z.string()
    .max(500, '报名说明不能超过500个字符')
    .optional()
})

type RegistrationFormData = z.infer<typeof formSchema>

interface RegisterButtonProps {
  competitionId: string
  isRegistered: boolean
  isExpired: boolean
  teachers: Array<{
    id: string
    name: string
    teacherNo: string
    department?: string | null
  }>
}

export function RegisterButton({ competitionId, isRegistered, isExpired, teachers }: RegisterButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [teacherOpen, setTeacherOpen] = useState(false)
  const [selectedTeacherId, setSelectedTeacherId] = useState<string>('')

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      applicantName: '',
      projectName: '',
      teamMembers: '',
      teacherId: '',
      notes: ''
    }
  })

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true)
    try {
      const result = await registerCompetition({
        competitionId,
        ...data,
        teacherId: selectedTeacherId // 使用 Combobox 选择的老师ID
      })
      
      if (result.success) {
        toast.success('🎉 报名成功！')
        setIsDialogOpen(false)
        form.reset()
        setSelectedTeacherId('') // 重置选择的老师
        // 刷新页面以更新状态
        window.location.reload()
      } else {
        toast.error(result.message || '报名失败，请稍后重试')
      }
    } catch (error) {
      toast.error('报名失败，请稍后重试')
    } finally {
      setIsSubmitting(false)
    }
  }

  // 如果已报名，显示灰色禁用按钮
  if (isRegistered) {
    return (
      <Button 
        disabled 
        className="w-full bg-gray-100 text-gray-500 cursor-not-allowed hover:bg-gray-100"
      >
        已报名
      </Button>
    )
  }

  // 如果已过期，显示轮廓禁用按钮
  if (isExpired) {
    return (
      <Button 
        disabled 
        className="w-full"
        variant="outline"
      >
        已截止
      </Button>
    )
  }

  // 未报名状态，显示带弹窗的按钮
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button 
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
        >
          立即报名
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>填写竞赛报名表</DialogTitle>
          <DialogDescription>
            请认真填写以下信息，带 * 的为必填项
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* 申请人姓名/队长 */}
            <FormField
              control={form.control}
              name="applicantName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>申请人姓名/队长 *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="请输入申请人姓名或队长姓名"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 参赛作品名称 */}
            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>参赛作品名称</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="请输入参赛作品名称（选填）"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 团队其他成员 */}
            <FormField
              control={form.control}
              name="teamMembers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>团队其他成员</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="多人请用逗号分隔"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormDescription>
                    如果是团队参赛，请在此填写其他成员姓名，多人用逗号分隔
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 选择指导老师 */}
            <div className="space-y-2">
              <Label>选择指导老师 (可选)</Label>
              <Popover open={teacherOpen} onOpenChange={setTeacherOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={teacherOpen}
                    className="w-full justify-between font-normal"
                    disabled={isSubmitting}
                  >
                    {selectedTeacherId
                      ? teachers.find((t) => t.id === selectedTeacherId)?.name + 
                        ' (' + teachers.find((t) => t.id === selectedTeacherId)?.department + ')'
                      : "搜索并选择指导老师..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="输入姓名或学院搜索..." />
                    <CommandList>
                      <CommandEmpty>未找到该老师，请检查拼写</CommandEmpty>
                      <CommandGroup>
                        {teachers.map((teacher) => (
                          <CommandItem
                            key={teacher.id}
                            value={`${teacher.name} ${teacher.department}`} // 同时支持姓名和学院搜索
                            onSelect={() => {
                              setSelectedTeacherId(teacher.id === selectedTeacherId ? "" : teacher.id)
                              setTeacherOpen(false)
                            }}
                          >
                            <Check
                              className={`mr-2 h-4 w-4 ${
                                selectedTeacherId === teacher.id ? "opacity-100" : "opacity-0"
                              }`}
                            />
                            {teacher.name}
                            <span className="ml-2 text-xs text-gray-500">
                              [{teacher.department}]
                            </span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <p className="text-sm text-gray-600">
                选择指导老师有助于提升项目质量和竞争力
              </p>
            </div>

            {/* 报名说明/备注 */}
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>报名说明/备注</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="请输入其他需要说明的信息（选填）"
                      className="min-h-[80px]"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormDescription>
                    如有特殊要求或需要补充说明，请在此填写
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 提交按钮 */}
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
                    提交中...
                  </>
                ) : (
                  '确认提交'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
