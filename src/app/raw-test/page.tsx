export default function RawTestPage() {
  return (
    <html>
      <head>
        <title>原始测试</title>
      </head>
      <body style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>
          原始 HTML 测试页面
        </h1>
        <div style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '20px', 
          borderRadius: '8px',
          border: '1px solid #ddd'
        }}>
          <p>如果你能看到这个内容，说明 Next.js 基本渲染正常。</p>
          <p>当前时间: {new Date().toLocaleString()}</p>
          <p>随机数: {Math.random()}</p>
        </div>
      </body>
    </html>
  )
}
