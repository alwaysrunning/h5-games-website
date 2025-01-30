import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Link from 'next/link'
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from 'next'

// import { games } from '../data/games'

const inter = Inter({ subsets: ['latin'] })

// 取消注释并修改全局元数据配置
export const metadata: Metadata = {
  title: {
    default: 'Unblock H5 Games - Free Online HTML5 Games',
    template: '%s'  // 简化模板，让子页面完全控制标题
  },
  description: 'Play the best free online HTML5 games. No downloads required. Enjoy a wide selection of browser games including action, puzzle, racing, and more.',
  keywords: ['online games', 'HTML5 games', 'browser games', 'free games', 'web games', 'no download games', 'mobile games'],
  metadataBase: new URL('https://unblockh5games.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Unblock H5 Games'
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
    <html lang="en">
      <head>
        <link rel="canonical" href="https://unblockh5games.com" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9126717077917103"
          crossOrigin="anonymous"></script>
        
        {/* Favicon 配置 */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-[calc(100vh-65px)] pt-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
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