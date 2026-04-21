import type { Metadata } from 'next'
import { notFound }       from 'next/navigation'
import Link               from 'next/link'
import { MDXRemote }      from 'next-mdx-remote/rsc'
import { ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react'
import { Badge }          from '@/components/ui/badge'
import { Button }         from '@/components/ui/button'
import { getAllSlugs, getCaseStudy } from '@/lib/portfolio/mdx'
import {
  ResultsBlock,
  TechList,
  QuoteCard,
  StatRow,
  ImageGrid,
} from '@/components/portfolio/mdx'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const study   = getCaseStudy(params.slug)
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio.nuvion-solutions.com'
    return {
      title:       study.title,
      description: study.excerpt,
      openGraph: {
        title:       study.title,
        description: study.excerpt,
        type:        'article',
        url:         `${baseUrl}/case-studies/${study.slug}`,
        images:      study.coverImage
          ? [{ url: study.coverImage, width: 1280, height: 720, alt: study.title }]
          : [{ url: `${baseUrl}/og-default.jpg`, width: 1200, height: 630, alt: 'Nuvion Solutions' }],
      },
      twitter: {
        card:        'summary_large_image',
        title:       study.title,
        description: study.excerpt,
      },
      alternates: {
        canonical: `/case-studies/${study.slug}`,
      },
    }
  } catch {
    return {}
  }
}

const MDX_COMPONENTS = { ResultsBlock, TechList, QuoteCard, StatRow, ImageGrid }

export default function CaseStudyPage({ params }: PageProps) {
  let study
  try {
    study = getCaseStudy(params.slug)
  } catch {
    notFound()
  }

  const publishedDate = new Date(study.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio.nuvion-solutions.com'
  const jsonLd: Record<string, unknown> = {
    '@context':  'https://schema.org',
    '@type':     'Article',
    headline:    study.title,
    description: study.excerpt,
    datePublished: study.publishedAt,
    url:         `${baseUrl}/case-studies/${study.slug}`,
    author: {
      '@type': 'Organization',
      name:    'Nuvion Solutions',
      url:     'https://nuvion-solutions.com',
    },
    publisher: {
      '@type': 'Organization',
      name:    'Nuvion Solutions',
      url:     'https://nuvion-solutions.com',
    },
  }

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div className="min-h-screen pb-24 pt-24">
      {/* Back nav */}
      <div className="px-6 pb-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm text-p-muted transition-colors hover:text-p-fg"
          >
            <ArrowLeft className="h-4 w-4" />
            All Projects
          </Link>
        </div>
      </div>

      {/* Hero area */}
      <div className="border-b border-p-card-border px-6 pb-12">
        <div className="mx-auto max-w-4xl">
          {/* Niche + date */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Badge>{study.niche}</Badge>
            <span className="text-xs text-p-muted">{publishedDate}</span>
          </div>

          <h1 className="font-heading text-4xl font-bold text-p-fg leading-tight md:text-5xl">
            {study.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-p-muted">{study.excerpt}</p>

          {/* Live demo CTA — primary action */}
          {study.liveUrl && (
            <div className="mt-8">
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-p-accent px-7 py-4 text-base font-semibold text-white shadow-[0_0_24px_rgba(108,99,255,0.35)] transition-all duration-200 hover:bg-p-accent-hover hover:shadow-[0_0_32px_rgba(108,99,255,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p-accent"
              >
                <ExternalLink className="h-5 w-5" />
                View Live Site
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-2 text-xs text-p-muted">Opens in a new tab</p>
            </div>
          )}

          {/* Meta row */}
          <div className="mt-8 flex flex-wrap gap-6 border-t border-p-card-border pt-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-p-muted">Client</p>
              <p className="mt-1 text-sm text-p-fg">{study.client}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-p-muted">Services</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {study.services.map((s) => (
                  <Badge key={s} variant="muted" className="text-[10px]">{s}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MDX Body */}
      <div className="px-6 pt-12">
        <div className="mx-auto max-w-4xl">
          <article className="prose prose-invert max-w-none prose-headings:font-heading prose-headings:text-p-fg prose-p:text-p-muted prose-p:leading-relaxed prose-a:text-p-accent prose-strong:text-p-fg prose-hr:border-p-card-border">
            <MDXRemote source={study.content} components={MDX_COMPONENTS} options={{ blockJS: false }} />
          </article>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 border-t border-p-card-border px-6 pt-12">
        <div className="mx-auto max-w-4xl text-center">
          {study.liveUrl && (
            <div className="mb-10 rounded-2xl border border-p-accent/20 bg-p-card p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-p-accent mb-2">Live Demo</p>
              <p className="font-heading text-2xl font-bold text-p-fg mb-2">See it in action</p>
              <p className="text-p-muted text-sm mb-6">This is a fully functional demo site — explore every feature yourself.</p>
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-p-accent px-8 py-4 text-base font-semibold text-white shadow-[0_0_24px_rgba(108,99,255,0.35)] transition-all duration-200 hover:bg-p-accent-hover hover:shadow-[0_0_32px_rgba(108,99,255,0.5)]"
              >
                <ExternalLink className="h-5 w-5" />
                Open Live Site
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          )}
          <p className="font-heading text-2xl font-bold text-p-fg">
            Want something like this?
          </p>
          <p className="mt-2 text-p-muted">
            We build custom AI-powered web systems. Let&apos;s talk about your project.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/case-studies">View More Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
