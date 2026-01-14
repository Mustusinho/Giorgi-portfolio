'use client'

import { useEffect } from 'react'

export default function ScrollPager() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (reduceMotion || !finePointer) return

    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-page]'))
    if (sections.length < 2) return

    let locked = false
    const lock = () => {
      locked = true
      setTimeout(() => (locked = false), 650)
    }

    const go = (dir: 1 | -1) => {
      if (locked) return
      const y = window.scrollY + 10
      const idx = sections.findIndex((s) => s.offsetTop <= y && y < s.offsetTop + s.offsetHeight)
      const next = Math.min(sections.length - 1, Math.max(0, (idx === -1 ? 0 : idx) + dir))
      sections[next]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      lock()
    }

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 18) return
      if (locked) return
      if (e.deltaY > 0) go(1)
      else go(-1)
    }

    const onKey = (e: KeyboardEvent) => {
      if (locked) return
      if (e.key === 'ArrowDown' || e.key === 'PageDown') go(1)
      if (e.key === 'ArrowUp' || e.key === 'PageUp') go(-1)
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return null
}
