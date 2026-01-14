import Container from '@/components/Container'

export const metadata = {
  title: 'Resume — Giorgi (AI Product Engineer)',
  description: 'Resume and proof links for AI Product Engineer / Full-Stack Engineer (AI Products).',
}

export default function ResumePage() {
  return (
    <main className="py-20">
      <Container>
        <h1 className="text-3xl font-semibold">Resume</h1>
        <p className="mt-2 max-w-2xl text-sm text-white/60">
          Download the resume and use the case studies as primary proof.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-white/90"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download (PDF)
          </a>
          <a
            className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 hover:border-white/30 hover:text-white"
            href="mailto:giorgi.chavch@gmail.com?subject=Hiring%20%7C%20AI%20Product%20Engineer"
          >
            Email me
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <div className="text-sm font-semibold">What I build</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>• AI features with structured outputs and guardrails</li>
              <li>• Full-stack apps (Next.js + TypeScript + Supabase/Postgres)</li>
              <li>• Realtime systems with contracts + validation</li>
              <li>• Systems integrations (Rust + Flutter + Docker)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <div className="text-sm font-semibold">Best proof</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>• Femin-Travel — AI UX + saved plans</li>
              <li>• PartyPilot AI — contracts + realtime</li>
              <li>• ActiveBlock — Rust API + Flutter + Docker</li>
            </ul>
          </div>
        </div>
      </Container>
    </main>
  )
}
