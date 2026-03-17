import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Header } from '@/components/layout/header'
import "./globals.css";

export const metadata: Metadata = {
  title: "大学生双创系统",
  description: "大学生创新创业助手平台",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="zh-CN">
        <body className="antialiased">
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
