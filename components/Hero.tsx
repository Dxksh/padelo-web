'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import StoreButtons from '@/components/StoreButtons'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section className="bg-white py-16 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[3fr_2fr] gap-8 items-center">

        {/* Phone mockup column — oversized, bleeds out of grid for depth */}
        <motion.div
          className="order-2 md:order-1 md:-ml-16 md:-my-24"
          initial={{ opacity: 0, x: -40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/phone-mockup.png"
            alt="Padelo app screenshots"
            width={1920}
            height={1920}
            className="w-full"
            priority
          />
        </motion.div>

        {/* Text + CTA column */}
        <div className="order-1 md:order-2">
          <motion.div
            className="inline-flex items-center gap-2 bg-brand-light px-4 py-1.5 rounded-full mb-6"
            {...fadeUp(0.1)}
          >
            <span className="w-2 h-2 rounded-full bg-brand-blue inline-block" />
            <span className="text-sm font-semibold text-brand-blue tracking-wide uppercase">
              Padel Scoring
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6"
            {...fadeUp(0.2)}
          >
            Your padel game,{' '}
            <span className="text-brand-blue">tracked.</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-500 mb-10 max-w-md leading-relaxed"
            {...fadeUp(0.3)}
          >
            Score matches, run Americano tournaments, and track your ELO — all in one app.
          </motion.p>

          <motion.div {...fadeUp(0.4)}>
            <StoreButtons variant="dark" />
          </motion.div>
        </div>

      </div>
    </section>
  )
}
