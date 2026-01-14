import Container from '@/components/Container'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold">Giorgi — AI Product Engineer</div>
            <div className="mt-1 text-sm text-white/60">
              Production-ready AI features + full-stack systems (Next.js, TypeScript, Supabase, Rust).
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:border-white/30 hover:text-white"
              href="mailto:giorgi.chavch@gmail.com?subject=Hiring%20%7C%20AI%20Product%20Engineer"
            >
              Email me
            </a>
            <Link
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:border-white/30 hover:text-white"
              href="/projects"
            >
              View projects
            </Link>
            <Link
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:border-white/30 hover:text-white"
              href="/resume"
            >
              Resume
            </Link>
          </div>
        </div>

        <div className="mt-8 text-xs text-white/40">
          © {new Date().getFullYear()} Giorgi. Built with Next.js + Tailwind.
        </div>
      </Container>
    </footer>
  )
}
