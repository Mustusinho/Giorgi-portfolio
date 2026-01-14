import Container from '@/components/Container'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'ActiveBlock — Case Study (Rust Rocket + Flutter + Docker)',
  description:
    'Rust Rocket backend with clean API boundaries, Flutter client integration patterns, Docker workflow for reproducible dev.',
}

export default function ActiveBlockCaseStudy() {
  return (
    <main className="py-20">
      <Container>
        <div className="max-w-3xl">
          <div className="text-sm text-white/60">Case study</div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">ActiveBlock</h1>
          <p className="mt-3 text-white/70">
            A systems-oriented full-stack build: Rust Rocket API boundaries, Flutter client integration, and Docker for
            reproducible local setup.
          </p>

          <div className="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 md:grid-cols-3">
            <div>
              <div className="text-xs text-white/50">Role</div>
              <div className="text-sm">Backend + integration</div>
            </div>
            <div>
              <div className="text-xs text-white/50">Stack</div>
              <div className="text-sm">Rust • Rocket • Flutter</div>
            </div>
            <div>
              <div className="text-xs text-white/50">Demo</div>
              <div className="text-sm text-white/60">Add video link</div>
            </div>
          </div>
        </div>

        <section className="mt-12 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-xl font-semibold">Problem</h2>
              <p className="mt-2 text-sm text-white/70">
                Multi-client apps fail when API contracts are inconsistent and environments drift. This needed predictable
                API responses and reproducible dev setup across machines.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Solution</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>• Built Rust Rocket endpoints with clear request/response shapes.</li>
                <li>• Centralized Flutter API handling so errors + parsing are consistent.</li>
                <li>• Dockerized the workflow for reproducible local setup.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Architecture</h2>
              <pre className="mt-3 overflow-auto rounded-2xl border border-white/10 bg-black p-5 text-xs text-white/80">
{`Docker
  ├─ Rust Rocket API (service)
  ├─ Database (optional)
  └─ Flutter client (connects to API)

API design goals:
  - predictable error shape
  - consistent response envelopes
  - centralized client parsing + retries`}
              </pre>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Hard parts (senior signal)</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>
                  • <span className="text-white/90">Predictable API boundaries:</span> consistent envelopes and error
                  shapes for client stability.
                </li>
                <li>
                  • <span className="text-white/90">Flutter integration:</span> single client module for auth/errors/json
                  parsing to avoid duplicated bugs.
                </li>
                <li>
                  • <span className="text-white/90">Docker reproducibility:</span> one command brings up consistent local
                  environment.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Key features</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>• Rust Rocket API endpoints</li>
                <li>• Typed-ish response handling patterns</li>
                <li>• Flutter client integration</li>
                <li>• Dockerized dev workflow</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Demo script (Loom-ready)</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-white/75">
                <li>Run Docker compose and show services up.</li>
                <li>Hit a Rocket endpoint and show consistent response shape.</li>
                <li>Open Flutter app and demonstrate API call.</li>
                <li>Show how errors are handled centrally.</li>
                <li>Explain how Docker prevents “works on my machine”.</li>
              </ol>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">Stack</div>
              <div className="mt-2 text-sm text-white/70">
                Rust • Rocket • Flutter • Docker
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">Links</div>
              <ul className="mt-2 space-y-2 text-sm text-white/70">
                <li>• Repo: add link</li>
                <li>• Demo: add link</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">Next steps</div>
              <ul className="mt-2 space-y-2 text-sm text-white/70">
                <li>• Add API versioning + docs</li>
                <li>• Add structured logging</li>
                <li>• Add CI build pipeline</li>
              </ul>
            </div>
          </aside>
        </section>
      </Container>

      <CTA />
    </main>
  )
}
