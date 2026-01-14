import Link from 'next/link'
import Container from '@/components/Container'

export default function CTA() {
  return (
    <div className="py-16">
      <Container>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 md:p-10">
          <div className="text-2xl font-semibold">Let’s build a product users trust.</div>
          <div className="mt-2 max-w-2xl text-sm text-white/70">
            I ship AI features with predictable UX, clean API boundaries, and systems that hold up under real usage.
            If you’re hiring for AI Product Engineer / Full-Stack (AI Products), let’s talk.
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:giorgi.chavch@gmail.com?subject=Hiring%20%7C%20AI%20Product%20Engineer"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-white/90"
            >
              Email me
            </a>
            <Link
              href="/projects"
              className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 hover:border-white/30 hover:text-white"
            >
              View projects
            </Link>
            <Link
              href="/resume"
              className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 hover:border-white/30 hover:text-white"
            >
              Resume
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
