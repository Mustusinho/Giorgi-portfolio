'use client'

import { useEffect } from 'react'

export default function ScrollPager() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (!finePointer) return // ✅ no forced snapping on mobile

    const pages = Array.from(document.querySelectorAll<HTMLElement>('[data-page]'))
    if (pages.length < 2) return

    let current = 0
    let locked = false

    const setCurrentFromScroll = () => {
      const mid = window.innerHeight * 0.55
      let bestIdx = 0
      let bestDist = Infinity
      pages.forEach((el, idx) => {
        const r = el.getBoundingClientRect()
        const center = r.top + r.height / 2
        const dist = Math.abs(center - mid)
        if (dist < bestDist) {
          bestDist = dist
          bestIdx = idx
        }
      })
      current = bestIdx
    }

    setCurrentFromScroll()

    const go = (dir: 1 | -1) => {
      const next = Math.max(0, Math.min(pages.length - 1, current + dir))
      if (next === current) return
      locked = true
      current = next
      pages[next].scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.setTimeout(() => (locked = false), 650)
    }

    const onWheel = (e: WheelEvent) => {
      if (locked) return
      if (Math.abs(e.deltaY) < 18) return
      e.preventDefault()
      go(e.deltaY > 0 ? 1 : -1)
    }

    const onKey = (e: KeyboardEvent) => {
      if (locked) return
      if (e.key === 'PageDown' || e.key === 'ArrowDown') go(1)
      if (e.key === 'PageUp' || e.key === 'ArrowUp') go(-1)
    }

    const onScroll = () => {
      if (locked) return
      setCurrentFromScroll()
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKey)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('wheel', onWheel as any)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return null
}
