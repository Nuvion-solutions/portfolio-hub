'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import CaseStudyCard from '@/components/portfolio/CaseStudyCard'
import type { CaseStudyMeta } from '@/lib/portfolio/mdx'

interface FeaturedCaseStudiesProps {
  studies: CaseStudyMeta[]
}

export default function FeaturedCaseStudies({ studies }: FeaturedCaseStudiesProps) {
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
          className="mb-14 flex items-end justify-between"
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

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
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
