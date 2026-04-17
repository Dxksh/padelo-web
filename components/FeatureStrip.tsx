'use client'

import { motion } from 'framer-motion'
import { ClipboardList, Trophy, BarChart2, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Feature = { Icon: LucideIcon; title: string; desc: string }

const features: Feature[] = [
  { Icon: ClipboardList, title: 'Track every match', desc: 'Set-by-set scoring, live and historic.' },
  { Icon: Trophy, title: 'Americano tournaments', desc: 'Circle-method round rotation, no spreadsheets.' },
  { Icon: BarChart2, title: 'ELO & stats', desc: 'Win rates, streaks, and points across all formats.' },
  { Icon: Users, title: 'Groups & friends', desc: 'Organise your padel club in one place.' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function FeatureStrip() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-200"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {features.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className="px-8 py-8 group border-t-4 border-t-transparent hover:border-t-brand-blue transition-colors duration-200"
            >
              <Icon className="w-8 h-8 text-brand-blue mb-4" aria-hidden="true" strokeWidth={1.75} />
              <h3 className="text-base font-bold text-gray-900 mb-1 leading-snug">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
