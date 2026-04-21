import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        // Portability-namespaced design tokens — single source of truth in lib/design-tokens.ts
        'p-bg':           '#0A0A0A',
        'p-card':         '#111111',
        'p-card-border':  '#1F1F1F',
        'p-accent':       '#6C63FF',
        'p-accent-hover': '#5A52E8',
        'p-accent-muted': 'rgba(108,99,255,0.12)',
        'p-fg':           '#F8F8F8',
        'p-muted':        '#6B7280',
        'p-success':      '#10B981',
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #6C63FF 0%, #8B5CF6 100%)',
        'card-gradient':   'linear-gradient(180deg, #111111 0%, #0D0D0D 100%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: {
        invert: {
          css: {
            '--tw-prose-body':    '#D1D5DB',
            '--tw-prose-headings': '#F8F8F8',
            '--tw-prose-lead':    '#9CA3AF',
            '--tw-prose-links':   '#6C63FF',
            '--tw-prose-code':    '#F8F8F8',
            '--tw-prose-hr':      '#1F1F1F',
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
