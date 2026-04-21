import type { Metadata } from 'next'
import { Suspense } from 'react'
import CaseStudyCard from '@/components/portfolio/CaseStudyCard'
import NicheFilter   from '@/components/portfolio/NicheFilter'
import { getAllCaseStudies } from '@/lib/portfolio/mdx'
import { NICHES } from '@/lib/portfolio/case-studies'
import type { Niche } from '@/lib/portfolio/mdx'

export const metadata: Metadata = {
  title:       'Case Studies',
  description: 'Browse all Nuvion Solutions projects — AI-powered web experiences across med spa, tech, restaurant, law, home services, and luxury automotive.',
  alternates:  { canonical: '/case-studies' },
}

interface PageProps {
  searchParams: { niche?: string }
}

export default function CaseStudiesPage({ searchParams }: PageProps) {
  const all          = getAllCaseStudies()
  const validNiches  = NICHES.map((n) => n.label) as Niche[]
  const activeNiche: Niche | null = validNiches.includes(searchParams.niche as Niche)
    ? (searchParams.niche as Niche)
    : null

  const studies = activeNiche ? all.filter((s) => s.niche === activeNiche) : all

  return (
    <div className="min-h-screen px-6 pt-28 pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-p-accent">
            Portfolio
          </p>
          <h1 className="font-heading text-5xl font-bold text-p-fg">All Projects</h1>
          <p className="mt-4 max-w-lg text-p-muted">
            Real demos and client work across med spa, tech, restaurant, legal, home services, and luxury automotive.
          </p>
        </div>

        {/* Niche filter */}
        <Suspense>
          <NicheFilter active={activeNiche} />
        </Suspense>

        {/* Results count */}
        <p className="mb-6 text-xs text-p-muted">
          {studies.length} project{studies.length !== 1 ? 's' : ''}{activeNiche ? ` in ${activeNiche}` : ''}
        </p>

        {studies.length === 0 ? (
          <div className="flex h-64 flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-p-card-border">
            <p className="text-sm font-medium text-p-fg">No projects in {activeNiche} yet</p>
            <p className="text-xs text-p-muted">Check back soon, or browse all industries</p>
            <a
              href="/case-studies"
              className="text-xs font-semibold text-p-accent hover:underline"
            >
              View all projects →
            </a>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
