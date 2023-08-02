import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'EE Time Table',
  description: 'Electrical is very important',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body class={inter.class}>{children}</body>
    </html>
  )
}
