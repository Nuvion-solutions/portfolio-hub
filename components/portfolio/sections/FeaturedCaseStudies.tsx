'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import CaseStudyCard from '@/components/portfolio/CaseStudyCard'
import { NICHES } from '@/lib/portfolio/case-studies'
import type { CaseStudyMeta, Niche } from '@/lib/portfolio/mdx'

interface FeaturedCaseStudiesProps {
  studies: CaseStudyMeta[]
}

const base     = 'rounded-full px-3 py-2 sm:px-4 sm:py-1.5 text-xs font-semibold transition-all duration-200 border'
const activeCs = 'bg-p-accent border-p-accent text-white shadow-[0_0_12px_rgba(108,99,255,0.3)]'
const idleCs   = 'border-p-card-border text-p-muted hover:border-p-fg/30 hover:text-p-fg'

function useFadeIn() {
  const ref  = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'none' } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function FeaturedCaseStudies({ studies }: FeaturedCaseStudiesProps) {
  const [activeNiche, setActiveNiche] = useState<Niche | null>(null)
  const [gridKey,     setGridKey]     = useState(0)

  const headerRef  = useFadeIn()
  const calloutRef = useFadeIn()
  const filterRef  = useFadeIn()

  const filtered = activeNiche ? studies.filter((s) => s.niche === activeNiche) : studies

  function selectNiche(n: Niche | null) {
    setActiveNiche(n)
    setGridKey((k) => k + 1)
  }

  if (studies.length === 0) return null

  return (
    <section id="work" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div
          ref={headerRef}
          className="mb-10 flex items-end justify-between"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
        >
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-p-accent">
              Selected Work
            </p>
            <h2 className="font-heading text-4xl font-bold text-p-fg md:text-5xl">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="hidden items-center gap-1 text-sm text-p-muted transition-colors hover:text-p-fg sm:flex"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Live demos callout */}
        <div
          ref={calloutRef}
          className="mb-8 flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-5 py-4"
          style={{ opacity: 0, transform: 'translateY(12px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}
        >
          <span className="relative mt-0.5 flex h-3 w-3 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
          </span>
          <div>
            <p className="text-sm font-semibold text-p-fg">
              Every project below is a live, working demo — not a mockup.
            </p>
            <p className="mt-0.5 text-sm text-p-muted">
              Real AI, real booking systems, running right now. Click any card and try it yourself.
            </p>
          </div>
        </div>

        {/* Filter buttons */}
        <div
          ref={filterRef}
          className="mb-10 flex flex-wrap gap-2"
          style={{ opacity: 0, transform: 'translateY(12px)', transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s' }}
        >
          <button
            onClick={() => selectNiche(null)}
            aria-pressed={activeNiche === null}
            className={`${base} ${activeNiche === null ? activeCs : idleCs} focus-visible:outline focus-visible:outline-2 focus-visible:outline-p-accent`}
          >
            All
          </button>
          {NICHES.map((n) => (
            <button
              key={n.slug}
              onClick={() => selectNiche(n.label)}
              aria-pressed={activeNiche === n.label}
              className={`${base} ${activeNiche === n.label ? activeCs : idleCs} focus-visible:outline focus-visible:outline-2 focus-visible:outline-p-accent`}
            >
              {n.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          key={gridKey}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          style={{ animation: 'fadeIn 0.3s ease forwards' }}
        >
          {filtered.length > 0 ? (
            filtered.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))
          ) : (
            <div className="col-span-full flex h-48 items-center justify-center rounded-xl border border-dashed border-p-card-border">
              <p className="text-sm text-p-muted">No projects in this category yet.</p>
            </div>
          )}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 text-sm text-p-muted hover:text-p-fg"
          >
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
