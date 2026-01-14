import Container from '@/components/Container'

const items = [
  'AI assistant UX: structured outputs + guardrails',
  'Full-stack: Next.js + TypeScript + Supabase/Postgres',
  'Realtime: contract-first events + validation (Zod)',
  'Systems: Rust (Rocket) + Flutter + Docker workflow',
]

export default function ProofStrip() {
  return (
    <div className="mt-10">
      <Container>
        <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 md:grid-cols-2">
          {items.map((t) => (
            <div key={t} className="flex items-start gap-3 text-sm text-white/80">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/70" />
              <div>{t}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
