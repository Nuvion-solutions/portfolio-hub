'use client'

import { useSearchParams } from 'next/navigation'
import CaseStudyCard from '@/components/portfolio/CaseStudyCard'
import NicheFilter   from '@/components/portfolio/NicheFilter'
import { NICHES }    from '@/lib/portfolio/case-studies'
import type { CaseStudyMeta, Niche } from '@/lib/portfolio/mdx'

interface CaseStudiesGridProps {
  studies: CaseStudyMeta[]
}

export default function CaseStudiesGrid({ studies }: CaseStudiesGridProps) {
  const searchParams = useSearchParams()
  const validNiches  = NICHES.map((n) => n.label) as Niche[]
  const param        = searchParams.get('niche') as Niche | null
  const activeNiche: Niche | null = param && validNiches.includes(param) ? param : null

  const filtered = activeNiche ? studies.filter((s) => s.niche === activeNiche) : studies

  return (
    <>
      <NicheFilter active={activeNiche} />

      <p className="mb-6 text-xs text-p-muted">
        {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        {activeNiche ? ` in ${activeNiche}` : ''}
      </p>

      {filtered.length === 0 ? (
        <div className="flex h-64 flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-p-card-border">
          <p className="text-sm font-medium text-p-fg">No projects in {activeNiche} yet</p>
          <p className="text-xs text-p-muted">Check back soon, or browse all industries</p>
          <a href="/case-studies" className="text-xs font-semibold text-p-accent hover:underline">
            View all projects →
          </a>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      )}
    </>
  )
}
