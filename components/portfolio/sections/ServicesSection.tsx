'use client'

import { motion } from 'framer-motion'
import { NICHES } from '@/lib/portfolio/case-studies'

export default function ServicesSection() {
  return (
    <section id="services" className="border-t border-p-card-border py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-p-accent">
            Industries We Serve
          </p>
          <h2 className="font-heading text-4xl font-bold text-p-fg md:text-5xl">
            What We Build
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-p-muted">
            Specialized AI-powered web systems built for your specific industry — not generic
            templates, but conversion-focused experiences.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {NICHES.map((niche, i) => (
            <motion.div
              key={niche.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col gap-3 rounded-xl border border-p-card-border bg-p-card p-6 transition-all hover:border-p-accent/30 hover:bg-p-card"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-p-accent/10 text-xl text-p-accent">
                {niche.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold text-p-fg group-hover:text-p-accent transition-colors">
                {niche.label}
              </h3>
              <p className="text-sm leading-relaxed text-p-muted">{niche.description}</p>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: NICHES.length * 0.08 }}
            className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-p-card-border p-6 text-center"
          >
            <p className="text-sm font-medium text-p-muted">Don't see your industry?</p>
            <p className="text-xs text-p-muted/70">We build for any service business.</p>
            <a
              href="/contact"
              className="mt-1 text-xs font-semibold text-p-accent hover:underline"
            >
              Let's talk →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
