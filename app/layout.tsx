import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Multi Step Form',
  description: 'Frontend Mentor Assignment of Multi Step Form',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
