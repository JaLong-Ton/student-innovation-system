'use client'

import { useState, useMemo } from 'react'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Trash2 } from 'lucide-react'

interface Teacher {
  id: string
  teacherNo: string
  name: string
  department?: string | null
  createdAt: string
}

interface TeacherDataTableProps {
  teachers: Teacher[]
}

export function TeacherDataTable({ teachers }: TeacherDataTableProps) {
  // 状态定义
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDept, setSelectedDept] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // 第二步：数据过滤与分页逻辑
  const {
    filteredTeachers,
    departments,
    currentData,
    totalPages,
    totalResults
  } = useMemo(() => {
    // 提取学院列表
    const deptSet = new Set<string>()
    teachers.forEach(teacher => {
      if (teacher.department) {
        deptSet.add(teacher.department)
      }
    })
    const departments = Array.from(deptSet).sort()

    // 过滤数据
    let filtered = teachers.filter(teacher => {
      // 搜索过滤
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase()
        const nameMatch = teacher.name.toLowerCase().includes(searchLower)
        const noMatch = teacher.teacherNo.toLowerCase().includes(searchLower)
        if (!nameMatch && !noMatch) return false
      }

      // 学院过滤
      if (selectedDept !== 'all' && teacher.department !== selectedDept) {
        return false
      }

      return true
    })

    // 分页
    const totalResults = filtered.length
    const totalPages = Math.ceil(totalResults / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentData = filtered.slice(startIndex, endIndex)

    return {
      filteredTeachers: filtered,
      departments,
      currentData,
      totalPages,
      totalResults
    }
  }, [teachers, searchTerm, selectedDept, currentPage])

  // 搜索内容改变时，强制回到第一页
  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  // 学院筛选改变时，强制回到第一页
  const handleDeptChange = (value: string) => {
    setSelectedDept(value)
    setCurrentPage(1)
  }

  // 分页控制
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const getDepartmentColor = (department?: string) => {
    if (!department) return 'bg-gray-100 text-gray-800'
    
    const colorMap: Record<string, string> = {
      '计算机学院': 'bg-blue-100 text-blue-800',
      '信息学院': 'bg-green-100 text-green-800',
      '机械学院': 'bg-purple-100 text-purple-800',
      '电气学院': 'bg-yellow-100 text-yellow-800',
      '材料学院': 'bg-red-100 text-red-800',
      '土木学院': 'bg-indigo-100 text-indigo-800'
    }
    return colorMap[department] || 'bg-gray-100 text-gray-800'
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5 text-blue-600" />
          已添加的指导老师
        </CardTitle>
        <CardDescription>
          系统中共有 {teachers.length} 位指导老师，当前显示 {totalResults} 条结果
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* 第三步：顶部工具栏 */}
        <div className="flex items-center justify-between mb-6">
          {/* 左侧：搜索框 */}
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="搜索姓名或教师编号..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* 右侧：学院筛选 */}
          <Select value={selectedDept} onValueChange={handleDeptChange}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="选择学院" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部学院</SelectItem>
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>
                  {dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* 中部数据区 */}
        {currentData.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>教师编号</TableHead>
                <TableHead>姓名</TableHead>
                <TableHead>所属学院</TableHead>
                <TableHead>添加时间</TableHead>
                <TableHead className="text-right">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentData.map((teacher) => (
                <TableRow key={teacher.id}>
                  <TableCell className="font-mono text-sm">
                    {teacher.teacherNo}
                  </TableCell>
                  <TableCell className="font-medium">
                    {teacher.name}
                  </TableCell>
                  <TableCell>
                    {teacher.department ? (
                      <Badge className={getDepartmentColor(teacher.department)}>
                        {teacher.department}
                      </Badge>
                    ) : (
                      <span className="text-gray-500">未设置</span>
                    )}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {new Date(teacher.createdAt).toLocaleDateString('zh-CN')}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        if (confirm(`确定要删除指导老师"${teacher.name}"吗？此操作不可撤销。`)) {
                          // 这里需要调用删除函数，但由于是纯展示组件，暂时留空
                          // 实际使用时需要通过 props 传入删除函数
                          console.log('删除教师:', teacher.id)
                        }
                      }}
                      className="flex items-center gap-2"
                    >
                      <Trash2 className="h-4 w-4" />
                      删除
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <p className="text-gray-500 mb-2">未找到匹配的指导老师</p>
            <p className="text-sm text-gray-400">
              请尝试调整搜索条件或筛选选项
            </p>
          </div>
        )}

        {/* 底部分页区 */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6 pt-4 border-t">
            <div className="text-sm text-gray-600">
              共 {totalResults} 条结果，当前第 {currentPage}/{totalPages} 页
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="flex items-center gap-1"
              >
                <ChevronLeft className="h-4 w-4" />
                上一页
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1"
              >
                下一页
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
