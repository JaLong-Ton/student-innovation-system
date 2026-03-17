export interface AchievementInput {
  title: string
  type: 'AWARD' | 'PAPER' | 'PATENT'
  level: 'STATE' | 'PROVINCE' | 'SCHOOL'
  date: string
}

export interface Achievement extends AchievementInput {
  id: string
  userId: string
  createdAt: Date
}

export const ACHIEVEMENT_TYPES = [
  { value: 'AWARD', label: '获奖' },
  { value: 'PAPER', label: '论文' },
  { value: 'PATENT', label: '专利' }
] as const

export const ACHIEVEMENT_LEVELS = [
  { value: 'STATE', label: '国家级' },
  { value: 'PROVINCE', label: '省级' },
  { value: 'SCHOOL', label: '校级' }
] as const
