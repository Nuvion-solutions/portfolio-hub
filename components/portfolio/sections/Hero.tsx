import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PROOF_POINTS = [
  'Simple 5-page sites',
  'Custom brand builds',
  'Booking & lead systems',
  'AI-powered automation',
]

const fadeUp = (delay: number) => ({
  animation:      `fadeUp 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s both`,
})

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      {/* Background glow orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-p-accent/8 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/3 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-violet-600/6 blur-[100px]" />
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
        <div style={fadeUp(0)} className="mb-6 inline-flex items-center gap-2 rounded-full border border-p-accent/20 bg-p-accent/10 px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-p-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-p-accent" />
          </span>
          <span className="text-xs font-medium text-p-accent">Web Design &amp; Development — Nuvion Solutions</span>
        </div>

        {/* Headline */}
        <h1 style={fadeUp(0.1)} className="font-heading text-4xl font-bold leading-tight text-p-fg sm:text-5xl md:text-6xl lg:text-7xl">
          Websites Built to{' '}
          <span className="text-gradient">Grow Your</span>
          <br />
          Business.
        </h1>

        {/* Sub */}
        <p style={fadeUp(0.2)} className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-p-muted sm:text-lg md:text-xl">
          From a clean 5-page site to a full AI-powered system — we design and build
          exactly what your business needs to grow online.{' '}
          <span className="text-p-fg/80">No templates. No surprises.</span>
        </p>

        {/* Proof points */}
        <div style={fadeUp(0.28)} className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {PROOF_POINTS.map((point) => (
            <span key={point} className="flex items-center gap-1.5 text-sm text-p-muted">
              <CheckCircle className="h-3.5 w-3.5 shrink-0 text-p-accent" />
              {point}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div style={fadeUp(0.35)} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/case-studies">
              See Our Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        {/* Social proof — industries */}
        <div style={fadeUp(0.45)} className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="mr-1 text-xs text-p-muted/40">Built for:</span>
          {['Med Spas', 'Law Firms', 'Restaurants', 'Home Services', 'AI Startups', 'Automotive', '& more'].map((niche) => (
            <span key={niche} className="text-xs font-medium text-p-muted/50">
              {niche}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{ animation: 'fadeIn 0.6s ease 1.2s both' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-p-card-border p-1.5">
          <div className="h-1.5 w-1 rounded-full bg-p-muted animate-scroll-bounce" />
        </div>
      </div>
    </section>
  )
}
