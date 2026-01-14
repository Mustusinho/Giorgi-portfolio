'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    let raf = 0

    const update = () => {
      raf = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const next = max > 0 ? (window.scrollY / max) * 100 : 0
      setP(next)
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full bg-white/60"
        style={{
          width: `${p}%`,
          transition: 'width 80ms linear',
        }}
      />
    </div>
  )
}
