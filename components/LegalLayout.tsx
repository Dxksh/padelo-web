import Link from 'next/link'

type Props = { title: string; children: React.ReactNode }

export default function LegalLayout({ title, children }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 py-4">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/" className="font-bold text-lg text-gray-900 hover:text-brand-blue transition-colors cursor-pointer">
            Padelo
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
        <div className="prose prose-gray max-w-none">{children}</div>
      </main>
      <footer className="border-t border-gray-100 py-6 text-center">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer">
          ← Back to Padelo
        </Link>
      </footer>
    </div>
  )
}
