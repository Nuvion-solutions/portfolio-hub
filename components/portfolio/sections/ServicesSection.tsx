'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { NICHES } from '@/lib/portfolio/case-studies'

const TIERS = [
  {
    name:        'Starter',
    tagline:     'Professional online presence',
    price:       'From $1,500',
    description: 'A clean, fast, mobile-first website for businesses that need to look great online — without the complexity.',
    features: [
      'Up to 8 custom-designed pages',
      'Mobile-first, responsive build',
      'Contact & lead capture forms',
      'Google Analytics + SEO setup',
      'Social media integration',
      '2–3 week turnaround',
    ],
    cta:       'Get Started',
    highlight: false,
  },
  {
    name:        'Growth',
    tagline:     'Built to generate leads',
    price:       'From $3,500',
    description: 'A custom-built site with lead generation tools, booking systems, and local SEO that drives real, measurable business.',
    features: [
      'Everything in Starter',
      'Online booking / scheduling',
      'Lead qualification system',
      'Local SEO optimization',
      'CRM integration',
      '4–5 week turnaround',
    ],
    cta:       'Most Popular',
    highlight: true,
  },
  {
    name:        'Flagship',
    tagline:     'AI-powered business system',
    price:       'From $5,000',
    description: 'A full AI-powered digital system — automated, intelligent, and built to scale with your business.',
    features: [
      'Everything in Growth',
      'AI chatbot or recommendation tool',
      'Custom automation workflows',
      'Third-party API integrations',
      'Dashboard & reporting',
      '6–8 week turnaround',
    ],
    cta:       'Let\'s Talk',
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
            Pick the level that fits your business right now. Every tier uses the same
            custom-first approach — no templates, no shortcuts.
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
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-p-accent px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-[0_0_16px_rgba(108,99,255,0.5)]">
                    Most Popular
                  </span>
                </div>
              )}

              <p className="text-xs font-semibold uppercase tracking-wider text-p-muted">{tier.tagline}</p>
              <h3 className="mt-1 font-heading text-2xl font-bold text-p-fg">{tier.name}</h3>
              <p className="mt-1 text-2xl font-bold text-p-accent">{tier.price}</p>
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
                {tier.highlight ? tier.cta : `Start with ${tier.name}`}
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
          All projects include fixed-price quotes — no hourly billing, no surprise invoices.{' '}
          <Link href="/contact" className="text-p-accent hover:underline">
            Get a free quote →
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
