import Container from '@/components/Container'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'Femin-Travel — Case Study (AI Travel Planning + Safety UX)',
  description:
    'Next.js + Tailwind + Supabase + AI assistant. Structured outputs for predictable UI, saved plans with Auth + Postgres.',
}

export default function FeminTravelCaseStudy() {
  return (
    <main className="py-20">
      <Container>
        <div className="max-w-3xl">
          <div className="text-sm text-white/60">Case study</div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">Femin-Travel</h1>
          <p className="mt-3 text-white/70">
            AI-first travel planning with a safety-focused UX. Designed to generate structured itineraries that render
            reliably as UI sections, and to save plans per user account.
          </p>

          <div className="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-3">
            <div>
              <div className="text-xs text-white/50">Role</div>
              <div className="text-sm">Full-stack + AI UX</div>
            </div>
            <div>
              <div className="text-xs text-white/50">Stack</div>
              <div className="text-sm">Next.js • TS • Supabase</div>
            </div>
            <div>
              <div className="text-xs text-white/50">Demo</div>
              <div className="text-sm text-white/60">Add Loom + live link</div>
            </div>
          </div>
        </div>

        <section className="mt-12 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-xl font-semibold">Problem</h2>
              <p className="mt-2 text-sm text-white/70">
                Most “AI travel planners” return unstructured text that’s hard to trust and hard to render. The product
                needed predictable UI output, saved plans, and a safety-first experience.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Solution</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>• Designed assistant outputs as structured sections (overview, day-by-day, safety, budget).</li>
                <li>• Implemented auth + persistence so plans can be saved, revisited, and refined.</li>
                <li>• Built UI patterns that guide users to safer, more specific requests.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Architecture</h2>
              <pre className="mt-3 overflow-auto rounded-2xl border border-white/10 bg-black p-5 text-xs text-white/80">
{`Next.js (App Router)
  ├─ UI: pages + components (Tailwind)
  ├─ Auth: Supabase Auth
  ├─ DB: Postgres (plans, preferences)
  ├─ AI: assistant endpoint -> structured response
  └─ RLS-ready patterns: user-owned records`}
              </pre>
              <p className="mt-2 text-sm text-white/60">
                Goal: keep the assistant output predictable so UI is stable and the DB model stays clean.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Hard parts (senior signal)</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>
                  • <span className="text-white/90">Structured AI outputs:</span> designed response shapes so the UI
                  never depends on “random paragraphs”.
                </li>
                <li>
                  • <span className="text-white/90">Persistence model:</span> saved plans with clear ownership (user_id)
                  and future RLS compatibility.
                </li>
                <li>
                  • <span className="text-white/90">UX constraints:</span> safety UX that pushes for constraints (time,
                  location, comfort level) to reduce hallucination risk.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Key features</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>• Guided prompts for itinerary creation</li>
                <li>• Structured itinerary rendering (day-by-day sections)</li>
                <li>• Save / load plans per user</li>
                <li>• Safety-first content sections</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Demo script (Loom-ready)</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-white/75">
                <li>Open app → explain goal: safe itinerary that renders as sections.</li>
                <li>Create a plan with constraints (dates, budget, location, safety preferences).</li>
                <li>Show structured output: overview → daily plan → safety tips → budget.</li>
                <li>Save plan → refresh → load saved plan.</li>
                <li>Show how guardrails handle vague requests (ask follow-up / refuse unsafe).</li>
              </ol>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">Stack</div>
              <div className="mt-2 text-sm text-white/70">
                Next.js • TypeScript • Tailwind • Supabase • Postgres • Auth
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">Links</div>
              <ul className="mt-2 space-y-2 text-sm text-white/70">
                <li>• Repo: add link</li>
                <li>• Live: add link</li>
                <li>• Loom: add link</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">Next steps</div>
              <ul className="mt-2 space-y-2 text-sm text-white/70">
                <li>• Add analytics events (plan_created, plan_saved)</li>
                <li>• Add evaluation set for itinerary quality</li>
                <li>• Add shareable public links for saved plans</li>
              </ul>
            </div>
          </aside>
        </section>
      </Container>

      <CTA />
    </main>
  )
}
