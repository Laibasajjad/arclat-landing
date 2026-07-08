import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

export const metadata: Metadata = {
  metadataBase: new URL('https://arclat.com'),
  title: 'Arclat — Find and fix latency in your AI agent codebase',
  description:
    'Arclat audits your agent codebase for latency bottlenecks and applies fixes — right inside Claude Code. No log files, no context switching.',
  openGraph: {
    title: 'Arclat — Find and fix latency in your AI agent codebase',
    description:
      'Audit your agent codebase for latency bottlenecks and apply fixes from inside Claude Code.',
    url: 'https://arclat.com',
    siteName: 'Arclat',
    type: 'website',
  },
  icons: { icon: '/logo.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${jakarta.variable} font-body min-h-screen flex flex-col antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1 w-full">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
