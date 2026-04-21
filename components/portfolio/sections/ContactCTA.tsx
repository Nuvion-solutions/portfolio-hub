'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PRICING = [
  { label: 'Simple Site',  price: 'From $1,500' },
  { label: 'Custom Build', price: 'From $3,500' },
  { label: 'AI System',    price: 'From $5,000' },
]

export default function ContactCTA() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl border border-p-accent/20 bg-p-card p-10 text-center md:p-16"
        >
          {/* Background glow */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-p-accent/8 blur-[80px]" />
          </div>

          <div className="relative z-10">
            {/* Availability indicator */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-emerald-400">Currently accepting new clients</span>
            </div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-p-accent">
              Let&apos;s Build Something
            </p>
            <h2 className="font-heading text-4xl font-bold text-p-fg md:text-5xl">
              Ready to transform your{' '}
              <span className="text-gradient">digital presence?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-p-muted">
              Tell us about your business. We&apos;ll respond within 24 hours with a custom
              strategy — no generic proposals, no hard sell.
            </p>

            {/* Pricing signal */}
            <div className="mx-auto mt-8 flex flex-wrap justify-center gap-6">
              {PRICING.map((p) => (
                <div key={p.label} className="text-center">
                  <p className="font-heading text-lg font-bold text-p-fg">{p.price}</p>
                  <p className="text-xs text-p-muted">{p.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-p-muted/60">Fixed-price quotes · No hourly billing · No surprises</p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="mailto:hello@nuvion-solutions.com">
                  hello@nuvion-solutions.com
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
