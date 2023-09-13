import './globals.css'
import { Roboto } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '400', '500', '700', '900'], variable: '--font-roboto', })

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${roboto.variable} font-roboto`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
