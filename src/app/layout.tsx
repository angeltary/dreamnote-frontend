import { TanstackQueryProvider } from '@/components/layout/providers/tanstack-query-provider'
import { Toaster } from '@/components/ui/toaster'
import '@/shared/styles/globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${rubik.className} antialiased`}>
        <TanstackQueryProvider>
          {children}
          <Toaster />
        </TanstackQueryProvider>
      </body>
    </html>
  )
}
