import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Nuvion Solutions',
    default:  'Nuvion Solutions — Web Experiences',
  },
  description:
    'We build digital experiences for med spas, startups, restaurants, law firms, and home service businesses.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio.nuvion-solutions.com'
  ),
  openGraph: {
    type:   'website',
    locale: 'en_US',
    url:    '/',
    siteName: 'Nuvion Solutions Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  )
}
