'use client'

import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'

// 核心优化：动态引入重型 PDF 组件，且禁用服务端渲染 (SSR)
const DynamicPDFExport = dynamic(() => import('@/components/profile/pdf-export-button'), {
  ssr: false, // 因为 html2canvas 依赖浏览器 window 对象，绝对不能在服务端渲染
  loading: () => <Button disabled variant="outline">加载导出引擎中...</Button>
})

interface PDFExportWrapperProps {
  targetId: string
  fileName?: string
}

export default function PDFExportWrapper({ targetId, fileName }: PDFExportWrapperProps) {
  return <DynamicPDFExport targetId={targetId} fileName={fileName} />
}
