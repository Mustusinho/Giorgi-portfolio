export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  slug: 'femin-travel' | 'partypilot-ai' | 'activeblock'
  title: string
  subtitle: string
  oneLiner: string
  bullets: string[]
  stack: string[]
  links: ProjectLink[]
  highlights: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    slug: 'femin-travel',
    title: 'Femin-Travel',
    subtitle: 'AI-first travel planning + safety UX',
    oneLiner:
      'A travel planner that turns user intent into structured itineraries with a safety-first UX and saved plans.',
    bullets: [
      'Next.js + Tailwind + Supabase + Postgres + Auth',
      'AI assistant designed for predictable, sectioned UI output',
      'Saved itineraries tied to user accounts (RLS-ready patterns)',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Postgres', 'Auth', 'AI assistant UX'],
    links: [
      { label: 'Case study', href: '/projects/femin-travel' },
      // Replace these when you have them
      { label: 'Repo (add)', href: '#' },
      { label: 'Live demo (add)', href: '#' },
      { label: 'Loom video (add)', href: '#' },
    ],
    highlights: [
      { label: 'Focus', value: 'AI UX + full-stack' },
      { label: 'Core', value: 'Structured outputs + saved plans' },
      { label: 'Backend', value: 'Supabase Postgres/Auth' },
    ],
  },
  {
    slug: 'partypilot-ai',
    title: 'PartyPilot AI',
    subtitle: 'Realtime party games (TypeScript monorepo)',
    oneLiner:
      'A realtime multiplayer system built contract-first with shared schemas and server-authoritative updates.',
    bullets: [
      'pnpm workspace + shared contracts + Zod validation',
      'Realtime game state updates with predictable event boundaries',
      'Monorepo architecture for clean separation + reuse',
    ],
    stack: ['TypeScript', 'pnpm workspaces', 'Zod', 'Realtime', 'Shared contracts', 'Monorepo'],
    links: [
      { label: 'Case study', href: '/projects/partypilot-ai' },
      { label: 'Repo (add)', href: '#' },
      { label: 'Live demo (add)', href: '#' },
      { label: 'Loom video (add)', href: '#' },
    ],
    highlights: [
      { label: 'Focus', value: 'Realtime + contracts' },
      { label: 'Core', value: 'Shared schemas + validation' },
      { label: 'Approach', value: 'Server-authoritative state' },
    ],
  },
  {
    slug: 'activeblock',
    title: 'ActiveBlock',
    subtitle: 'Rust Rocket backend + Flutter client (Dockerized)',
    oneLiner:
      'A systems-style full-stack build: Rust API boundaries, Flutter client integration, reproducible Docker dev setup.',
    bullets: [
      'Rust Rocket backend with clean API boundaries',
      'Flutter client with centralized API handling patterns',
      'Docker workflow for reproducible local environment',
    ],
    stack: ['Rust', 'Rocket', 'Flutter', 'Docker', 'API design', 'Typed responses'],
    links: [
      { label: 'Case study', href: '/projects/activeblock' },
      { label: 'Repo (add)', href: '#' },
      { label: 'Demo (add)', href: '#' },
    ],
    highlights: [
      { label: 'Focus', value: 'Systems + integration' },
      { label: 'Core', value: 'Predictable APIs + Docker' },
      { label: 'Client', value: 'Flutter app integration' },
    ],
  },
]

export function getProject(slug: Project['slug']) {
  return projects.find((p) => p.slug === slug)
}
