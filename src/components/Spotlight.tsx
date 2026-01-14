'use client'

import { useEffect } from 'react'

export default function Spotlight() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // No spotlight on mobile / touch + respect reduced motion
    if (!finePointer || reduceMotion) return

    let raf = 0
    let x = Math.round(window.innerWidth * 0.55)
    let y = Math.round(window.innerHeight * 0.28)

    const setVars = () => {
      document.documentElement.style.setProperty('--mx', `${x}px`)
      document.documentElement.style.setProperty('--my', `${y}px`)
    }

    setVars()

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        setVars()
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return null
}
