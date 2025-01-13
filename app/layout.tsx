import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Link from 'next/link'
import { Analytics } from "@vercel/analytics/react"

// import { games } from '../data/games'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({
  params,
}: {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  console.log('Search Params:', params); // 调试用


  // 优化关键词，使用数组格式并添加更多相关词
  const baseKeywords = ['HTML5 games', 'online games', 'free games', 'browser games', 'web games'];


  // 优化标题格式
  const title = 'HTML5 Games - Play Free Online Games in Your Browser';
  
  // 优化描述，确保长度在150-160字符之间
  const description = 'Discover and play the best free HTML5 games online. No downloads required, just open and play directly in your browser!';

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.com'),
    title,
    description,
    keywords: baseKeywords.join(', '),
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: 'HTML5 Games',
      locale: 'en_US',
      // images: [
      //   {
      //     url: game?.image || '/og-image.jpg',
      //     width: 1200,
      //     height: 630,
      //     alt: game ? `Play ${game.title} - HTML5 Games` : 'HTML5 Games Preview'
      //   }
      // ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
    alternates: {
      canonical: 'https://your-domain.com',
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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