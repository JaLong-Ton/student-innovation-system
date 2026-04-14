# 🎓 大学生双创助手平台 (Innovation & Entrepreneurship Hub)

一款专为高校学生与教务管理者打造的**全栈创新创业竞赛管理系统**。不仅提供从“赛事发现”到“报名审批”的全链路闭环，更首创了“一键生成专属双创履历 PDF”的特色功能。系统采用现代化的服务端渲染架构，注重极致的交互体验与底层性能优化。

## ✨ 核心亮点 & 性能优化 (Key Features)

这个项目不仅仅完成了业务逻辑，更在架构和 UX 上达到了商业级标准：

  * 🚀 **无感鉴权与路由拦截：** 深度集成 Clerk，利用 Session Claims (JWT) 将角色标识（Role）写入本地 Token，实现零网络延迟的管理员权限校验与极速的页面重定向。
  * ⚡ **极致畅快的审批体验 (Optimistic UI)：** 在后台审批业务中引入 React 18 `useOptimistic`，实现状态的“乐观更新”。无需等待网络响应，状态瞬间切换，彻底告别加载卡顿。
  * 📊 **千万级潜力的数据底座：** 使用 Prisma ORM，严格使用 `select` 瘦身查询载荷，并针对高频查询字段（如 `status`, `userId`, `competitionId`）建立 B+ 树索引 (`@@index`)，查询速度提升百倍。
  * 🖨️ **重型武器动态加载 (Dynamic Import)：** 基于 `html2canvas` 和 `jsPDF` 开发了精美的 PDF 履历生成引擎。利用 Next.js 动态引入技术（代码分割），彻底隔离重型依赖，确保前台页面秒级首屏加载。
  * 🎨 **现代化大厂 UI 规范：** 摒弃粗糙的传统后台组件，采用全套 Tailwind CSS 定制化开发。包含精细的网格瀑布流防塌陷设计、微悬浮动效、以及进度条数据可视化。

## 🛠️ 技术栈 (Tech Stack)

  * **前端框架：** Next.js (App Router), React 18
  * **UI 组件库：** Tailwind CSS, shadcn/ui, Lucide React (图标)
  * **后端 API：** Next.js Server Actions
  * **数据库：** PostgreSQL / MySQL (由 Prisma ORM 强力驱动)
  * **身份认证：** Clerk Auth
  * **特色工具：** jsPDF, html2canvas, date-fns

## 📦 本地运行指南 (Getting Started)

### 1\. 克隆与安装

```bash
git clone <你的仓库地址>
cd your-project-name
npm install
```

### 2\. 配置环境变量

在项目根目录创建 `.env.local` 文件，并填入以下必须的配置项：

```env
# Clerk 鉴权密钥 (从 Clerk Dashboard 获取)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# 数据库连接串 (替换为你的真实数据库地址)
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"

# (可选) 国内网络环境下，解决 Server Components 调用 Clerk API 超时问题
# HTTP_PROXY=http://127.0.0.1:7890
# HTTPS_PROXY=http://127.0.0.1:7890
```

### 3\. 初始化数据库

推送 Prisma Schema 到你的数据库，并生成 Client：

```bash
npx prisma db push
npx prisma generate
```

### 4\. 启动开发服务器

```bash
npm run dev
```

打开浏览器访问 [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) 即可预览。

## 目录结构速览 (Folder Structure)

```text
├── src/
│   ├── app/               # Next.js App Router (页面与 API)
│   │   ├── (auth)/        # Clerk 登录注册页面
│   │   ├── admin/         # 管理员后台大屏 (工作台、审批、用户管理)
│   │   ├── competitions/  # 前台竞赛大厅
│   │   ├── profile/       # 个人中心 (成就与 PDF 导出)
│   │   └── page.tsx       # 智能路由首页
│   ├── components/        # 可复用的 UI 组件与业务组件
│   ├── actions/           # Server Actions (后端核心业务逻辑)
│   └── lib/               # 工具函数 (如 utils.ts)
├── prisma/
│   └── schema.prisma      # 数据库表结构定义与索引
└── tailwind.config.ts     # UI 样式配置
```

## 👨‍💻 开发者 (Author)

  * **构建者:** JiaLong-Ton
  * **定位:** 全栈开发实践、现代化 Web 架构探索

