export default function NoUIPage() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
        无 UI 组件测试
      </h1>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '8px',
        border: '1px solid #e9ecef',
        marginBottom: '20px'
      }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
          基本表单测试
        </h2>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              成就名称
            </label>
            <input 
              type="text" 
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px'
              }}
              placeholder="例如：全国大学生数学建模竞赛一等奖"
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              类型
            </label>
            <select 
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px'
              }}
            >
              <option value="">选择类型</option>
              <option value="AWARD">获奖</option>
              <option value="PAPER">论文</option>
              <option value="PATENT">专利</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              级别
            </label>
            <select 
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px'
              }}
            >
              <option value="">选择级别</option>
              <option value="STATE">国家级</option>
              <option value="PROVINCE">省级</option>
              <option value="SCHOOL">校级</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              获得时间
            </label>
            <input 
              type="date" 
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px'
              }}
            />
          </div>
          
          <button 
            type="submit"
            style={{ 
              padding: '12px 24px', 
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            添加成就
          </button>
        </form>
      </div>
      
      <div style={{ 
        backgroundColor: '#ffffff', 
        padding: '20px', 
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
          成就列表
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ 
            padding: '16px', 
            border: '1px solid #e9ecef',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>
                全国大学生数学建模竞赛一等奖
              </h3>
              <span style={{ 
                padding: '4px 8px', 
                backgroundColor: '#e3f2fd', 
                color: '#1976d2',
                fontSize: '12px',
                borderRadius: '4px'
              }}>
                获奖
              </span>
              <span style={{ 
                padding: '4px 8px', 
                backgroundColor: '#ffebee', 
                color: '#c62828',
                fontSize: '12px',
                borderRadius: '4px'
              }}>
                国家级
              </span>
            </div>
            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
              获得时间：2024年1月15日
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
