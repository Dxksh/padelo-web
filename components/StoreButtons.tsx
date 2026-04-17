import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/store-links'

type Props = { variant: 'dark' | 'light' }

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
    <path d="M3.18 23.76c.31.17.67.19 1.01.04l12.44-6.89-2.65-2.65L3.18 23.76zm-1.1-19.54C2.03 4.5 2 4.78 2 5.08v13.84c0 .3.03.58.08.84l.03.03 7.75-7.75v-.17L2.08 4.22zm16.12 8.66l-2.53-1.4-2.93 2.93 2.93 2.93 2.54-1.41c.72-.4.72-1.65-.01-2.05zm-14.6 9.14l9.49-9.49-2.65-2.65L1.1 19.37c-.16.19-.11.5.1.65z" />
  </svg>
)

export default function StoreButtons({ variant }: Props) {
  const base = 'inline-flex items-center gap-3 rounded-xl px-5 py-3 transition-colors cursor-pointer'
  const dark = `${base} bg-gray-900 text-white hover:bg-gray-700`
  const light = `${base} bg-white text-gray-900 hover:bg-gray-100`
  const cls = variant === 'light' ? light : dark

  return (
    <div className="flex flex-wrap gap-4">
      <a href={APP_STORE_URL} className={cls}>
        <AppleIcon />
        <div>
          <div className="text-xs leading-none">Download on the</div>
          <div className="text-sm font-semibold">App Store</div>
        </div>
      </a>
      <a href={PLAY_STORE_URL} className={cls}>
        <PlayIcon />
        <div>
          <div className="text-xs leading-none">Get it on</div>
          <div className="text-sm font-semibold">Google Play</div>
        </div>
      </a>
    </div>
  )
}
