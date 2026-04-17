import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <span>© {new Date().getFullYear()} Padelo</span>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-gray-900 transition-colors cursor-pointer">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-900 transition-colors cursor-pointer">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  )
}
