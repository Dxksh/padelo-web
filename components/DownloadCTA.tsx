'use client'

import { motion } from 'framer-motion'
import StoreButtons from '@/components/StoreButtons'

export default function DownloadCTA() {
  return (
    <section className="py-20 bg-brand-blue">
      <motion.div
        className="max-w-2xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to play smarter?</h2>
        <p className="text-blue-100 mb-10 text-lg">Download Padelo and never lose track of a score again.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <StoreButtons variant="light" />
        </div>
      </motion.div>
    </section>
  )
}
