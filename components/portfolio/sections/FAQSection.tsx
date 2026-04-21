'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'Do I need AI features, or can I just get a simple website?',
    a: 'Absolutely not — most of our clients start with a clean, professional website and nothing more. Simple sites are our bread and butter. You get custom design, fast load times, mobile-first build, and a site that actually converts. AI features are optional add-ons, not a requirement.',
  },
  {
    q: 'Are the sites in your portfolio real websites or just mockups?',
    a: 'Every project in the portfolio is a fully functional, live website. Real booking systems, real AI tools, real data — all working right now. Click "View Live Demo" on any project and explore it yourself. What you see is exactly what we build.',
  },
  {
    q: 'What does a website typically cost?',
    a: 'Simple professional sites (5–8 pages, contact forms, mobile-ready) typically start at $1,500–$2,500. Custom brand-forward builds with booking systems and lead generation run $2,500–$5,000. Full AI-powered systems start at $5,000. Every project gets a fixed-price quote — no hourly billing, no surprise invoices.',
  },
  {
    q: 'How long does a project take?',
    a: 'Simple sites launch in 2–3 weeks. Custom builds typically take 4–5 weeks. Larger AI-powered systems run 6–8 weeks. We will always give you a concrete timeline before you commit to anything, and we stick to it.',
  },
  {
    q: 'Do you work with businesses outside the industries shown?',
    a: 'Yes. The industries in the portfolio are our specialties, but we build for any service business — fitness studios, real estate agents, consultants, coaches, e-commerce, you name it. If you\'re unsure whether we\'re a good fit, just reach out. We\'ll be honest either way.',
  },
  {
    q: 'What do I need to provide to get started?',
    a: 'Mainly your time for a 30-minute kickoff call. If you have brand assets (logo, photos, existing copy), bring those — but if not, we handle it. We write copy, source images, and design everything from scratch if needed. You provide direction and feedback; we do the heavy lifting.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes. We offer monthly support plans starting at $200/month that include updates, backups, performance monitoring, and priority turnaround on changes. You can also hire us on a one-off basis for updates whenever you need them — no retainer required.',
  },
  {
    q: 'How is this different from building on Wix, Squarespace, or a template?',
    a: 'Templates are designed to be average by necessity — they have to work for everyone, which means they work perfectly for no one. We build from the ground up: your brand, your customer journey, your conversion goals. The result is a site that\'s faster, more unique, and built to outperform a template on every metric that matters to your business.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="border-t border-p-card-border py-24 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-p-accent">
            Common Questions
          </p>
          <h2 className="font-heading text-4xl font-bold text-p-fg md:text-5xl">
            Everything You Want to Know
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-p-muted">
            Straight answers — no fluff, no sales speak.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="overflow-hidden rounded-xl border border-p-card-border bg-p-card"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-p-accent"
              >
                <span className="font-heading text-sm font-semibold text-p-fg sm:text-base">
                  {faq.q}
                </span>
                <span className="mt-0.5 shrink-0 text-p-muted">
                  {open === i
                    ? <Minus className="h-4 w-4" />
                    : <Plus className="h-4 w-4" />
                  }
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-p-muted">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center text-sm text-p-muted"
        >
          Still have questions?{' '}
          <a href="/contact" className="font-semibold text-p-accent hover:underline">
            Ask us directly →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
