import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function viewTeachers() {
  try {
    console.log('📚 指导老师数据库内容：')
    console.log('=' .repeat(50))
    
    const teachers = await prisma.teacher.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: {
            registrations: true
          }
        }
      }
    })
    
    if (teachers.length === 0) {
      console.log('📝 暂无指导老师数据')
      return
    }
    
    console.log(`📊 总计 ${teachers.length} 位指导老师`)
    console.log('')
    
    teachers.forEach((teacher, index) => {
      console.log(`${index + 1}. ${teacher.name}`)
      console.log(`   📋 教师编号: ${teacher.teacherNo}`)
      console.log(`   🏫 所属学院: ${teacher.department || '未设置'}`)
      console.log(`   📅 添加时间: ${teacher.createdAt.toLocaleString('zh-CN')}`)
      console.log(`   👥 指导学生数: ${teacher._count.registrations}`)
      console.log('')
    })
    
    // 统计信息
    const departments = [...new Set(teachers.filter(t => t.department).map(t => t.department))]
    console.log(`📈 统计信息：`)
    console.log(`   🏫 学院数量: ${departments.length}`)
    console.log(`   📋 学院列表: ${departments.join(', ')}`)
    console.log(`   👥 平均指导数: ${(teachers.reduce((sum, t) => sum + t._count.registrations, 0) / teachers.length).toFixed(2)}`)
    
  } catch (error) {
    console.error('❌ 查看指导老师数据失败:', error)
    if (error instanceof Error) {
      console.error('错误详情:', error.message)
    }
  } finally {
    await prisma.$disconnect()
  }
}

viewTeachers()
