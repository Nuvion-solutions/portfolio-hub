import { CheckCircle2 } from 'lucide-react'

interface ResultsBlockProps {
  items: string[]
  heading?: string
}

export function ResultsBlock({ items, heading = 'Key Outcomes' }: ResultsBlockProps) {
  return (
    <div className="my-10 rounded-xl border border-p-accent/20 bg-p-accent-muted p-6 md:p-8">
      <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-p-accent">
        {heading}
      </p>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-p-fg">
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-p-success"
              aria-hidden
            />
            <span className="text-[15px] leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
