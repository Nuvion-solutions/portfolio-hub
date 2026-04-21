import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { CaseStudyMeta } from '@/lib/portfolio/mdx'
import { THUMBNAILS } from '@/components/portfolio/thumbnails'

interface CaseStudyCardProps {
  study: CaseStudyMeta
}

interface NicheStyle {
  badge:       string
  icon:        string
  placeholderBg:     string
  placeholderBorder: string
  placeholderIcon:   string
  placeholderText:   string
}

const NICHE_STYLES: Record<string, NicheStyle> = {
  'Med Spa': {
    badge:             'text-pink-400 border-pink-400/20 bg-pink-400/10',
    icon:              '✦',
    placeholderBg:     'from-pink-950/40 to-p-bg',
    placeholderBorder: 'border-pink-500/20',
    placeholderIcon:   'text-pink-400',
    placeholderText:   'text-pink-400/60',
  },
  'AI/Tech Startup': {
    badge:             'text-p-accent border-p-accent/20 bg-p-accent/10',
    icon:              '⬡',
    placeholderBg:     'from-violet-950/40 to-p-bg',
    placeholderBorder: 'border-p-accent/20',
    placeholderIcon:   'text-p-accent',
    placeholderText:   'text-p-accent/60',
  },
  'Restaurant': {
    badge:             'text-amber-400 border-amber-400/20 bg-amber-400/10',
    icon:              '◈',
    placeholderBg:     'from-amber-950/40 to-p-bg',
    placeholderBorder: 'border-amber-500/20',
    placeholderIcon:   'text-amber-400',
    placeholderText:   'text-amber-400/60',
  },
  'Law Firm': {
    badge:             'text-sky-400 border-sky-400/20 bg-sky-400/10',
    icon:              '◆',
    placeholderBg:     'from-sky-950/40 to-p-bg',
    placeholderBorder: 'border-sky-500/20',
    placeholderIcon:   'text-sky-400',
    placeholderText:   'text-sky-400/60',
  },
  'Home Services': {
    badge:             'text-emerald-400 border-emerald-400/20 bg-emerald-400/10',
    icon:              '◉',
    placeholderBg:     'from-emerald-950/40 to-p-bg',
    placeholderBorder: 'border-emerald-500/20',
    placeholderIcon:   'text-emerald-400',
    placeholderText:   'text-emerald-400/60',
  },
}

const FALLBACK_STYLE: NicheStyle = {
  badge:             'text-p-accent border-p-accent/20 bg-p-accent/10',
  icon:              '⬡',
  placeholderBg:     'from-violet-950/40 to-p-bg',
  placeholderBorder: 'border-p-accent/20',
  placeholderIcon:   'text-p-accent',
  placeholderText:   'text-p-accent/60',
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  const style = NICHE_STYLES[study.niche] ?? FALLBACK_STYLE
  const Thumbnail = THUMBNAILS[study.slug]

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-p-card-border bg-p-card transition-all duration-300 hover:border-p-accent/30 hover:shadow-[0_0_32px_rgba(108,99,255,0.12)]"
    >
      {/* Cover image / thumbnail / placeholder */}
      <div className="relative h-52 overflow-hidden">
        {study.coverImage ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${study.coverImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-p-card via-transparent to-transparent opacity-60" />
          </>
        ) : Thumbnail ? (
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
            <Thumbnail />
          </div>
        ) : (
          <div
            className={`flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br ${style.placeholderBg} border-b ${style.placeholderBorder}`}
          >
            {/* Decorative rings */}
            <div className="relative flex items-center justify-center">
              <div className={`absolute h-20 w-20 rounded-full border ${style.placeholderBorder} opacity-30`} />
              <div className={`absolute h-32 w-32 rounded-full border ${style.placeholderBorder} opacity-15`} />
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border ${style.placeholderBorder} bg-p-card text-2xl ${style.placeholderIcon}`}
              >
                {style.icon}
              </div>
            </div>
            <p className={`text-xs font-medium ${style.placeholderText}`}>
              {study.niche}
            </p>
          </div>
        )}

        {/* Niche badge */}
        <div className="absolute left-4 top-4">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-medium ${style.badge}`}
          >
            {study.niche}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-p-muted">{study.client}</p>
        <h3 className="mt-1.5 font-heading text-lg font-semibold text-p-fg leading-snug group-hover:text-p-accent transition-colors">
          {study.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-p-muted line-clamp-2">
          {study.excerpt}
        </p>

        {/* Services */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {study.services.slice(0, 3).map((svc) => (
            <Badge key={svc} variant="muted" className="text-[10px]">
              {svc}
            </Badge>
          ))}
          {study.services.length > 3 && (
            <Badge variant="muted" className="text-[10px]">
              +{study.services.length - 3}
            </Badge>
          )}
        </div>

        {/* CTA */}
        <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-p-accent">
          View Case Study
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  )
}
