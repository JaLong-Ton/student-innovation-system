'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Download, FileSpreadsheet } from 'lucide-react'
import * as XLSX from 'xlsx'
import { getExportData } from '@/app/actions/admin'

interface ExportCompetitionButtonProps {
  competitionId: string
  competitionName: string
}

export function ExportCompetitionButton({ competitionId, competitionName }: ExportCompetitionButtonProps) {
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async () => {
    if (isExporting) return

    setIsExporting(true)
    try {
      // 获取导出数据
      const data = await getExportData(competitionId)

      // 检查是否有数据
      if (data.length === 0) {
        toast.error('该赛事目前没有已通过的报名记录')
        return
      }

      // 生成工作表
      const worksheet = XLSX.utils.json_to_sheet(data)

      // 设置列宽
      const colWidths = [
        { wch: 12 }, // 申请人
        { wch: 20 }, // 作品名称
        { wch: 25 }, // 团队成员
        { wch: 12 }, // 指导老师
        { wch: 15 }, // 老师学院
        { wch: 20 }, // 报名说明
        { wch: 12 }, // 提交时间
      ]
      worksheet['!cols'] = colWidths

      // 创建工作簿
      const workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, worksheet, '已通过名单')

      // 生成文件名并下载
      const fileName = `${competitionName}_报名名单.xlsx`
      XLSX.writeFile(workbook, fileName)

      toast.success('导出成功！')
    } catch (error) {
      console.error('导出失败:', error)
      toast.error('导出失败，请稍后重试')
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleExport}
      disabled={isExporting}
      className="flex items-center gap-2"
    >
      {isExporting ? (
        <>
          <div className="w-4 h-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />
          导出中...
        </>
      ) : (
        <>
          <FileSpreadsheet className="w-4 h-4" />
          导出名单
        </>
      )}
    </Button>
  )
}
