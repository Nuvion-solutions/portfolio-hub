import type { Metadata } from 'next'
import { notFound }       from 'next/navigation'
import Link               from 'next/link'
import { MDXRemote }      from 'next-mdx-remote/rsc'
import { ArrowLeft, ExternalLink } from 'lucide-react'
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
    const study = getCaseStudy(params.slug)
    return {
      title:       study.title,
      description: study.excerpt,
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
  const jsonLd = {
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

          {study.liveUrl && (
            <div className="mt-6">
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-p-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-p-accent/30 transition-all hover:bg-p-accent-hover hover:shadow-xl hover:shadow-p-accent/40 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p-accent"
              >
                View Live Demo Site
                <ExternalLink className="h-4 w-4" />
              </a>
              <p className="mt-3 max-w-xl text-xs italic text-p-muted">
                *This is not the client's real site — it's a demo built for our portfolio that you can interact with, but certain features like forms or AI features may not work.
              </p>
            </div>
          )}

          {/* Meta row */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-p-muted">Project</p>
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
          <p className="font-heading text-2xl font-bold text-p-fg">
            Want something like this?
          </p>
          <p className="mt-2 text-p-muted">
            We build custom web systems. Let's talk about your project.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button asChild size="lg">
              <a
                href="https://www.nuvion-solutions.com/book"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </a>
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
