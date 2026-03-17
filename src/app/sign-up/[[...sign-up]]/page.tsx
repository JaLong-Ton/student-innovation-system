import { SignUp } from '@clerk/nextjs'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <div className="w-full max-w-md space-y-6">
        {/* Logo and Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            创建账户
          </h1>
          <p className="text-gray-600">
            开始您的双创之旅
          </p>
        </div>

        {/* Clerk SignUp Component */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <SignUp 
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "shadow-none border-0",
                headerTitle: "text-lg font-semibold",
                headerSubtitle: "text-sm text-gray-600",
                socialButtonsBlockButton: "border-gray-200 hover:bg-gray-50",
                formButtonPrimary: "bg-blue-600 hover:bg-blue-700 normal-case",
                footerActionLink: "text-blue-600 hover:text-blue-700",
                dividerLine: "bg-gray-200",
                dividerText: "text-gray-500 text-sm"
              }
            }}
          />
        </div>

        {/* Footer */}
        <div className="text-center space-y-4">
          <div className="text-sm text-gray-600">
            已有账户？{' '}
            <Link 
              href="/sign-in" 
              className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              立即登录
            </Link>
          </div>
          
          <div className="text-xs text-gray-500">
            注册即表示您同意我们的{' '}
            <Link href="/terms" className="underline hover:text-gray-700">
              服务条款
            </Link>
            {' '}和{' '}
            <Link href="/privacy" className="underline hover:text-gray-700">
              隐私政策
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
