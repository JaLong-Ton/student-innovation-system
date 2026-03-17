# Supabase PostgreSQL 配置指南

## ✅ 配置完成状态

**数据库**: Supabase PostgreSQL ✅ 已连接
**Prisma**: ✅ 已生成客户端并同步架构
**服务器**: http://localhost:3000 ✅ 运行中

## 🔧 已修复的问题

### 1. 数据库连接问题
**问题**: `empty host in database URL`
**原因**: 特殊字符未正确转义
**解决**: URL 编码了特殊字符

### 2. Prisma 配置
**修复前**: `provider = "sqlite"`
**修复后**: `provider = "postgresql"`

### 3. 环境变量同步
**修复**: 确保 `.env` 和 `.env.local` 都包含正确的数据库 URL

## 📋 当前配置

### 环境变量
```env
# Supabase PostgreSQL
DATABASE_URL="postgresql://postgres:Q%40%25C%40-5YC5dqa%40%2F@db.nddsqwulmtqaotwhpysk.supabase.co:5432/postgres"

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_aGFybWxlc3MtbGFjZXdpbmctMTYuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_myheXZdAUgfpcE6WgDgfXxaTQ2y7AZHI3UUMl6m9l2

# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-here-at-least-32-characters-long
```

### Prisma Schema
```prisma
datasource db {
  provider = "postgresql"
}

// 数据模型
model User { ... }
model Achievement { ... }
model Competition { ... }
model Registration { ... }
```

## 🗄️ 数据库架构

### 表结构
1. **User** - 用户表 (与 Clerk 同步)
2. **Achievement** - 成就表
3. **Competition** - 竞赛表  
4. **Registration** - 报名记录表

### 关系
- User → Achievement (一对多)
- User → Registration (一对多)
- Competition → Registration (一对多)

## 🧪 测试数据库连接

### 1. 验证 Prisma 连接
```bash
npx prisma db push
# 预期: "Your database is now in sync with your Prisma schema"
```

### 2. 查看数据库
```bash
npx prisma studio
# 预期: 打开数据库管理界面
```

### 3. 测试应用功能
1. 访问 http://localhost:3000
2. 注册/登录用户
3. 添加成就记录
4. 验证数据保存到 Supabase

## 🔍 URL 编码说明

原始密码: `Q@%C@-5YC5dqa@/`
编码后: `Q%40%25C%40-5YC5dqa%40%2F`

**编码规则**:
- `@` → `%40`
- `%` → `%25`
- `/` → `%2F`

## 🚀 生产环境部署

### 环境变量
```env
# 生产环境
DATABASE_URL="postgresql://[encoded-password]@[host]:5432/[database]"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_xxx
CLERK_SECRET_KEY=sk_live_xxx
NEXTAUTH_URL=https://your-domain.com
```

### 数据库迁移
```bash
# 生成迁移文件
npx prisma migrate dev --name init

# 部署到生产环境
npx prisma migrate deploy
```

## 📊 性能优化

### 1. 数据库索引
```prisma
model Achievement {
  id      String   @id @default(cuid())
  userId  String
  title   String
  type    String
  level   String
  date    DateTime
  createdAt DateTime @default(now())

  @@index([userId])     // 添加索引
  @@index([type, level]) // 复合索引
}
```

### 2. 连接池配置
```env
DATABASE_URL="postgresql://user:pass@host:5432/db?connection_limit=20&pool_timeout=20"
```

## 🔧 故障排除

### 1. 连接失败
```bash
# 测试连接
psql "postgresql://postgres:Q%40%25C%40-5YC5dqa%40%2F@db.nddsqwulmtqaotwhpysk.supabase.co:5432/postgres"
```

### 2. 权限错误
- 检查 Supabase 项目设置
- 确认 RLS (Row Level Security) 配置
- 验证 API 密钥权限

### 3. 迁移失败
```bash
# 重置数据库
npx prisma migrate reset

# 强制推送
npx prisma db push --force-reset
```

## 📈 监控和维护

### 1. 数据库监控
- Supabase Dashboard
- Prisma Studio
- 查询性能分析

### 2. 备份策略
- Supabase 自动备份
- 定期导出数据
- 迁移文件版本控制

## ✅ 验证清单

- [ ] Supabase 数据库连接正常
- [ ] Prisma 客户端生成成功
- [ ] 数据库架构同步完成
- [ ] 应用启动无错误
- [ ] 用户注册功能正常
- [ ] 成就创建功能正常
- [ ] 数据正确保存到 Supabase

## 🎯 下一步

1. **配置 Webhook**: 设置 Clerk 用户同步
2. **添加测试数据**: 创建示例用户和成就
3. **性能测试**: 测试数据库查询性能
4. **安全配置**: 设置 RLS 策略

Supabase PostgreSQL 配置现已完成并可以正常使用！
