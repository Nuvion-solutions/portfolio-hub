interface TechListProps {
  items: string[]
  heading?: string
}

export function TechList({ items, heading = 'Services & Technologies' }: TechListProps) {
  return (
    <div className="my-10">
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-p-muted">
        {heading}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-p-card-border bg-p-card px-4 py-1.5 text-sm text-p-fg transition-colors hover:border-p-accent/40 hover:text-p-accent"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
