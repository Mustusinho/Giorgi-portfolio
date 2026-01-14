'use client'

import { useEffect } from 'react'

export default function ScrollPager() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const hover = window.matchMedia('(hover: hover)').matches

    // ✅ Disable pager on touch/mobile + respect reduced motion
    if (reduceMotion || !finePointer || !hover) return

    const getPages = () =>
      Array.from(document.querySelectorAll<HTMLElement>('[data-page]'))

    let pages = getPages()
    let index = 0

    // track current section via intersection (more reliable than manual index)
    const io = new IntersectionObserver(
      (entries) => {
        // pick the most visible one
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (!visible?.target) return
        const i = pages.indexOf(visible.target as HTMLElement)
        if (i >= 0) index = i
      },
      { threshold: [0.35, 0.5, 0.65] }
    )

    pages.forEach((p) => io.observe(p))

    // small wheel accumulator so trackpads don't instantly "page"
    let accum = 0
    let accumTimer: number | null = null
    let locked = false

    const EDGE = 72 // px from top/bottom that counts as "at edge"
    const WHEEL_THRESHOLD = 90 // how much wheel before paging

    const atEdgeForDirection = (dir: 1 | -1) => {
      const current = pages[index]
      if (!current) return true
      const rect = current.getBoundingClientRect()

      // If section taller than viewport:
      // - going down: only page when near bottom
      // - going up: only page when near top
      if (rect.height > window.innerHeight + 4) {
        if (dir === 1) return rect.bottom <= window.innerHeight + EDGE
        return rect.top >= -EDGE
      }

      // If section fits in viewport, allow paging
      return true
    }

    const go = (next: number) => {
      const el = pages[next]
      if (!el) return
      locked = true
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.setTimeout(() => {
        locked = false
      }, 650)
    }

    const onWheel = (e: WheelEvent) => {
      pages = getPages()
      if (pages.length === 0) return
      index = Math.min(index, pages.length - 1)

      // if you're on last page and scrolling down -> allow normal scroll (footer/spacer)
      if (index === pages.length - 1 && e.deltaY > 0) return
      // if you're on first page and scrolling up -> allow normal scroll
      if (index === 0 && e.deltaY < 0) return

      if (locked) {
        e.preventDefault()
        return
      }

      // accumulate wheel to avoid micro wheel triggering paging
      accum += e.deltaY

      if (accumTimer) window.clearTimeout(accumTimer)
      accumTimer = window.setTimeout(() => {
        accum = 0
        accumTimer = null
      }, 140)

      const dir: 1 | -1 = accum > 0 ? 1 : -1
      if (Math.abs(accum) < WHEEL_THRESHOLD) return

      // only page if user is at top/bottom edge of current section
      if (!atEdgeForDirection(dir)) return

      e.preventDefault()
      accum = 0

      const next = index + dir
      if (next < 0 || next >= pages.length) return
      go(next)
    }

    window.addEventListener('wheel', onWheel, { passive: false })

    // refresh pages list on resize (layout changes)
    const onResize = () => {
      pages = getPages()
    }
    window.addEventListener('resize', onResize)

    return () => {
      io.disconnect()
      window.removeEventListener('wheel', onWheel as any)
      window.removeEventListener('resize', onResize)
      if (accumTimer) window.clearTimeout(accumTimer)
    }
  }, [])

  return null
}
