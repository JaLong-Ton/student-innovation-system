export default function SimpleTestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">简单测试页面</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-600">如果你能看到这个内容，说明基本渲染是正常的。</p>
        <div className="mt-4 p-4 bg-blue-50 rounded">
          <h2 className="text-xl font-semibold mb-2">测试内容</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>标题样式正常</li>
            <li>背景色正常</li>
            <li>间距正常</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
