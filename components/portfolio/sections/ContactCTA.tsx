'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-p-accent/8 blur-[80px]" />
          </div>

          <div className="relative z-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-p-accent">
              Let's Build Something
            </p>
            <h2 className="font-heading text-4xl font-bold text-p-fg md:text-5xl">
              Ready to transform your{' '}
              <span className="text-gradient">digital presence?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-p-muted">
              Tell us about your business. We'll respond within 24 hours with a custom
              strategy — no generic proposals, no hard sell.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <a
                  href="https://www.nuvion-solutions.com/book"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
