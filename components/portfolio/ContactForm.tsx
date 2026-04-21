'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NICHES = ['Med Spa', 'AI/Tech Startup', 'Restaurant', 'Law Firm', 'Home Services', 'Other']

const INPUT_CLASS =
  'w-full rounded-lg border border-p-card-border bg-p-card px-4 py-2.5 text-sm text-p-fg placeholder:text-p-muted/50 focus:border-p-accent focus:outline-none focus:ring-1 focus:ring-p-accent transition-colors'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error,  setError]  = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setError('')

    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      niche:   (form.elements.namedItem('niche')   as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to send message.')
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex min-h-screen items-center justify-center px-6 pt-16">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-p-success/10">
            <CheckCircle2 className="h-8 w-8 text-p-success" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-p-fg">Message Sent</h1>
          <p className="mt-3 text-p-muted">
            Thanks for reaching out. We&apos;ll respond within 24 hours with a custom strategy.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-6 pb-24 pt-28">
      <div className="mx-auto max-w-xl">
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-p-accent">
            Let&apos;s Talk
          </p>
          <h1 className="font-heading text-4xl font-bold text-p-fg">Start a Project</h1>
          <p className="mt-3 text-p-muted">
            Tell us about your business. No generic proposals — just a real conversation
            about what you need and how we can help.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-p-muted">
                Name
              </label>
              <input name="name" required placeholder="Jane Smith" className={INPUT_CLASS} />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-p-muted">
                Email
              </label>
              <input name="email" type="email" required placeholder="jane@business.com" className={INPUT_CLASS} />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-p-muted">
              Industry
            </label>
            <select name="niche" required className={INPUT_CLASS}>
              <option value="" disabled>Select your industry</option>
              {NICHES.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-p-muted">
              Tell us about your project
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="What are you looking to build? What's the main problem you're trying to solve?"
              className={`${INPUT_CLASS} resize-none`}
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <Button type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending…' : (
              <>Send Message <Send className="h-4 w-4" /></>
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}
