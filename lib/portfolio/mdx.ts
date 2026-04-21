import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CASE_STUDIES_DIR = path.join(process.cwd(), 'content/case-studies')

export type Niche = 'Med Spa' | 'AI/Tech Startup' | 'Restaurant' | 'Law Firm' | 'Home Services' | 'Luxury Automotive'

export interface CaseStudyMeta {
  slug:        string
  title:       string
  client:      string
  niche:       Niche
  services:    string[]
  liveUrl?:    string
  featured:    boolean
  excerpt:     string
  results:     string[]
  coverImage?: string
  publishedAt: string
}

export interface CaseStudy extends CaseStudyMeta {
  content: string
}

function readSlug(slug: string): { meta: CaseStudyMeta; content: string } {
  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    meta: { slug, ...(data as Omit<CaseStudyMeta, 'slug'>) },
    content,
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return []
  return fs
    .readdirSync(CASE_STUDIES_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getCaseStudyMeta(slug: string): CaseStudyMeta {
  return readSlug(slug).meta
}

export function getCaseStudy(slug: string): CaseStudy {
  const { meta, content } = readSlug(slug)
  return { ...meta, content }
}

export function getAllCaseStudies(): CaseStudyMeta[] {
  return getAllSlugs()
    .map(getCaseStudyMeta)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getFeaturedCaseStudies(): CaseStudyMeta[] {
  return getAllCaseStudies().filter((cs) => cs.featured)
}

export function getCaseStudiesByNiche(niche: Niche): CaseStudyMeta[] {
  return getAllCaseStudies().filter((cs) => cs.niche === niche)
}
