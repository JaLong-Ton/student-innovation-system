'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface CompetitionsTabsClientProps {
  children: React.ReactNode
  defaultValue: string
  className?: string
}

export function CompetitionsTabsClient({ children, defaultValue, className }: CompetitionsTabsClientProps) {
  return (
    <Tabs defaultValue={defaultValue} className={className} suppressHydrationWarning>
      {children}
    </Tabs>
  )
}
