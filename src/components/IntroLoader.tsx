'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function IntroLoader() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // show only once per tab session
    const key = 'intro_shown_v1'
    const already = sessionStorage.getItem(key)
    if (already) return

    sessionStorage.setItem(key, '1')
    setShow(true)

    const t = setTimeout(() => setShow(false), 1100)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="text-center"
          >
            <div className="text-lg font-semibold tracking-tight">Giorgi.</div>
            <div className="mx-auto mt-2 h-px w-16 bg-white/40" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
