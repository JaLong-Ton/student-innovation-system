# 大学生双创系统

基于 Next.js + Tailwind CSS + Prisma + Clerk 构建的大学生创新创业助手平台。

## 技术栈

- **前端框架**: Next.js 15 (App Router)
- **样式**: Tailwind CSS + shadcn/ui
- **数据库**: PostgreSQL + Prisma ORM
- **身份认证**: Clerk
- **部署**: Vercel (推荐)

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 环境变量配置

创建 `.env.local` 文件并配置以下环境变量：

```env
# Clerk 配置
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# 数据库配置 (推荐使用 Supabase)
DATABASE_URL=your_database_url

# Clerk Webhook 密钥 (可选)
CLERK_WEBHOOK_SECRET=your_webhook_secret
```

### 3. 数据库设置

```bash
# 生成 Prisma 客户端
npx prisma generate

# 运行数据库迁移
npx prisma migrate dev --name init

# (可选) 查看数据库
npx prisma studio
```

### 4. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 项目结构

```
src/
├── app/              # Next.js App Router 页面
│   ├── globals.css   # 全局样式
│   ├── layout.tsx    # 根布局
│   └── page.tsx      # 首页
├── components/       # React 组件
├── lib/             # 工具库
│   ├── prisma.ts    # Prisma 客户端
│   ├── utils.ts     # 通用工具函数
│   └── clerk.ts     # Clerk 配置
└── middleware.ts    # Next.js 中间件
```

## 核心功能

### 1. 用户认证
- 支持 GitHub/微信一键登录
- 邮箱验证码登录
- 用户会话管理

### 2. 个人成就管理
- 添加获奖记录
- 管理论文/专利
- 成就分类统计

### 3. 竞赛大厅
- 浏览最新竞赛信息
- 一键报名参赛
- 报名状态跟踪

### 4. 数据大屏
- 个人成就统计
- 参赛数据分析
- 可视化图表展示

## 数据库模型

### User (用户表)
- 与 Clerk 联动的用户信息
- 邮箱、姓名等基本信息

### Achievement (成就表)
- 获奖记录、论文、专利
- 支持分类和级别

### Competition (竞赛表)
- 竞赛基本信息
- 截止时间管理

### Registration (报名表)
- 用户与竞赛的关联
- 报名状态跟踪

## 部署

### Vercel 部署 (推荐)

1. 将代码推送到 GitHub
2. 连接 Vercel 账户
3. 配置环境变量
4. 自动部署

### 手动部署

```bash
# 构建项目
npm run build

# 启动生产服务器
npm start
```

## 开发指南

### 添加新页面

在 `src/app` 目录下创建新的路由文件：

```tsx
// src/app/dashboard/page.tsx
export default function Dashboard() {
  return <div>Dashboard</div>
}
```

### 添加数据库模型

1. 在 `prisma/schema.prisma` 中定义模型
2. 运行 `npx prisma migrate dev`
3. 生成客户端代码

### 使用 Server Actions

```tsx
// app/actions.ts
'use server'

import { prisma } from '@/lib/prisma'

export async function createAchievement(data: AchievementData) {
  const achievement = await prisma.achievement.create({
    data
  })
  return achievement
}
```

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 发起 Pull Request

## 许可证

MIT License
