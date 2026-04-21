import type { Niche } from './mdx'

export interface NicheConfig {
  label:       Niche
  slug:        string
  description: string
  icon:        string
}

export const NICHES: NicheConfig[] = [
  {
    label:       'Med Spa',
    slug:        'med-spa',
    description: 'AI skin analysis, smart booking, luxury digital experiences for aesthetic clinics.',
    icon:        '✦',
  },
  {
    label:       'AI/Tech Startup',
    slug:        'ai-tech-startup',
    description: 'SaaS landing pages, product demos, and investor-ready web presence.',
    icon:        '⬡',
  },
  {
    label:       'Restaurant',
    slug:        'restaurant',
    description: 'Online ordering, reservation systems, and brand-forward hospitality sites.',
    icon:        '◈',
  },
  {
    label:       'Law Firm',
    slug:        'law-firm',
    description: 'Authority-building sites with lead capture, intake forms, and local SEO.',
    icon:        '◆',
  },
  {
    label:       'Home Services',
    slug:        'home-services',
    description: 'Quote calculators, review showcases, and service-area landing pages.',
    icon:        '◉',
  },
  {
    label:       'Luxury Automotive',
    slug:        'luxury-automotive',
    description: 'Cinematic dealer experiences with AI configurators, valuation tools, and global acquisition concierge.',
    icon:        '▲',
  },
]

export const SERVICES = [
  'Custom Web Design',
  'AI-Powered Features',
  'Booking Automation',
  'Lead Generation Systems',
  'SEO & Local Search',
  'CRM Integration',
  'Brand Identity',
  'Performance Optimization',
] as const

export type Service = (typeof SERVICES)[number]

export function getNicheBySlug(slug: string): NicheConfig | undefined {
  return NICHES.find((n) => n.slug === slug)
}
