import Image from 'next/image'

interface GridImage {
  src:   string
  alt:   string
  caption?: string
}

interface ImageGridProps {
  images:  GridImage[]
  caption?: string
}

export function ImageGrid({ images, caption }: ImageGridProps) {
  const cols =
    images.length === 1
      ? 'grid-cols-1'
      : images.length === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-3'

  return (
    <figure className="my-10">
      <div className={`grid gap-3 ${cols}`}>
        {images.map((img, i) => (
          <div key={i} className="group overflow-hidden rounded-xl border border-p-card-border">
            <div className="relative aspect-video bg-p-card">
              {img.src.startsWith('/portfolio') ? (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-p-card to-p-bg">
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-10 w-10 rounded-full bg-p-accent/10 flex items-center justify-center">
                      <span className="text-p-accent text-lg">⬡</span>
                    </div>
                    <p className="text-xs text-p-muted">{img.alt}</p>
                    <p className="text-[10px] text-p-muted/50 mt-1">Screenshot placeholder</p>
                  </div>
                </div>
              ) : (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </div>
            {img.caption && (
              <p className="bg-p-card px-4 py-2 text-xs text-p-muted">{img.caption}</p>
            )}
          </div>
        ))}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-p-muted">{caption}</figcaption>
      )}
    </figure>
  )
}
