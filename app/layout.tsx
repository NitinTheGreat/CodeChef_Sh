import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ChatButton from '@/components/chat-button'
import PromoBanner from '@/components/promo-banner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gradient Goods - Your Modern E-commerce Experience',
  description: 'Shop the latest trends with our beautifully designed e-commerce platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <PromoBanner />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ChatButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}