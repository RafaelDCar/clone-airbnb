import './globals.css'
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/navbar';



const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'AirBnb',
  description: 'Clone Airbnb for study proposal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
