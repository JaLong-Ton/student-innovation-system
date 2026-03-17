import { prisma } from '@/lib/prisma'
import { ArrowLeft, Calendar, Users, Trophy } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { EditCompetitionForm } from '@/components/admin/edit-competition-form'

interface EditCompetitionPageProps {
  params: Promise<{ id: string }>
}

export default async function EditCompetitionPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // 1. 必须先 await 解析动态路由参数
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 查询竞赛数据
  const competition = await prisma.competition.findUnique({
    where: { id }
  })

  if (!competition) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">赛事不存在</h1>
          <p className="text-gray-600 mb-6">您要编辑的竞赛不存在或已被删除</p>
          <Link href="/admin/competitions">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回列表
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  // 格式化日期为 YYYY-MM-DD 字符串
  const formattedDeadline = competition.deadline.toISOString().split('T')[0]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* 页面标题 */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/competitions">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回列表
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">编辑竞赛信息</h1>
          <p className="text-gray-600 mt-2">修改竞赛的基本信息和设置</p>
        </div>
      </div>

      {/* 编辑表单 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-600" />
            竞赛信息编辑
          </CardTitle>
          <CardDescription>
            修改竞赛的相关信息，所有标有 * 的字段为必填项
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EditCompetitionForm 
            competition={{
              ...competition,
              description: competition.description || undefined,
              deadline: formattedDeadline
            }}
          />
        </CardContent>
      </Card>
    </div>
  )
}
