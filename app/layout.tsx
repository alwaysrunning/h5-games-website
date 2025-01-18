import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Link from 'next/link'
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from 'next'

// import { games } from '../data/games'

const inter = Inter({ subsets: ['latin'] })

// 添加网站元数据
export const metadata: Metadata = {
  title: {
    default: '你的网站名称',
    template: '%s | 你的网站名称'
  },
  description: '在这里添加你的网站描述',
  keywords: ['关键词1', '关键词2', '关键词3'],
  authors: [{ name: '你的名字' }],
  creator: '创建者名称',
  metadataBase: new URL('https://你的域名.com'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://你的域名.com',
    title: '你的网站名称',
    description: '在这里添加你的网站描述',
    siteName: '你的网站名称'
  },
  twitter: {
    card: 'summary_large_image',
    title: '你的网站名称',
    description: '在这里添加你的网站描述'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <head>
        <link rel="canonical" href="https://你的域名.com" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
          {children}
        </main>
        
        {/* 添加页脚 */}
        <footer className="bg-white dark:bg-gray-800 shadow-lg">
          <div className="container mx-auto px-4 py-4 md:py-6">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-300">
              <Link href="/about" target="_blank" className="hover:text-gray-900 dark:hover:text-white">
                About Us
              </Link>
              <Link href="/contact" target="_blank" className="hover:text-gray-900 dark:hover:text-white">
                Contact Us
              </Link>
              <Link href="/privacy" target="_blank" className="hover:text-gray-900 dark:hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" target="_blank" className="hover:text-gray-900 dark:hover:text-white">
                Terms of Use
              </Link>
              <Link href="/copyright" target="_blank" className="hover:text-gray-900 dark:hover:text-white">
                Copyright
              </Link>
            </nav>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
} 