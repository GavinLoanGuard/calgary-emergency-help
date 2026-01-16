import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Calgary Emergency Help - 24/7 Home Emergency Services',
  description: 'Immediate help for plumbing emergencies, heating failures, and electrical problems in Calgary. Available 24/7.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
