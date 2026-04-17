const steps = [
  { number: '01', title: 'Create', desc: 'Start a match or tournament in seconds.' },
  { number: '02', title: 'Score', desc: 'Enter points live as you play.' },
  { number: '03', title: 'Stats', desc: 'Your history and rankings update automatically.' },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(({ number, title, desc }) => (
            <div key={title} className="relative">
              <span
                className="absolute -top-4 left-0 text-8xl font-black leading-none select-none text-brand-blue/10"
                aria-hidden="true"
              >
                {number}
              </span>
              <div className="relative pt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
