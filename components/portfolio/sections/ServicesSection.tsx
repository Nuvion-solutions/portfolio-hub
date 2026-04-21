'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { NICHES } from '@/lib/portfolio/case-studies'

const TIERS = [
  {
    name:        'Simple & Clean',
    tagline:     'Professional online presence',
    badge:       null,
    description: 'A fast, beautiful website that makes your business look credible and makes it easy for customers to reach you.',
    features: [
      'Custom-designed pages',
      'Mobile-first, responsive build',
      'Contact & lead capture forms',
      'Google Analytics + SEO setup',
      'Social media integration',
    ],
    highlight: false,
  },
  {
    name:        'Lead-Generating',
    tagline:     'Built to grow your business',
    badge:       'Most Requested',
    description: 'A conversion-focused site with booking, lead tools, and local SEO that actively brings in new customers.',
    features: [
      'Everything in Simple & Clean',
      'Online booking / scheduling',
      'Lead qualification system',
      'Local SEO optimization',
      'CRM integration',
    ],
    highlight: true,
  },
  {
    name:        'AI-Powered',
    tagline:     'Full digital system',
    badge:       null,
    description: 'An intelligent, automated platform — AI chat, smart workflows, and integrations that run your business online.',
    features: [
      'Everything in Lead-Generating',
      'AI chatbot or recommendation tool',
      'Custom automation workflows',
      'Third-party API integrations',
      'Dashboard & reporting',
    ],
    highlight: false,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="border-t border-p-card-border py-24 px-6">
      <div className="mx-auto max-w-6xl">

        {/* — Service Tiers — */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-p-accent">
            What We Build
          </p>
          <h2 className="font-heading text-4xl font-bold text-p-fg md:text-5xl">
            Simple Site or Full AI System —{' '}
            <span className="text-gradient">We Build Both</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-p-muted">
            Every project is different. We work with all budgets — from referrals and nonprofits
            to full custom builds. No pressure, no packages. Just a real conversation about what you need.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                tier.highlight
                  ? 'border-p-accent/50 bg-p-card shadow-[0_0_40px_rgba(108,99,255,0.12)]'
                  : 'border-p-card-border bg-p-card'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-p-accent px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-[0_0_16px_rgba(108,99,255,0.5)]">
                    {tier.badge}
                  </span>
                </div>
              )}

              <p className="text-xs font-semibold uppercase tracking-wider text-p-muted">{tier.tagline}</p>
              <h3 className="mt-1 font-heading text-2xl font-bold text-p-fg">{tier.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-p-muted">{tier.description}</p>

              <ul className="mt-6 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-p-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-p-accent" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                  tier.highlight
                    ? 'bg-p-accent text-white shadow-[0_0_20px_rgba(108,99,255,0.3)] hover:bg-p-accent-hover hover:shadow-[0_0_28px_rgba(108,99,255,0.45)]'
                    : 'border border-p-card-border text-p-fg hover:border-p-accent/40 hover:text-p-accent'
                } focus-visible:outline focus-visible:outline-2 focus-visible:outline-p-accent`}
              >
                Let&apos;s Talk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-center text-xs text-p-muted"
        >
          Every budget is welcome — nonprofits, referrals, startups, and everything in between.
          Pricing is always discussed personally.{' '}
          <Link href="/contact" className="text-p-accent hover:underline">
            Start the conversation →
          </Link>
        </motion.p>

        {/* — Industries — */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 mt-24 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-p-accent">
            Industries We&apos;ve Built For
          </p>
          <h2 className="font-heading text-3xl font-bold text-p-fg md:text-4xl">
            Deep Expertise. Not Generic Work.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-p-muted">
            We&apos;ve built specialized systems for these industries — and we bring that knowledge to every project.
            Don&apos;t see yours?{' '}
            <Link href="/contact" className="text-p-accent hover:underline">We build for any service business.</Link>
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {NICHES.map((niche, i) => (
            <motion.div
              key={niche.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col gap-3 rounded-xl border border-p-card-border bg-p-card p-6 transition-all hover:border-p-accent/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-p-accent/10 text-xl text-p-accent">
                {niche.icon}
              </div>
              <h3 className="font-heading text-base font-semibold text-p-fg group-hover:text-p-accent transition-colors">
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
            <p className="text-sm font-medium text-p-muted">Don&apos;t see your industry?</p>
            <p className="text-xs text-p-muted/70">We build for any service business — ask us.</p>
            <Link
              href="/contact"
              className="mt-1 text-xs font-semibold text-p-accent hover:underline"
            >
              Let&apos;s talk →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
