'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   (delay: number) => ({
    opacity: 1,
    y:       0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
}

const PROOF_POINTS = [
  'Simple 5-page sites',
  'Custom brand builds',
  'Booking & lead systems',
  'AI-powered automation',
]

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      {/* Background glow orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-p-accent/8 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-violet-600/6 blur-[100px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(108,99,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-p-accent/20 bg-p-accent/10 px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-p-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-p-accent" />
          </span>
          <span className="text-xs font-medium text-p-accent">Web Design &amp; Development — Nuvion Solutions</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="font-heading text-4xl font-bold leading-tight text-p-fg sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Websites Built to{' '}
          <span className="text-gradient">Grow Your</span>
          <br />
          Business.
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-p-muted sm:text-lg md:text-xl"
        >
          From a clean 5-page site to a full AI-powered system — we design and build
          exactly what your business needs to grow online.{' '}
          <span className="text-p-fg/80">No templates. No surprises.</span>
        </motion.p>

        {/* Proof points */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.28}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {PROOF_POINTS.map((point) => (
            <span key={point} className="flex items-center gap-1.5 text-sm text-p-muted">
              <CheckCircle className="h-3.5 w-3.5 text-p-accent shrink-0" />
              {point}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.35}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg">
            <Link href="/case-studies">
              See Our Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </motion.div>

        {/* Social proof — industries */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.45}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          <span className="text-xs text-p-muted/40 mr-1">Built for:</span>
          {['Med Spas', 'Law Firms', 'Restaurants', 'Home Services', 'AI Startups', 'Automotive', '& more'].map((niche) => (
            <span key={niche} className="text-xs font-medium text-p-muted/50">
              {niche}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-p-card-border p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1 rounded-full bg-p-muted"
          />
        </div>
      </motion.div>
    </section>
  )
}
