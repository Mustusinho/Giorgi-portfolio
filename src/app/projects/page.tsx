import Link from 'next/link'

import Container from '@/components/Container'
import ProofStrip from '@/components/ProofStrip'
import ProjectCard from '@/components/ProjectCard'
import CTA from '@/components/CTA'
import Reveal from '@/components/Reveal'
import ScrollPager from '@/components/ScrollPager'

import { projects } from '@/lib/projects'

export default function HomePage() {
  return (
    <main>
      {/* Enables “scroll snaps to sections” + wheel lock */}
      <ScrollPager />

      {/* PAGE 1 — HERO */}
      <section data-page className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -top-20 left-20 h-[360px] w-[360px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute top-20 right-10 h-[340px] w-[340px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <Container>
          <div className="py-20 md:py-24">
            <Reveal>
              <div className="text-sm text-white/70">
                AI Product Engineer / Full-Stack Engineer (AI Products)
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
                I build AI products that ship.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 max-w-2xl text-lg text-white/70">
                Production-ready AI features and full-stack systems—from UX to APIs to realtime—built with{' '}
                <span className="text-white/90">Next.js</span>, <span className="text-white/90">TypeScript</span>,{' '}
                <span className="text-white/90">Supabase</span>, and <span className="text-white/90">Rust</span>.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
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
            </Reveal>
          </div>
        </Container>
      </section>

      {/* PAGE 2 — PROOF STRIP */}
      <section data-page className="py-6">
        <Reveal>
          <ProofStrip />
        </Reveal>
      </section>

      {/* PAGE 3 — FEATURED PROJECTS */}
      <section data-page className="py-20">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <Reveal>
                <h2 className="text-2xl font-semibold">Featured case studies</h2>
              </Reveal>

              <Reveal delay={0.06}>
                <p className="mt-2 text-sm text-white/60">
                  Architecture, hard parts, and product decisions — written for recruiters and hiring managers.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <Link href="/projects" className="text-sm text-white/70 hover:text-white">
                View all →
              </Link>
            </Reveal>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((p, idx) => (
              <Reveal key={p.slug} delay={0.06 + idx * 0.05}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PAGE 4 — SKILLS / VALUE */}
      <section data-page className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <div className="text-sm text-white/60">AI Product Engineering</div>
                <h3 className="mt-2 text-xl font-semibold">Predictable AI UX, not demos.</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  <li>• Structured outputs for stable UI sections</li>
                  <li>• Guardrails + fallbacks (refusal + validation)</li>
                  <li>• Tool-style patterns for reliable flows</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <div className="text-sm text-white/60">Full-Stack & Systems</div>
                <h3 className="mt-2 text-xl font-semibold">Clean APIs + realtime + deployable stacks.</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  <li>• Next.js/React/TypeScript + Node APIs</li>
                  <li>• Supabase (Postgres/Auth/Storage) + SQL patterns</li>
                  <li>• Rust Rocket APIs + Docker workflows</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* PAGE 5 — CTA */}
      <section data-page className="py-10">
        <Reveal>
          <CTA />
        </Reveal>
      </section>
    </main>
  )
}
