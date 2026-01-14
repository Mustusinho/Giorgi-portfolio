import ScrollPager from '@/components/ScrollPager'
import Container from '@/components/Container'
import ProofStrip from '@/components/ProofStrip'
import ProjectCard from '@/components/ProjectCard'
import CTA from '@/components/CTA'
import { projects } from '@/lib/projects'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      <ScrollPager />

      {/* PAGE 1 */}
      <section
        data-page
        className="relative overflow-hidden pt-16 md:pt-20"
        style={{ minHeight: 'calc(100svh - var(--nav-h))' }}
      >
        <Container>
          <div className="flex min-h-[calc(100svh-var(--nav-h)-64px)] items-center">
            <div className="py-10 md:py-12">
              <div className="text-sm text-white/70">
                AI Product Engineer / Full-Stack Engineer (AI Products)
              </div>

              <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
                I build AI products that ship.
              </h1>

              <p className="mt-4 max-w-2xl text-lg text-white/70">
                Production-ready AI features and full-stack systems—from UX to APIs to realtime—built with{' '}
                <span className="text-white/90">Next.js</span>, <span className="text-white/90">TypeScript</span>,{' '}
                <span className="text-white/90">Supabase</span>, and <span className="text-white/90">Rust</span>.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-white/90"
                >
                  View flagship projects
                </Link>
                <Link
                  href="/resume"
                  className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 hover:border-white/30 hover:text-white"
                >
                  Download resume
                </Link>
              </div>

              {/* ✅ small + recruiter-friendly contact row */}
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/60">
                <a className="hover:text-white" href="mailto:giorgi.chavch@gmail.com">
                  giorgi.chavch@gmail.com
                </a>
                <span className="text-white/20">•</span>
                <a className="hover:text-white" href="https://linkedin.com/in/giorgichavchanidze" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <span className="text-white/20">•</span>
                <a className="hover:text-white" href="https://github.com/mustusinho" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <span className="text-white/20">•</span>
                <a className="hover:text-white" href="tel:+34722685518">
                  +34 722 685 518
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PAGE 2 */}
      <section data-page className="py-10 md:py-12" style={{ minHeight: 'calc(100svh - var(--nav-h))' }}>
        <Container>
          <div className="flex min-h-[calc(100svh-var(--nav-h))] items-center">
            <div className="w-full">
              <ProofStrip />
            </div>
          </div>
        </Container>
      </section>

      {/* PAGE 3 */}
      <section data-page className="py-10 md:py-12" style={{ minHeight: 'calc(100svh - var(--nav-h))' }}>
        <Container>
          <div className="flex min-h-[calc(100svh-var(--nav-h))] items-center">
            <div className="w-full">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-semibold">Featured case studies</h2>
                  <p className="mt-2 text-sm text-white/60">
                    Architecture, hard parts, and product decisions — written for recruiters and hiring managers.
                  </p>
                </div>

                <Link href="/projects" className="text-sm text-white/70 hover:text-white">
                  View all →
                </Link>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {projects.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PAGE 4 */}
      <section data-page className="py-10 md:py-12" style={{ minHeight: 'calc(100svh - var(--nav-h))' }}>
        <Container>
          <div className="flex min-h-[calc(100svh-var(--nav-h))] items-center">
            <div className="w-full">
              <CTA />
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
