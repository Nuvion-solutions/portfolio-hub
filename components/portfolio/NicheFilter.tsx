'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { NICHES } from '@/lib/portfolio/case-studies'
import type { Niche } from '@/lib/portfolio/mdx'

interface NicheFilterProps {
  active: Niche | null
}

export default function NicheFilter({ active }: NicheFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function select(niche: Niche | null) {
    const params = new URLSearchParams(searchParams.toString())
    if (niche) {
      params.set('niche', niche)
    } else {
      params.delete('niche')
    }
    router.push(`/case-studies?${params.toString()}`, { scroll: false })
  }

  const base =
    'rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 border'
  const active_cls = 'bg-p-accent border-p-accent text-white shadow-[0_0_12px_rgba(108,99,255,0.3)]'
  const idle_cls   = 'border-p-card-border text-p-muted hover:border-p-fg/30 hover:text-p-fg'

  return (
    <div className="flex flex-wrap gap-2 mb-10">
      <button
        onClick={() => select(null)}
        className={`${base} ${active === null ? active_cls : idle_cls}`}
      >
        All
      </button>
      {NICHES.map((n) => (
        <button
          key={n.slug}
          onClick={() => select(n.label)}
          className={`${base} ${active === n.label ? active_cls : idle_cls}`}
        >
          {n.label}
        </button>
      ))}
    </div>
  )
}
