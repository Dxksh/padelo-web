import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0D64BB',
          light: '#EAF2FF',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
      },
    },
  },
  plugins: [typography],
}

export default config
