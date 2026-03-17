import { auth, clerkClient } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

export default async function SyncUserPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  // 检查用户是否在数据库中存在
  const existingUser = await prisma.user.findUnique({
    where: { id: userId }
  })

  // 如果用户不存在，创建用户
  if (!existingUser) {
    try {
      const clerk = await clerkClient()
      const clerkUser = await clerk.users.getUser(userId)
      const email = clerkUser.emailAddresses[0]?.emailAddress
      
      if (!email) {
        throw new Error('用户邮箱未找到')
      }
      
      const user = await prisma.user.create({
        data: {
          id: userId,
          email,
          name: `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim() || null,
        },
      })
      
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">用户同步成功</h1>
          <div className="p-4 bg-green-100 rounded">
            <p className="text-green-800">✅ 用户已成功同步到数据库</p>
            <p className="text-sm mt-2">用户ID: {user.id}</p>
            <p className="text-sm">邮箱: {user.email}</p>
            <p className="text-sm">姓名: {user.name || '未设置'}</p>
          </div>
          <a href="/profile" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            前往个人中心
          </a>
        </div>
      )
    } catch (error) {
      console.error('同步用户失败:', error)
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">用户同步失败</h1>
          <div className="p-4 bg-red-100 rounded">
            <p className="text-red-800">❌ 用户同步失败</p>
            <p className="text-sm mt-2">错误信息: {error instanceof Error ? error.message : '未知错误'}</p>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">用户已存在</h1>
      <div className="p-4 bg-blue-100 rounded">
        <p className="text-blue-800">✅ 用户已在数据库中存在</p>
        <p className="text-sm mt-2">用户ID: {existingUser.id}</p>
        <p className="text-sm">邮箱: {existingUser.email}</p>
        <p className="text-sm">姓名: {existingUser.name || '未设置'}</p>
      </div>
      <a href="/profile" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        前往个人中心
      </a>
    </div>
  )
}
