import Link from 'next/link'
import Container from '@/components/Container'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            Giorgi <span className="text-white/60">— AI Product Engineer</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <Link className="hover:text-white" href="/projects">
              Projects
            </Link>
            <Link className="hover:text-white" href="/resume">
              Resume
            </Link>
            <Link className="hover:text-white" href="/contact">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact#hire"
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
            >
              Hire me
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}
