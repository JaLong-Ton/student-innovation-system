'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'
import * as XLSX from 'xlsx'
import { batchImportTeachers } from '@/app/actions/admin'
import { toast } from 'sonner'

export function TeacherImportButton() {
  const [isImporting, setIsImporting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0]
  
  // 核心修复 1：拿到文件后，立刻清空 input 的值！
  // 这样无论后续是成功还是失败报错，再次选择同一个文件时，onChange 都会被正常触发！
  e.target.value = ''

  if (!file) return

  setIsImporting(true)

  const processData = (workbook: XLSX.WorkBook) => {
    try {
      const firstSheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[firstSheetName]

      const rawData = XLSX.utils.sheet_to_json<any[]>(worksheet, { header: 1 })

      if (rawData.length < 2) {
        toast.error('表格数据为空或只有表头')
        setIsImporting(false)
        return
      }

      const headers = rawData[0].map(h => String(h || '').trim().toLowerCase())
      let nameIndex = -1;
      let deptIndex = -1;

      headers.forEach((header, index) => {
        if (header.includes('名') || header.includes('教师')) nameIndex = index;
        if (header.includes('院') || header.includes('系') || header.includes('部门')) deptIndex = index;
      });

      if (nameIndex === -1) {
        toast.error(`解析失败：未在第一行找到"姓名"。当前识别到的表头为: ${headers.join(', ')}`)
        setIsImporting(false)
        return
      }

      const formattedData: { name: string; department: string }[] = [];
      for (let i = 1; i < rawData.length; i++) {
        const row = rawData[i]
        if (!row || row.length === 0) continue

        const name = row[nameIndex] ? String(row[nameIndex]).trim() : ''
        const department = deptIndex !== -1 && row[deptIndex] ? String(row[deptIndex]).trim() : '未知学院'

        if (name) {
          formattedData.push({ name, department })
        }
      }

      if (formattedData.length === 0) {
        toast.error('没有读取到有效的教师数据')
        setIsImporting(false)
        return
      }

      batchImportTeachers(formattedData).then(result => {
        if (result?.success) {
          toast.success(`成功导入 ${result.count} 位指导老师！`)
          window.location.reload()
        } else {
          toast.error('导入失败，请检查后端报错')
        }
      }).catch(error => {
        console.error('导入失败:', error)
        toast.error('网络或服务器错误，导入失败')
      }).finally(() => {
        setIsImporting(false)
      })
    } catch (error) {
      console.error('处理表格数据时发生错误:', error)
      toast.error('处理表格数据时发生错误')
      setIsImporting(false)
    }
  }

  const reader = new FileReader()

  // 核心修复 2：双引擎分流读取
  if (file.name.toLowerCase().endsWith('.csv')) {
    // CSV 文件专属引擎：直接作为 UTF-8 文本读取，防止二进制转换时中文字符丢失
    reader.readAsText(file, 'utf-8')
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string
        const workbook = XLSX.read(text, { type: 'string' })
        processData(workbook)
      } catch (err) {
        console.error('CSV 读取失败:', err)
        toast.error('CSV 读取失败')
        setIsImporting(false)
      }
    }
    reader.onerror = () => {
      toast.error('CSV 文件读取失败')
      setIsImporting(false)
    }
  } else {
    // Excel 文件专属引擎：作为二进制流读取
    reader.readAsArrayBuffer(file)
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer)
        const workbook = XLSX.read(data, { type: 'array' })
        processData(workbook)
      } catch (err) {
        console.error('Excel 读取失败:', err)
        toast.error('Excel 读取失败')
        setIsImporting(false)
      }
    }
    reader.onerror = () => {
      toast.error('Excel 文件读取失败')
      setIsImporting(false)
    }
  }
}

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <>
      <Button
        onClick={handleButtonClick}
        disabled={isImporting}
        variant="outline"
        className="flex items-center gap-2"
      >
        <Upload className="h-4 w-4" />
        {isImporting ? '导入中...' : '批量导入'}
      </Button>
      
      <input
        ref={fileInputRef}
        type="file"
        accept=".xlsx, .xls, .csv"
        onChange={handleFileUpload}
        className="hidden"
        disabled={isImporting}
      />
    </>
  )
}
