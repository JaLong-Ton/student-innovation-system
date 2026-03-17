# Clerk 身份认证设置指南

## 🚀 快速开始

### 1. 创建 Clerk 应用

1. 访问 [Clerk Dashboard](https://dashboard.clerk.com)
2. 点击 "Add application" 创建新应用
3. 选择应用名称，例如 "大学生双创系统"
4. 选择登录方式（推荐启用邮箱、Google、GitHub）

### 2. 配置环境变量

复制 `.env.example` 为 `.env.local`：

```bash
cp .env.example .env.local
```

在 Clerk Dashboard 中找到以下密钥并填入 `.env.local`：

```env
# Clerk Public Key (在 API Keys 页面)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here

# Clerk Secret Key (在 API Keys 页面)
CLERK_SECRET_KEY=sk_test_your_key_here

# Webhook Secret (可选，在 Webhooks 页面)
CLERK_WEBHOOK_SECRET=whsec_your_key_here
```

### 3. 配置重定向 URL

在 Clerk Dashboard 的 "User & Authentication" > "Paths" 中设置：

- **Sign-in URL**: `/sign-in`
- **Sign-up URL**: `/sign-up`
- **After sign-in**: `/dashboard`
- **After sign-up**: `/dashboard`

### 4. 配置 Webhook (可选但推荐)

1. 在 Clerk Dashboard 中，进入 "Webhooks"
2. 创建新 webhook
3. **Endpoint URL**: `https://yourdomain.com/api/webhooks/clerk`
4. **监听事件**:
   - `user.created` - 用户创建时同步到数据库
   - `user.updated` - 用户信息更新时同步
   - `user.deleted` - 用户删除时清理数据

## 🔐 功能特性

### 已实现的功能

- ✅ **用户注册/登录** - 支持邮箱、Google、GitHub
- ✅ **路由保护** - 自动重定向未登录用户
- ✅ **用户信息同步** - Clerk 与数据库双向同步
- ✅ **美观的认证页面** - 自定义样式的登录/注册页面
- ✅ **用户头像显示** - 在导航栏显示用户信息

### 路由保护规则

- **公开路由**: `/`, `/sign-in/*`, `/sign-up/*`, `/api/webhooks/*`
- **受保护路由**: `/dashboard`, `/competitions`, `/achievements` 等
- **自动重定向**:
  - 未登录用户访问受保护路由 → 跳转到登录页
  - 已登录用户访问登录页 → 跳转到 dashboard

## 🛠️ 使用方法

### 服务端获取用户信息

```typescript
import { getCurrentUser, getCurrentUserId } from '@/lib/clerk'

// 在 Server Component 中
export default async function Dashboard() {
  const user = await getCurrentUser()
  const userId = await getCurrentUserId()
  
  if (!user) {
    redirect('/sign-in')
  }
  
  // 使用用户信息...
}
```

### 客户端获取用户信息

```typescript
'use client'

import { useCurrentUser } from '@/hooks/use-user'

export default function UserProfile() {
  const { user, isSignedIn, isLoaded } = useCurrentUser()
  
  if (!isLoaded) return <div>Loading...</div>
  if (!isSignedIn) return <div>Please sign in</div>
  
  return <div>Welcome, {user?.firstName}!</div>
}
```

### 用户同步到数据库

```typescript
import { syncUserToDatabase } from '@/lib/clerk'

// 在用户登录后自动同步
const dbUser = await syncUserToDatabase(clerkUserId)
```

## 🎨 自定义样式

### 登录页面样式

登录/注册页面已配置了符合应用主题的样式：

- 渐变背景
- 卡片式设计
- 中文界面
- 响应式布局

### 用户头像样式

```typescript
<UserButton 
  afterSignOutUrl="/"
  appearance={{
    elements: {
      avatarBox: "w-8 h-8"
    }
  }}
/>
```

## 🔧 故障排除

### 常见问题

1. **"Webhook secret not configured"**
   - 解决：设置 `CLERK_WEBHOOK_SECRET` 环境变量

2. **"User not found in database"**
   - 解决：确保 webhook 正确配置并运行

3. **登录后没有重定向**
   - 检查 Clerk Dashboard 中的重定向 URL 设置

4. **中间件不工作**
   - 确保 `middleware.ts` 在 `src/` 目录下

### 调试技巧

1. **查看控制台日志** - Webhook 事件会记录详细日志
2. **检查环境变量** - 确保所有必需的变量都已设置
3. **测试 Webhook** - 使用 Clerk Dashboard 的测试功能

## 📱 测试流程

1. **启动开发服务器**:
   ```bash
   npm run dev
   ```

2. **测试注册流程**:
   - 访问 `http://localhost:3000`
   - 点击 "注册" 按钮
   - 填写注册信息
   - 验证自动跳转到 dashboard

3. **测试路由保护**:
   - 登出状态访问 `/dashboard`
   - 验证自动跳转到登录页

4. **测试用户同步**:
   - 检查数据库中是否创建了用户记录
   - 验证用户信息是否正确同步

## 🚀 部署配置

### 生产环境设置

1. **更新环境变量**:
   ```env
   NEXTAUTH_URL=https://yourdomain.com
   ```

2. **配置 Clerk**:
   - 更新重定向 URL 为生产域名
   - 设置生产环境的 webhook URL

3. **数据库迁移**:
   ```bash
   npx prisma migrate deploy
   ```

## 📚 更多资源

- [Clerk 文档](https://clerk.com/docs)
- [Next.js 集成指南](https://clerk.com/docs/quickstarts/nextjs)
- [Webhook 配置](https://clerk.com/docs/webhooks/sync-data)
