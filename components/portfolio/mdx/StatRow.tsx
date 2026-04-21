interface Stat {
  value: string
  label: string
  sub?:  string
}

interface StatRowProps {
  stats: Stat[]
}

export function StatRow({ stats }: StatRowProps) {
  return (
    <div
      className={`my-10 grid gap-4 ${
        stats.length === 2
          ? 'grid-cols-2'
          : stats.length === 3
          ? 'grid-cols-3'
          : 'grid-cols-2 md:grid-cols-4'
      }`}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex flex-col items-center rounded-xl border border-p-card-border bg-p-card px-4 py-6 text-center"
        >
          <span className="font-heading text-3xl font-bold text-gradient md:text-4xl">
            {stat.value}
          </span>
          <span className="mt-2 text-sm font-medium text-p-fg">{stat.label}</span>
          {stat.sub && (
            <span className="mt-1 text-xs text-p-muted">{stat.sub}</span>
          )}
        </div>
      ))}
    </div>
  )
}
