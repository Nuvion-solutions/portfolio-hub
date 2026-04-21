'use client'

import { motion } from 'framer-motion'

const STEPS = [
  {
    number: '01',
    title:  'Discovery',
    body:   'We learn your business, your goals, and what success looks like for you. Free 30-minute strategy call, zero commitment.',
    time:   'Week 1',
  },
  {
    number: '02',
    title:  'Design',
    body:   'Custom wireframes and full design mockups built for your brand. Nothing moves to code until you love every page.',
    time:   'Week 2',
  },
  {
    number: '03',
    title:  'Build',
    body:   'Weekly progress updates and live previews. You see the site taking shape at every stage — no black boxes.',
    time:   'Weeks 3–5',
  },
  {
    number: '04',
    title:  'Launch',
    body:   'Full QA, performance testing, SEO setup, and a hands-on handoff walkthrough. We don\'t disappear after launch.',
    time:   'Week 6',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="border-t border-p-card-border py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-p-accent">
            How It Works
          </p>
          <h2 className="font-heading text-4xl font-bold text-p-fg md:text-5xl">
            From First Call to Launch Day
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-p-muted">
            No surprises, no mystery. Here&apos;s exactly what working with us looks like — from the first conversation to your site going live.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-p-card-border to-transparent lg:block"
          />

          <div className="grid gap-8 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col"
              >
                {/* Number bubble */}
                <div className="mb-6 flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-p-accent/30 bg-p-bg lg:mb-6">
                    <span className="text-xs font-bold text-p-accent">{step.number}</span>
                  </div>
                  <span className="inline-block rounded-full border border-p-card-border px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-p-muted lg:hidden">
                    {step.time}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-p-fg">{step.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-p-muted">{step.body}</p>
                <span className="mt-4 hidden text-[10px] font-semibold uppercase tracking-wider text-p-accent/60 lg:block">
                  {step.time}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 flex flex-col items-center justify-center gap-6 rounded-2xl border border-p-card-border bg-p-card p-8 text-center sm:flex-row sm:text-left"
        >
          <div className="flex-1">
            <p className="font-heading text-lg font-semibold text-p-fg">Typical Project Timeline</p>
            <p className="mt-1 text-sm text-p-muted">We work to your schedule — not the other way around.</p>
          </div>
          <div className="flex shrink-0 flex-wrap justify-center gap-4 sm:justify-end">
            {[
              { label: 'Essential',    time: '2–3 weeks' },
              { label: 'Growth',       time: '4–5 weeks' },
              { label: 'Full System',  time: '6–8 weeks' },
            ].map((t) => (
              <div key={t.label} className="text-center">
                <p className="font-heading text-base font-bold text-p-accent">{t.time}</p>
                <p className="text-[11px] text-p-muted">{t.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
