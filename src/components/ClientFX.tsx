'use client'

import IntroLoader from '@/components/IntroLoader'
import Spotlight from '@/components/Spotlight'
import PageTransition from '@/components/PageTransition'
import ScrollProgress from '@/components/ScrollProgress'

export default function ClientFX() {
  return (
    <>
      {/* Background gradients (pure CSS, fixed, no reflow) */}
      <div className="fx-bg" aria-hidden="true" />

      {/* Optional: top progress bar */}
      <ScrollProgress />

      {/* Initial loader (if you have it) */}
      <IntroLoader />

      {/* Pointer spotlight (desktop only) */}
      <Spotlight />

      {/* Route fade transition */}
      <PageTransition />
    </>
  )
}
