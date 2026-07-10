import Link from 'next/link'
import { asset } from '@/lib/asset'
import { DIVISIONS } from '@/lib/sections'

const PORTRAITS: Record<string, string> = {
  'purple-guard': '/assets/divisions/purple-guard/full-plate.png',
  'cobalt-ascendancy': '/assets/divisions/cobalt-ascendancy/full-plate.png',
  'iron-legion': '/assets/divisions/iron-legion/full-plate.png',
  'crimson-vanguard': '/assets/divisions/crimson-vanguard/full-plate.png',
  'green-rangers': '/assets/divisions/green-rangers/full-plate.png',
  'azure-covenant': '/assets/divisions/azure-covenant/war-plate.png',
  'medical-corps': '/assets/divisions/medical-corps/war-plate.png',
  'engineering-corps': '/assets/divisions/engineering-corps/war-plate.png',
  'logistics-corps': '/assets/divisions/logistics-corps/war-plate.png',
  'imperial-cavalry': '/assets/divisions/imperial-cavalry/war-plate.jpg',
  'imperial-navy': '/assets/divisions/imperial-navy/war-plate.jpg',
}

/**
 * The Sea of Silver, made navigable: identical soldier records,
 * distinguished only by the cloth they are issued.
 */
export default function DoctrineStrip() {
  return (
    <div className="grid grid-cols-2 gap-px border bg-silver/25 sm:grid-cols-3 lg:grid-cols-6">
      {DIVISIONS.map((d) => {
        const portrait = PORTRAITS[d.slug]
        return (
          <Link
            key={d.slug}
            href={`/grand-army/${d.slug}`}
            className="group flex flex-col bg-charcoal"
          >
            <span className="relative block aspect-[3/4] overflow-hidden">
              {portrait ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={asset(portrait)}
                  alt={`${d.name} issued war-steel`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
              ) : (
                <span
                  className="flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center"
                  style={{
                    background: `linear-gradient(180deg, ${d.color}22, transparent 70%)`,
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="h-10 w-10 rotate-45 border"
                    style={{ borderColor: `${d.color}AA` }}
                  />
                  <span className="stamp">
                    Plate pending — requisition filed with the Archive
                  </span>
                </span>
              )}
            </span>
            <span
              aria-hidden="true"
              className="sash h-1 w-full transition-all group-hover:h-1.5"
              style={{ ['--sash' as string]: d.color }}
            />
            <span className="flex flex-col gap-1 p-3">
              <span className="stamp">{d.ref}</span>
              <span className="font-display text-sm tracking-wide text-alabaster transition-colors group-hover:text-gold">
                {d.name}
              </span>
            </span>
          </Link>
        )
      })}
    </div>
  )
}
