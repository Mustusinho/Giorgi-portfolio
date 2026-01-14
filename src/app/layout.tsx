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
        {/* Fixed FX background (no layout shifts) */}
        <div className="fx-bg" />

        {/* Updates CSS vars (--mx/--my) for spotlight */}
        <ClientFX />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
