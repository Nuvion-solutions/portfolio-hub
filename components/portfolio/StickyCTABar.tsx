'use client'

import { useState, useEffect } from 'react'
import { X, ArrowRight } from 'lucide-react'

const STORAGE_KEY = 'portfolio-cta-dismissed'

export default function StickyCTABar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return
    // Small delay so it slides in after the page settles
    const t = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(t)
  }, [])

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="complementary"
      aria-label="Start a project"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-p-accent/40 bg-p-bg/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <p className="text-sm font-medium text-p-fg">
          Ready to build something like this?
        </p>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="https://www.nuvion-solutions.com/book"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-p-accent px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-p-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-p-accent"
          >
            Book a Call
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          <button
            onClick={dismiss}
            aria-label="Dismiss"
            className="rounded-md p-1 text-p-muted transition-colors hover:text-p-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-p-accent"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
