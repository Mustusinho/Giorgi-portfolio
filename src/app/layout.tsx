import type { Metadata } from 'next'
import '@/app/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientFX from '@/components/ClientFX'

export const metadata: Metadata = {
  title: 'Giorgi — AI Product Engineer | Full-Stack (AI Products)',
  description:
    'Production-ready AI features + full-stack systems (Next.js, TypeScript, Supabase, Rust).',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-black text-white">
        <ClientFX />
        <Navbar />
        {children}
        <Footer />

        {/* ✅ gives a little scroll room after the last section/footer */}
        <div aria-hidden className="h-16 md:h-24" />
      </body>
    </html>
  )
}
