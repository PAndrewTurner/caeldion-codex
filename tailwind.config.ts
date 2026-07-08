import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#16181D',
        vault: '#1F232B',
        alabaster: '#F8F9FA',
        silver: '#C0C0C0',
        gold: '#D4AF37',
        cobalt: '#0047AB',
        crimson: '#8B0000',
        ranger: '#2E8B57',
        iron: '#1A1A1A',
        imperial: '#4B0082',
        craftsman: '#3E6E70',
      },
      fontFamily: {
        display: ['var(--font-marcellus)', 'Georgia', 'serif'],
        body: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
      },
      borderColor: {
        DEFAULT: 'rgba(192, 192, 192, 0.25)',
      },
      maxWidth: {
        archive: '80rem',
      },
    },
  },
  plugins: [],
}
export default config
