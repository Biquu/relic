import { Inter } from 'next/font/google'
import './globals.css'
import GlobalState from '@/context'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Relic',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <Navbar/>
          <main className='flex min-h-screen flex-col mt-[105px] bg-gray-100'>{children}</main>
        </GlobalState>
      </body>
    </html>
  )
}
