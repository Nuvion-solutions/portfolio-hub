'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NAV_LINKS = [
  { href: '/case-studies', label: 'Work'     },
  { href: '/#services',    label: 'Services' },
  { href: '/#process',     label: 'Process'  },
  { href: '/#faq',         label: 'FAQ'      },
]

export default function Navbar() {
  const [open,      setOpen]      = useState(false)
  const [scrolled,  setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-p-card-border bg-p-bg/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-7 w-7 rounded-md bg-accent-gradient flex items-center justify-center">
            <span className="text-white text-xs font-bold">N</span>
          </div>
          <span className="font-heading text-base font-semibold text-p-fg group-hover:text-p-accent transition-colors">
            Nuvion Solutions
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-p-muted transition-colors hover:text-p-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p-accent rounded-sm"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex md:hidden items-center justify-center h-11 w-11 -mr-2 text-p-muted hover:text-p-fg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p-accent rounded-sm"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-nav" className="border-t border-p-card-border bg-p-bg/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-p-muted hover:text-p-fg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="lg" className="mt-3 w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
