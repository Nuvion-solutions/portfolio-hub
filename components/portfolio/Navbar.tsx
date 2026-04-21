'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NAV_LINKS = [
  { href: '/case-studies', label: 'Work' },
  { href: '/#services',    label: 'Services' },
  { href: '/#about',       label: 'About' },
]

export default function Navbar() {
  const [open,      setOpen]      = useState(false)
  const [scrolled,  setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        <Link href="/" className="flex items-center" aria-label="Nuvion Solutions">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portfolio/nuvion-logo.png"
            alt="Nuvion Solutions"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-p-muted transition-colors hover:text-p-fg"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <a
              href="https://www.nuvion-solutions.com/book"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex md:hidden text-p-muted hover:text-p-fg transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-p-card-border bg-p-bg/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-p-muted hover:text-p-fg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="mt-3 w-full">
              <a
                href="https://www.nuvion-solutions.com/book"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Book a Call
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
