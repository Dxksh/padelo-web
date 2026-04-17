import Image from 'next/image'
import StoreButtons from '@/components/StoreButtons'

export default function Hero() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Phone mockup column — bold blue geometric block behind phone */}
        <div className="relative flex justify-center order-2 md:order-1 py-8">
          {/* Solid brand-blue geometric block — bold rectangle, slightly tilted for energy */}
          <div className="absolute inset-y-4 left-1/2 -translate-x-1/2 w-56 bg-brand-blue rounded-3xl -z-10 rotate-3" />
          {/* Secondary accent: a smaller, darker offset block for depth */}
          <div className="absolute inset-y-8 left-1/2 -translate-x-[55%] w-52 bg-gray-900 rounded-3xl -z-20 -rotate-2 opacity-10" />
          <Image
            src="/phone-mockup.png"
            alt="Padelo app screenshot"
            width={280}
            height={560}
            className="relative z-10 drop-shadow-2xl"
            priority
          />
        </div>

        {/* Text + CTA column */}
        <div className="order-1 md:order-2">
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 bg-brand-light px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-blue inline-block" />
            <span className="text-sm font-semibold text-brand-blue tracking-wide uppercase">
              Padel Scoring
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Your padel game,{' '}
            <span className="text-brand-blue">tracked.</span>
          </h1>

          <p className="text-lg text-gray-500 mb-10 max-w-md leading-relaxed">
            Score matches, run Americano tournaments, and track your ELO — all in one app.
          </p>

          <StoreButtons variant="dark" />
        </div>

      </div>
    </section>
  )
}
