import Link from 'next/link'
import type { Project } from '@/lib/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 transition will-change-transform hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]">
      {/* glow + shine */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-white/0 via-white/15 to-white/0" />
        <div className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-[220%]" />
      </div>

      <div className="relative z-10">
        <div className="text-lg font-semibold">{project.title}</div>
        <div className="mt-1 text-sm text-white/60">{project.subtitle}</div>

        <ul className="mt-5 space-y-2 text-sm text-white/75">
          {project.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="text-white/50">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-medium text-white/90 underline-offset-4 hover:underline"
          >
            Case study →
          </Link>
        </div>
      </div>
    </div>
  )
}
