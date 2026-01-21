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
      <body>
        <header className="border-b border-gray-100">
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-medium text-slate-800 text-sm sm:text-base tracking-tight">Calgary Emergency Help</span>
            <a href="tel:+14034653937" className="sm:hidden text-sm font-semibold text-emerald-700">
              (403) 465-3937
            </a>
            <span className="text-xs text-gray-500 hidden sm:block">Local Calgary Service</span>
          </div>
        </header>
        
        {children}
        
        <footer className="border-t border-gray-200 bg-gray-50">
          <div className="max-w-2xl mx-auto px-4 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="font-medium text-slate-800 mb-1">Calgary Emergency Help</div>
                <div className="text-sm text-gray-600">Connecting Calgary homeowners with local emergency contractors</div>
              </div>
              <div className="text-xs text-gray-500">
                <div>Calgary, Alberta</div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
