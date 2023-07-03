import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'
import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
const jbm = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Die Zuverlässigkeit',
  description: 'Die Zuverlässigkeit Blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Layout */}
      <body className={jbm.className}>
          <NavBar/>
          <div className='py-32 bg-gray-500'>
            {children}
          </div>
          <Footer/>
      </body>
    </html>
  )
}
