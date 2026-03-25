import { getAllUsers } from '@/app/actions/admin'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Settings } from 'lucide-react'

export default async function AdminUsersPage() {
  const users = await getAllUsers()

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">用户管理</h1>
        <p className="text-gray-600 mt-1">查看和管理系统中的所有用户</p>
      </div>

      {/* 用户表格 */}
      <div className="bg-white rounded-lg border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>用户</TableHead>
              <TableHead>邮箱</TableHead>
              <TableHead>用户ID</TableHead>
              <TableHead className="text-right">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length > 0 ? (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.imageUrl || undefined} alt={user.firstName || '用户'} />
                        <AvatarFallback>
                          {(user.firstName?.[0] || 'U') + (user.lastName?.[0] || '')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-gray-900">
                          {user.firstName && user.lastName 
                            ? `${user.firstName} ${user.lastName}` 
                            : '未设置姓名'
                          }
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-gray-600">
                      {user.emailAddresses[0]?.emailAddress || '无邮箱'}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-gray-500 font-mono">
                      {user.id.slice(0, 8)}...
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button asChild variant="outline" size="sm">
                      <Link 
                        href={`/admin/users/${user.id}`}
                        className="flex items-center gap-2"
                      >
                        <Settings className="h-4 w-4" />
                        管理成就
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                  暂无用户数据
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
