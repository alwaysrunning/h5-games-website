import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Link from 'next/link'
import { Analytics } from "@vercel/analytics/react"

// import { games } from '../data/games'

const inter = Inter({ subsets: ['latin'] })

// export async function generateMetadata({
//   params,
//   searchParams,
// }: {
//   params: { [key: string]: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }): Promise<Metadata> {
//   console.log('Search Params:', params); // 调试用
//   const gameId = searchParams?.game as string;
//   if (!gameId) {
//     console.log('No game ID provided');
//   }
//   const game = games.find(game => game.id === gameId);
//   // 从游戏数据生成关键词
//   const title = game ? game.title : 'HTML5 Games - Free Online Gaming Platform';
//   const description = game ? game.description : 'Enjoy HTML5 games online for free!';
//   const keywords = game ? game.description : 'Enjoy HTML5 games online for free!';

//   return {
//     metadataBase: new URL('https://your-domain.com'),
//     title,
//     description,
//     keywords,
//     openGraph: {
//       title,
//       description,
//       type: 'website',
//       siteName: 'HTML5 Games',
//       locale: 'en_US',
//       images: [
//         {
//           url: '/og-image.jpg',
//           width: 1200,
//           height: 630,
//           alt: 'HTML5 Games Preview'
//         }
//       ]
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title,
//       description,
//       images: ['/og-image.jpg'],
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         'max-video-preview': -1,
//         'max-image-preview': 'large',
//         'max-snippet': -1,
//       },
//     },
//     verification: {
//       google: 'your-google-verification-code',
//     },
//     alternates: {
//       canonical: 'https://your-domain.com',
//     }
//   }
// }

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