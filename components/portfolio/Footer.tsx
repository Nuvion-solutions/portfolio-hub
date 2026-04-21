import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-p-card-border bg-p-bg">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <Link href="/" className="font-heading text-base font-semibold text-p-fg hover:text-p-accent transition-colors">
              Nuvion Solutions
            </Link>
            <p className="mt-1 text-xs text-p-muted">
              Custom websites &amp; AI-powered digital experiences.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-p-muted">
            <Link href="/case-studies" className="hover:text-p-fg transition-colors">Work</Link>
            <Link href="/#services"    className="hover:text-p-fg transition-colors">Pricing</Link>
            <Link href="/#process"     className="hover:text-p-fg transition-colors">Process</Link>
            <Link href="/#faq"         className="hover:text-p-fg transition-colors">FAQ</Link>
            <Link href="/contact"      className="hover:text-p-fg transition-colors">Contact</Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-p-card-border pt-6 text-center text-xs text-p-muted">
          © {year} Nuvion Solutions. All rights reserved.
          <span className="mx-2 opacity-30">·</span>
          <a
            href="https://nuvion-solutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-p-accent/60 hover:text-p-accent transition-colors"
          >
            nuvion-solutions.com
          </a>
        </div>
      </div>
    </footer>
  )
}
