# 数据库设置指南

## 🚀 快速开始

### 1. 数据库初始化完成状态

✅ **已完成**:
- Prisma Schema 配置
- 数据库迁移 (SQLite 本地开发)
- Prisma Client 生成
- Server Actions 创建
- 成就管理功能

### 2. 当前数据库结构

```sql
-- 用户表 (与 Clerk 联动)
CREATE TABLE User (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 成就表
CREATE TABLE Achievement (
  id TEXT PRIMARY KEY,
  userId TEXT NOT NULL,
  title TEXT NOT NULL,
  type TEXT NOT NULL, -- AWARD, PAPER, PATENT
  level TEXT NOT NULL, -- STATE, PROVINCE, SCHOOL
  date DATETIME NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES User(id)
);

-- 竞赛表
CREATE TABLE Competition (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  deadline DATETIME NOT NULL
);

-- 报名记录表
CREATE TABLE Registration (
  id TEXT PRIMARY KEY,
  userId TEXT NOT NULL,
  competitionId TEXT NOT NULL,
  status TEXT DEFAULT 'PENDING',
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES User(id),
  FOREIGN KEY (competitionId) REFERENCES Competition(id)
);
```

## 🛠️ Server Actions 功能

### 成就管理 Server Actions

#### `createAchievement(data: AchievementInput)`
创建新成就记录

```typescript
// 使用示例
const result = await createAchievement({
  title: "全国大学生数学建模竞赛一等奖",
  type: "AWARD",
  level: "STATE", 
  date: "2024-03-01"
})
```

#### `getUserAchievements()`
获取当前用户的所有成就

```typescript
// 使用示例
const result = await getUserAchievements()
if (result.success) {
  console.log(result.data) // 成就列表
}
```

#### `updateAchievement(id, data)`
更新成就信息

```typescript
// 使用示例
const result = await updateAchievement('achievement_id', {
  title: "更新后的标题"
})
```

#### `deleteAchievement(id)`
删除成就记录

```typescript
// 使用示例
const result = await deleteAchievement('achievement_id')
```

## 📝 数据验证规则

### 成就输入验证

- **标题**: 1-100 字符，必填
- **类型**: AWARD | PAPER | PATENT，必填
- **级别**: STATE | PROVINCE | SCHOOL，必填  
- **日期**: 不能是未来时间，必填

### 错误处理

所有 Server Actions 都返回统一格式：

```typescript
{
  success: boolean,
  data?: any,
  message: string
}
```

## 🔄 数据库迁移

### 开发环境 (SQLite)

当前使用 SQLite 作为开发数据库：

```bash
# 重新生成数据库
npx prisma migrate reset

# 生成新的迁移
npx prisma migrate dev --name migration_name

# 查看数据库
npx prisma studio
```

### 生产环境 (PostgreSQL)

切换到 PostgreSQL：

1. **更新 Prisma Schema**:
```prisma
datasource db {
  provider = "postgresql"
}
```

2. **更新环境变量**:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

3. **运行迁移**:
```bash
npx prisma migrate deploy
```

## 🧪 测试数据

### 创建测试用户 (通过 Clerk)

1. 注册 Clerk 账户
2. 用户数据会自动同步到数据库

### 创建测试成就

访问 `http://localhost:3000/achievements/new` 添加测试数据：

```typescript
// 示例数据
{
  title: "互联网+大学生创新创业大赛省级金奖",
  type: "AWARD",
  level: "PROVINCE",
  date: "2024-02-15"
}
```

## 📊 数据统计示例

Dashboard 页面会显示：

- **总成就数**: 所有类型的成就总数
- **获奖项目**: type = 'AWARD' 的数量
- **论文发表**: type = 'PAPER' 的数量  
- **专利申请**: type = 'PATENT' 的数量

## 🔍 数据库查询示例

### 获取用户成就统计

```typescript
const stats = await prisma.achievement.groupBy({
  by: ['type'],
  where: { userId },
  _count: { type: true }
})
```

### 获取最近成就

```typescript
const recent = await prisma.achievement.findMany({
  where: { userId },
  orderBy: { createdAt: 'desc' },
  take: 3
})
```

## 🚨 故障排除

### 常见问题

1. **"Database locked"**
   - 解决：关闭其他数据库连接，重启服务

2. **"User not found"**
   - 解决：确保用户已通过 Clerk 注册并同步

3. **"Validation failed"**
   - 解决：检查输入数据是否符合验证规则

### 调试技巧

1. **查看 Prisma 查询**:
```bash
DEBUG=prisma:query npm run dev
```

2. **使用 Prisma Studio**:
```bash
npx prisma studio
```

3. **检查 Server Action 日志**:
在 Server Actions 中添加 `console.log` 查看执行过程

## 📚 下一步开发

1. **竞赛管理功能**
2. **报名系统**  
3. **数据导出功能**
4. **成就分享功能**

## 🔄 数据备份

### SQLite 备份

```bash
# 备份数据库
cp dev.db dev.db.backup

# 恢复数据库
cp dev.db.backup dev.db
```

### PostgreSQL 备份

```bash
# 备份
pg_dump dbname > backup.sql

# 恢复
psql dbname < backup.sql
```
