interface QuoteCardProps {
  quote:  string
  name:   string
  role?:  string
}

export function QuoteCard({ quote, name, role }: QuoteCardProps) {
  return (
    <blockquote className="my-10 rounded-xl border border-p-card-border bg-p-card p-6 md:p-8">
      <div className="mb-5 text-4xl font-heading text-p-accent/40 leading-none select-none">"</div>
      <p className="text-[17px] italic leading-relaxed text-p-fg/90 md:text-lg">{quote}</p>
      <footer className="mt-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-p-card-border" />
        <div className="text-right">
          <p className="text-sm font-semibold text-p-fg">{name}</p>
          {role && <p className="text-xs text-p-muted">{role}</p>}
        </div>
      </footer>
    </blockquote>
  )
}
