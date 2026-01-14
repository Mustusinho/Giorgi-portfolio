import Container from '@/components/Container'

export const metadata = {
  title: 'Contact — Giorgi (AI Product Engineer)',
  description: 'Hire Giorgi for AI Product Engineer / Full-Stack Engineer (AI Products).',
}

export default function ContactPage() {
  return (
    <main className="py-20" id="hire">
      <Container>
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-2 max-w-2xl text-sm text-white/60">
          Hiring for AI Product Engineer / Full-Stack (AI Products)? I respond fast and can share demos + repos.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <div className="text-sm text-white/60">Email</div>
            <div className="mt-2 text-lg font-semibold">giorgi.chavch@gmail.com</div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-white/90"
                href="mailto:giorgi.chavch@gmail.com?subject=Hiring%20%7C%20AI%20Product%20Engineer"
              >
                Email me
              </a>
              <a
                className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 hover:border-white/30 hover:text-white"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume (PDF)
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <div className="text-sm font-semibold">What to send</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>• Role + level (AI Product Engineer / Full-Stack AI)</li>
              <li>• Tech focus (Next.js/TS/Supabase, Realtime, Rust)</li>
              <li>• Interview steps + timeline</li>
              <li>• Any take-home constraints</li>
            </ul>
            <div className="mt-6 text-sm text-white/60">
              Tip: include “case study review” in the email — I’ll reply with the best links first.
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
