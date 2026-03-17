import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { createAchievementFromForm } from '@/app/actions/achievements'

export function SimpleAchievementForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>新增成就</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={createAchievementFromForm as any} className="space-y-4">
          {/* 成就名称 */}
          <div className="space-y-2">
            <Label htmlFor="title">成就名称</Label>
            <Input
              id="title"
              name="title"
              placeholder="例如：全国大学生数学建模竞赛一等奖"
              required
            />
          </div>

          {/* 类型 */}
          <div className="space-y-2">
            <Label htmlFor="type">类型</Label>
            <Select name="type" required>
              <SelectTrigger>
                <SelectValue placeholder="选择类型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AWARD">获奖</SelectItem>
                <SelectItem value="PAPER">论文</SelectItem>
                <SelectItem value="PATENT">专利</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 级别 */}
          <div className="space-y-2">
            <Label htmlFor="level">级别</Label>
            <Select name="level" required>
              <SelectTrigger>
                <SelectValue placeholder="选择级别" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="STATE">国家级</SelectItem>
                <SelectItem value="PROVINCE">省级</SelectItem>
                <SelectItem value="SCHOOL">校级</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 获得时间 */}
          <div className="space-y-2">
            <Label htmlFor="date">获得时间</Label>
            <Input
              id="date"
              name="date"
              type="date"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            添加成就
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
