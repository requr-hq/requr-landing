import type { Metadata } from 'next'
import localFont from 'next/font/local';
import { Karla } from 'next/font/google';
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const mabryPro = localFont({
  variable: '--font-mabry',
  src: [
    {
      path: '../../public/fonts/mabry-pro/MabryPro-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/mabry-pro/MabryPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/mabry-pro/MabryPro-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/mabry-pro/MabryPro-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/mabry-pro/MabryPro-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/mabry-pro/MabryPro-Italic.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
});

const circularStd = localFont({
  variable: '--font-circular',
  src: [
    {
      path: '../../public/fonts/circular-std/circular-std-medium.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

const karla = Karla({ subsets: ['latin'], variable: '--font-karla' });

export const metadata: Metadata = {
  title: 'Requr - Track All Your Subscriptions',
  description: 'Keep track and manage all your subscriptions in one place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico?v=3" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" href="/favicon.ico?v=3" />
      </head>
      <body className={`${karla.variable} ${mabryPro.variable} ${circularStd.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}