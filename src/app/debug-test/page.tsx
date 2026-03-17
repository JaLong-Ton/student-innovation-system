import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function DebugTestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">调试测试页面</h1>
      
      {/* 测试1: 基本内容 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">测试1: 基本内容</h2>
        <div className="bg-white p-4 rounded border">
          <p>如果你能看到这段文字，基本渲染是正常的。</p>
        </div>
      </div>

      {/* 测试2: Card 组件 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">测试2: Card 组件</h2>
        <Card>
          <CardHeader>
            <CardTitle>测试卡片</CardTitle>
          </CardHeader>
          <CardContent>
            <p>这是一个测试卡片，用于验证 Card 组件是否正常工作。</p>
          </CardContent>
        </Card>
      </div>

      {/* 测试3: 简单的模拟数据 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">测试3: 模拟数据</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((num) => (
            <Card key={num}>
              <CardContent className="p-4">
                <h3 className="font-semibold">项目 {num}</h3>
                <p className="text-sm text-gray-600">这是第 {num} 个测试项目</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
