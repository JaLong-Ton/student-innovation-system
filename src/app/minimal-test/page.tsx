export default function MinimalTestPage() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
        最小测试页面
      </h1>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '16px', 
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
        <p style={{ marginBottom: '12px' }}>
          如果你能看到这个内容，说明基本的 React 渲染是正常的。
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '16px',
          marginTop: '20px'
        }}>
          {[1, 2, 3].map((num) => (
            <div 
              key={num}
              style={{
                backgroundColor: '#ffffff',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid #dee2e6'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                卡片 {num}
              </h3>
              <p style={{ color: '#6c757d', fontSize: '14px' }}>
                这是第 {num} 个测试卡片，使用内联样式。
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
