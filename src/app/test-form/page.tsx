import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TestFormPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">表单测试</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>测试卡片</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">测试输入</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded"
                placeholder="输入测试"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              提交
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
