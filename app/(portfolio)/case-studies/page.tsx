import type { Metadata } from 'next'
import CaseStudyCard   from '@/components/portfolio/CaseStudyCard'
import { getAllCaseStudies } from '@/lib/portfolio/mdx'

export const metadata: Metadata = {
  title:       'Case Studies',
  description: 'Browse all Nuvion Solutions projects — AI-powered web experiences across five industries.',
}

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies()

  return (
    <div className="min-h-screen px-6 pt-28 pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-p-accent">
            Portfolio
          </p>
          <h1 className="font-heading text-5xl font-bold text-p-fg">All Projects</h1>
          <p className="mt-4 max-w-lg text-p-muted">
            Real demos and client work across med spa, tech, restaurant, legal, and home services.
          </p>
        </div>

        {studies.length === 0 ? (
          <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-p-card-border">
            <p className="text-sm text-p-muted">No case studies yet — coming soon.</p>
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
