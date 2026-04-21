'use client'

import { motion } from 'framer-motion'

const DIFFERENTIATORS = [
  {
    title: 'AI-First Approach',
    body:  'Every project ships with at least one AI-powered feature — from smart booking to personalized recommendations.',
  },
  {
    title: 'Industry-Specific Systems',
    body:  'We don\'t sell templates. Each build is architected around how your specific niche closes clients.',
  },
  {
    title: 'Performance Obsessed',
    body:  'Sub-2s load times, 95+ Lighthouse scores, and Core Web Vitals that keep Google happy.',
  },
  {
    title: 'Conversion-First Design',
    body:  'Beautiful is non-negotiable. But every design decision maps to a measurable business outcome.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-p-card-border py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-24">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-p-accent">
              About Nuvion
            </p>
            <h2 className="font-heading text-4xl font-bold text-p-fg md:text-5xl">
              We Think in Systems,{' '}
              <span className="text-gradient">Not Pages</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-p-muted">
              Nuvion Solutions is a boutique AI-web agency that builds revenue-generating digital
              systems. We specialize in industries where trust, speed, and personalization directly
              drive revenue — and we engineer every touchpoint accordingly.
            </p>
            <p className="mt-4 text-p-muted leading-relaxed">
              Our work isn't just a website. It's a booking machine, a lead qualifier, a brand
              authority engine — all in one.
            </p>
          </motion.div>

          {/* Right: differentiators */}
          <div className="grid gap-5 sm:grid-cols-2">
            {DIFFERENTIATORS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-p-card-border bg-p-card p-5"
              >
                <h3 className="font-heading text-sm font-semibold text-p-fg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-p-muted">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
