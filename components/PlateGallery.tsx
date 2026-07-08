import { asset } from '@/lib/asset'

export interface Plate {
  src: string
  caption: string
  refCode?: string
}

/** Armory plate gallery — renders issued-kit imagery with filing captions. */
export default function PlateGallery({ plates }: { plates: Plate[] }) {
  return (
    <div className="my-8 grid grid-cols-2 gap-px border bg-silver/25 md:grid-cols-3">
      {plates.map((p) => (
        <figure key={p.src} className="flex flex-col bg-charcoal">
          <span className="block aspect-[3/4] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(p.src)}
              alt={p.caption}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </span>
          <figcaption className="stamp border-t p-3">
            {p.refCode && <span className="text-gold">{p.refCode} </span>}
            {p.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
