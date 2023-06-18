import './globals.css'
import { Inter } from 'next/font/google'
import { LandingLayout } from '@components/common/organisms/LandingLayout'
import Head from 'next/head'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Danone Hackaton',
  description: 'Danone demo page for hackaton 2023 by Victor Diaz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LandingLayout>{children}</LandingLayout>
      </body>
    </html>
  )
}
