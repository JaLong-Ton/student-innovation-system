import { auth } from '@clerk/nextjs/server'
import { createAchievementFromForm } from '@/app/actions/achievements'

export default async function TestAuthPage() {
  const { userId } = await auth()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">认证测试页面</h1>
      
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded">
          <h2 className="font-semibold mb-2">当前认证状态</h2>
          <p className="text-sm">
            用户ID: {userId || '未登录'}
          </p>
        </div>

        {userId && (
          <form action={createAchievementFromForm as any} className="space-y-4 p-4 border rounded">
            <h2 className="font-semibold mb-4">快速测试表单</h2>
            
            <div>
              <label className="block text-sm font-medium mb-2">测试标题</label>
              <input 
                name="title" 
                type="text"
                className="w-full p-2 border rounded"
                placeholder="测试成就"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">类型</label>
              <select name="type" className="w-full p-2 border rounded" required>
                <option value="AWARD">获奖</option>
                <option value="PAPER">论文</option>
                <option value="PATENT">专利</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">级别</label>
              <select name="level" className="w-full p-2 border rounded" required>
                <option value="STATE">国家级</option>
                <option value="PROVINCE">省级</option>
                <option value="SCHOOL">校级</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">日期</label>
              <input 
                name="date" 
                type="date"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              测试提交
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
