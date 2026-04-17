import StoreButtons from '@/components/StoreButtons'

export default function DownloadCTA() {
  return (
    <section className="py-20 bg-brand-blue">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to play smarter?</h2>
        <p className="text-blue-100 mb-10 text-lg">Download Padelo and never lose track of a score again.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <StoreButtons variant="light" />
        </div>
      </div>
    </section>
  )
}
