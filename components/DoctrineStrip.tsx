import Link from 'next/link'
import { asset } from '@/lib/asset'
import { DIVISIONS } from '@/lib/sections'

const PORTRAITS: Record<string, string> = {
  'purple-guard': '/assets/divisions/purple-guard/full-plate.png',
  'cobalt-ascendancy': '/assets/divisions/cobalt-ascendancy/full-plate.png',
  'iron-legion': '/assets/divisions/iron-legion/full-plate.png',
  'crimson-vanguard': '/assets/divisions/crimson-vanguard/full-plate.png',
  'green-rangers': '/assets/divisions/green-rangers/full-plate.png',
  craftsman: '/assets/divisions/craftsman/engineer-plate.png',
}

/**
 * The Sea of Silver, made navigable: six identical soldier records,
 * distinguished only by the cloth they are issued.
 */
export default function DoctrineStrip() {
  return (
    <div className="grid grid-cols-2 gap-px border bg-silver/25 sm:grid-cols-3 lg:grid-cols-6">
      {DIVISIONS.map((d) => (
        <Link
          key={d.slug}
          href={`/grand-army/${d.slug}`}
          className="group flex flex-col bg-charcoal"
        >
          <span className="block aspect-[3/4] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(PORTRAITS[d.slug])}
              alt={`${d.name} issued war-steel`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            />
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
      ))}
    </div>
  )
}
