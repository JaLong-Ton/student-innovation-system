import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  // 获取 Clerk Webhook 密钥
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET
  if (!webhookSecret) {
    return new NextResponse('Webhook secret not configured', { status: 500 })
  }

  // 获取请求头
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // 如果没有所需的头信息，返回错误
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new NextResponse('Error occurred -- no svix headers', { status: 400 })
  }

  // 获取请求体
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // 创建 Webhook 实例并验证签名
  const wh = new Webhook(webhookSecret)
  let evt: any

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new NextResponse('Error occurred', { status: 400 })
  }

  // 处理不同的事件类型
  const eventType = evt.type
  console.log(`Webhook with type ${eventType}`)

  try {
    switch (eventType) {
      case 'user.created':
        await handleUserCreated(evt.data)
        break
      case 'user.updated':
        await handleUserUpdated(evt.data)
        break
      case 'user.deleted':
        await handleUserDeleted(evt.data)
        break
      default:
        console.log(`Unhandled event type: ${eventType}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return new NextResponse('Error processing webhook', { status: 500 })
  }
}

async function handleUserCreated(data: any) {
  const { id, email_addresses, first_name, last_name } = data
  const email = email_addresses[0]?.email_address

  if (!email) {
    throw new Error('Email is required')
  }

  // 在数据库中创建用户记录
  await prisma.user.create({
    data: {
      id,
      email,
      name: `${first_name || ''} ${last_name || ''}`.trim() || null,
    },
  })

  console.log(`User created: ${email}`)
}

async function handleUserUpdated(data: any) {
  const { id, email_addresses, first_name, last_name } = data
  const email = email_addresses[0]?.email_address

  if (!email) {
    throw new Error('Email is required')
  }

  // 更新数据库中的用户记录
  await prisma.user.update({
    where: { id },
    data: {
      email,
      name: `${first_name || ''} ${last_name || ''}`.trim() || null,
    },
  })

  console.log(`User updated: ${email}`)
}

async function handleUserDeleted(data: any) {
  const { id } = data

  // 从数据库中删除用户记录（或标记为已删除）
  await prisma.user.delete({
    where: { id },
  })

  console.log(`User deleted: ${id}`)
}
