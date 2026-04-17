import Link from 'next/link'

const LogoIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8" aria-hidden="true">
    <circle cx="16" cy="16" r="15" fill="#0D64BB" />
    <circle cx="16" cy="16" r="8" stroke="white" strokeWidth="2" fill="none" />
    <line x1="16" y1="1" x2="16" y2="31" stroke="white" strokeWidth="2" />
    <line x1="1" y1="16" x2="31" y2="16" stroke="white" strokeWidth="2" />
  </svg>
)

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <LogoIcon />
          <span className="font-bold text-lg text-gray-900">Padelo</span>
        </Link>
      </div>
    </nav>
  )
}
