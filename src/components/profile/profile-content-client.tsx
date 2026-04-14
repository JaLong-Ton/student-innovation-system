'use client'

import { useState } from 'react'
import { AnimatedTabs } from '@/components/ui/animated-tabs'
import { AchievementList } from './achievement-list'
import { RegistrationList } from './registration-list'

interface ProfileContentClientProps {
  achievements: any[]
  formattedRegistrations: any[]
  teachers: any[]
}

export function ProfileContentClient({ achievements, formattedRegistrations, teachers }: ProfileContentClientProps) {
  const [mainTab, setMainTab] = useState('achievements')
  const [achievementFilter, setAchievementFilter] = useState<'ALL' | 'AWARD' | 'PAPER' | 'PATENT'>('ALL')

  return (
    <div className="space-y-6">
      {/* 主分类标签 */}
      <AnimatedTabs 
        tabs={['我的成就', '赛事申请与状态']} 
        activeTab={mainTab === 'achievements' ? '我的成就' : '赛事申请与状态'}
        setActiveTab={(tab) => setMainTab(tab === '我的成就' ? 'achievements' : 'registrations')}
        layoutIdPrefix="main-tabs"
      />

      {/* 成就筛选标签 - 只在成就标签页显示 */}
      {mainTab === 'achievements' && (
        <div className="mt-4">
          <AnimatedTabs 
            tabs={['全部', '获奖', '论文', '专利']} 
            activeTab={achievementFilter === 'ALL' ? '全部' : achievementFilter === 'AWARD' ? '获奖' : achievementFilter === 'PAPER' ? '论文' : '专利'}
            setActiveTab={(tab) => setAchievementFilter(tab === '全部' ? 'ALL' : tab === '获奖' ? 'AWARD' : tab === '论文' ? 'PAPER' : 'PATENT')}
            layoutIdPrefix="achievement-filters"
          />
        </div>
      )}

      {/* 内容区域 */}
      <div className="mt-6">
        {mainTab === 'achievements' ? (
          <AchievementList achievements={achievements} filterType={achievementFilter} />
        ) : (
          <RegistrationList registrations={formattedRegistrations} teachers={teachers} />
        )}
      </div>
    </div>
  )
}
