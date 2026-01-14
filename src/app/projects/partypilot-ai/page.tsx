import Container from '@/components/Container'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'PartyPilot AI — Case Study (Realtime TypeScript Monorepo)',
  description:
    'pnpm workspace + shared contracts + Zod schemas. Realtime system with server-authoritative updates and validated boundaries.',
}

export default function PartyPilotCaseStudy() {
  return (
    <main className="py-20">
      <Container>
        <div className="max-w-3xl">
          <div className="text-sm text-white/60">Case study</div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">PartyPilot AI</h1>
          <p className="mt-3 text-white/70">
            A realtime multiplayer foundation built contract-first: shared event schemas, validated boundaries, and
            server-authoritative updates.
          </p>

          <div className="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-3">
            <div>
              <div className="text-xs text-white/50">Role</div>
              <div className="text-sm">Architecture + realtime</div>
            </div>
            <div>
              <div className="text-xs text-white/50">Stack</div>
              <div className="text-sm">TypeScript • Zod • pnpm</div>
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
                Realtime apps fail when event payloads drift, validation is inconsistent, and client state becomes the
                “source of truth.” This needed a contract-first model and server-authoritative state.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Solution</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>• Created shared contracts: types + Zod schemas used on both server and client.</li>
                <li>• Validated events at boundaries to prevent malformed payloads from breaking rooms.</li>
                <li>• Kept the server authoritative for game state transitions.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Architecture</h2>
              <pre className="mt-3 overflow-auto rounded-2xl border border-white/10 bg-black p-5 text-xs text-white/80">
{`pnpm workspace (monorepo)
  ├─ apps/web            (UI)
  ├─ apps/server         (realtime + state)
  └─ packages/shared     (types + Zod schemas)

Event flow:
client -> emit(event) -> server validates (Zod)
server -> updates state -> broadcasts snapshot/event`}
              </pre>
              <p className="mt-2 text-sm text-white/60">
                The key is “shared contracts” so server + client can’t drift.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Hard parts (senior signal)</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>
                  • <span className="text-white/90">Contract-first events:</span> one source of truth for payload shapes.
                </li>
                <li>
                  • <span className="text-white/90">Validation at boundaries:</span> reject invalid events early to keep
                  rooms stable.
                </li>
                <li>
                  • <span className="text-white/90">Server-authoritative state:</span> clients render state; server owns
                  transitions.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Key features</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>• Room creation + join flow</li>
                <li>• Realtime updates (state snapshot + event-based)</li>
                <li>• Shared schema package (types + Zod)</li>
                <li>• Predictable game loop boundaries</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Demo script (Loom-ready)</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-white/75">
                <li>Show monorepo structure and shared package.</li>
                <li>Start server + web app, create a room.</li>
                <li>Join from a second browser window and trigger actions.</li>
                <li>Show server logs validating payloads (Zod).</li>
                <li>Explain server-authoritative updates and state snapshots.</li>
              </ol>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">Stack</div>
              <div className="mt-2 text-sm text-white/70">
                TypeScript • pnpm workspaces • Zod • Realtime
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
                <li>• Add reconnection strategy + state resync</li>
                <li>• Add load testing for rooms/users</li>
                <li>• Add observability (latency + error counters)</li>
              </ul>
            </div>
          </aside>
        </section>
      </Container>

      <CTA />
    </main>
  )
}
