import './og/css/global.css'
import './og/css/background.css'
import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import VantaNet from './components/VantaNet'
export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Reys portfolio',
    template: '%s | My Portfolio',
  },
  description: 'This is my portfolio.', 
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'dark text-white bg-black font-mono',
        GeistMono.variable
      )}
      suppressHydrationWarning
    >
  <body className="antialiased max-w-4xl mx-4 mt-8 lg:mx-auto" style={{ background: 'transparent' }}>
  {/* Fixed animated Vanta.NET background behind all content */}
  <VantaNet speed={0.1} />
        <div className="relative z-10 bg-black px-6 py-8 md:px-12 md:py-10">
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </div>
      </body>
    </html>
  )
}
