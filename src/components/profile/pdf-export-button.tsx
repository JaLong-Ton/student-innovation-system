'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { toast } from 'sonner'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

interface PDFExportButtonProps {
  targetId: string // 要截图的 DOM 元素的 ID
  fileName?: string
}

export default function PDFExportButton({ targetId, fileName = '我的双创履历' }: PDFExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async () => {
    const element = document.getElementById(targetId)
    if (!element) {
      toast.error('未找到履历内容')
      return
    }

    setIsExporting(true)
    toast.loading('正在生成专属履历，请稍候...', { id: 'pdf-export' })

    try {
      // 1. 将网页元素转换为高精度 Canvas
      const canvas = await html2canvas(element, {
        scale: 2, // 提高清晰度
        useCORS: true, // 允许加载跨域图片
        backgroundColor: '#ffffff'
      })

      // 2. 将 Canvas 转换为 PDF
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      })

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save(`${fileName}.pdf`)
      
      toast.success('🎉 履历导出成功！', { id: 'pdf-export' })
    } catch (error) {
      console.error('PDF 导出失败:', error)
      toast.error('导出失败，请重试', { id: 'pdf-export' })
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <Button 
      onClick={handleExport} 
      disabled={isExporting}
      className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all"
    >
      {isExporting ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>引擎生成中...</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          <span>一键导出 PDF 履历</span>
        </div>
      )}
    </Button>
  )
}
