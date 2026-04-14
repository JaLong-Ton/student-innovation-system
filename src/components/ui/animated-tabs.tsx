'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedTabsProps {
  tabs: string[]
  activeTab: string
  setActiveTab: (tab: string) => void
  layoutIdPrefix: string // 关键：防止页面上有多个滑块组件时动画冲突
  className?: string
}

export function AnimatedTabs({ tabs, activeTab, setActiveTab, layoutIdPrefix, className }: AnimatedTabsProps) {
  return (
    <div className={cn("flex space-x-1 bg-gray-100/80 p-1 rounded-full w-fit", className)}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={cn(
            "relative px-4 py-1.5 text-sm font-medium rounded-full outline-none transition-colors duration-300",
            activeTab === tab ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
          )}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          {activeTab === tab && (
            <motion.div
              layoutId={`active-pill-${layoutIdPrefix}`}
              className="absolute inset-0 bg-white rounded-full shadow-sm"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  )
}
