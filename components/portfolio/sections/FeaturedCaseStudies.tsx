'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import CaseStudyCard from '@/components/portfolio/CaseStudyCard'
import { NICHES } from '@/lib/portfolio/case-studies'
import type { CaseStudyMeta, Niche } from '@/lib/portfolio/mdx'

interface FeaturedCaseStudiesProps {
  studies: CaseStudyMeta[]
}

const base     = 'rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 border'
const activeCs = 'bg-p-accent border-p-accent text-white shadow-[0_0_12px_rgba(108,99,255,0.3)]'
const idleCs   = 'border-p-card-border text-p-muted hover:border-p-fg/30 hover:text-p-fg'

export default function FeaturedCaseStudies({ studies }: FeaturedCaseStudiesProps) {
  const [activeNiche, setActiveNiche] = useState<Niche | null>(null)

  const filtered = activeNiche
    ? studies.filter((s) => s.niche === activeNiche)
    : studies

  if (studies.length === 0) return null

  return (
    <section id="work" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-end justify-between"
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
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 flex flex-wrap gap-2"
        >
          <button
            onClick={() => setActiveNiche(null)}
            className={`${base} ${activeNiche === null ? activeCs : idleCs}`}
          >
            All
          </button>
          {NICHES.map((n) => (
            <button
              key={n.slug}
              onClick={() => setActiveNiche(n.label)}
              className={`${base} ${activeNiche === n.label ? activeCs : idleCs}`}
            >
              {n.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNiche ?? 'all'}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.length > 0 ? (
              filtered.map((study, i) => (
                <motion.div
                  key={study.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <CaseStudyCard study={study} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full flex h-48 items-center justify-center rounded-xl border border-dashed border-p-card-border">
                <p className="text-sm text-p-muted">No projects in this category yet.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

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
