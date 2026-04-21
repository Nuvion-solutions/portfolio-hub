/**
 * Single source of truth for all design tokens.
 * Portability: this file travels with the portfolio namespace into nuvion-solutions.com.
 * CSS custom properties are set in app/globals.css. Tailwind aliases live in tailwind.config.ts.
 * JS consumers (e.g. Framer Motion inline styles) import directly from here.
 */

export const colors = {
  background:   '#0A0A0A',
  card:         '#111111',
  cardBorder:   '#1F1F1F',
  accent:       '#6C63FF',
  accentHover:  '#5A52E8',
  accentMuted:  'rgba(108,99,255,0.12)',
  foreground:   '#F8F8F8',
  muted:        '#6B7280',
  mutedLight:   '#9CA3AF',
  success:      '#10B981',
  error:        '#EF4444',
} as const

export const fonts = {
  body:    'var(--font-inter)',
  heading: 'var(--font-jakarta)',
} as const

export const radii = {
  sm:  '6px',
  md:  '10px',
  lg:  '16px',
  xl:  '24px',
  full: '9999px',
} as const

export const shadows = {
  card:   '0 1px 3px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)',
  accent: '0 0 32px rgba(108,99,255,0.25)',
  glow:   '0 0 64px rgba(108,99,255,0.15)',
} as const

export const transitions = {
  fast:   'all 0.15s ease',
  base:   'all 0.25s ease',
  slow:   'all 0.4s ease',
} as const

export type ColorToken = keyof typeof colors
