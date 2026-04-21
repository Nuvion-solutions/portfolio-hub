import type { Metadata } from 'next'
import { Suspense }       from 'react'
import CaseStudiesGrid    from '@/components/portfolio/CaseStudiesGrid'
import { getAllCaseStudies } from '@/lib/portfolio/mdx'

export const metadata: Metadata = {
  title:       'Case Studies',
  description: 'Browse all Nuvion Solutions projects — custom websites and AI-powered experiences across med spa, tech, restaurant, law, home services, and luxury automotive.',
  alternates:  { canonical: '/case-studies' },
}

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies()

  return (
    <div className="min-h-screen px-6 pt-28 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-p-accent">
            Portfolio
          </p>
          <h1 className="font-heading text-3xl font-bold text-p-fg sm:text-4xl md:text-5xl">All Projects</h1>
          <p className="mt-4 max-w-lg text-p-muted">
            Real demos and client work across med spa, tech, restaurant, legal, home services, and luxury automotive.
          </p>
        </div>

        <Suspense>
          <CaseStudiesGrid studies={studies} />
        </Suspense>
      </div>
    </div>
  )
}
