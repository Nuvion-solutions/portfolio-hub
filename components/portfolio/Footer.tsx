import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-p-card-border bg-p-bg">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label="Nuvion Solutions">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portfolio/nuvion-logo.png"
                alt="Nuvion Solutions"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="mt-2 text-xs text-p-muted">
              AI-powered digital experiences that convert.
            </p>
          </div>

          <nav className="flex items-center gap-6 text-xs text-p-muted">
            <Link href="/#work"     className="hover:text-p-fg transition-colors">Work</Link>
            <Link href="/#services" className="hover:text-p-fg transition-colors">Services</Link>
            <Link href="/#about"    className="hover:text-p-fg transition-colors">About</Link>
            <a
              href="https://www.nuvion-solutions.com/book"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-p-fg transition-colors"
            >
              Book a Call
            </a>
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
