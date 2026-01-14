'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function IntroOverlay() {
  const [show, setShow] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const key = 'gio_intro_seen_v1'
      const seen = sessionStorage.getItem(key)
      if (!seen) {
        setShow(true)
        sessionStorage.setItem(key, '1')
        const t = setTimeout(() => setShow(false), 1300)
        return () => clearTimeout(t)
      }
    } catch {
      // if storage blocked, just don't show
    }
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-10 rounded-full bg-white/10 blur-3xl"
              initial={{ scale: 0.9, opacity: 0.2 }}
              animate={{ scale: 1.05, opacity: 0.35 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
              className="relative rounded-2xl border border-white/10 bg-white/5 px-8 py-7 text-center backdrop-blur"
              initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -10, opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-sm text-white/70">Giorgi — AI Product Engineer</div>
              <div className="mt-2 text-2xl font-semibold tracking-tight">
                Shipping AI products.
              </div>

              <motion.div
                className="mt-5 h-[2px] w-64 overflow-hidden rounded bg-white/10"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="h-full bg-white/70"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
