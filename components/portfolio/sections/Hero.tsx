'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   (delay: number) => ({
    opacity: 1,
    y:       0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      {/* Background glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-p-accent/8 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-violet-600/6 blur-[100px]" />
        {/* Subtle grid */}
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
          <Sparkles className="h-3.5 w-3.5 text-p-accent" />
          <span className="text-xs font-medium text-p-accent">AI-Powered Digital Experiences</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="font-heading text-5xl font-bold leading-tight text-p-fg md:text-6xl lg:text-7xl"
        >
          AI Automation.{' '}
          <span className="text-gradient">Proven Across</span>
          <br />
          5 Industries.
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-p-muted md:text-xl"
        >
          Explore fully functional demo sites — each one a real AI-powered business website
          built by Nuvion Solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg">
            <Link href="/case-studies">
              View Our Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 opacity-50"
        >
          {['Med Spa', 'AI Startup', 'Restaurant', 'Law Firm', 'Home Services', 'Luxury Automotive'].map((niche) => (
            <span key={niche} className="text-xs font-medium text-p-muted">
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
