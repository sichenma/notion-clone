import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jotion',
  description: 'The connected workspace where better, faster work happens.',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/notion-svgrepo-com.svg",
        href: "/notion-svgrepo-com.svg"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/notion_black_logo_icon_147102.svg",
        href: "/notion_black_logo_icon_147102.svg"
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
