import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/portfolio/mdx'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio.nuvion-solutions.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs()

  const caseStudies: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url:              `${BASE}/case-studies/${slug}`,
    lastModified:     new Date(),
    changeFrequency:  'monthly',
    priority:         0.8,
  }))

  return [
    { url: BASE,                      lastModified: new Date(), changeFrequency: 'weekly',  priority: 1   },
    { url: `${BASE}/case-studies`,    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/contact`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...caseStudies,
  ]
}
