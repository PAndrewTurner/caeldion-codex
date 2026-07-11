import Link from 'next/link'
import { asset } from '@/lib/asset'
import DoctrineStrip from '@/components/DoctrineStrip'
import UniformCard from '@/components/UniformCard'
import { SECTIONS } from '@/lib/sections'

const CITIES = [
  { slug: 'caeldrion', name: 'Caeldrion', role: 'Imperial Capital' },
  { slug: 'highfjord', name: 'Highfjord', role: 'Fortress-Port of the North' },
  { slug: 'miada', name: 'Miada', role: 'Jewel of the Southern Coast' },
  { slug: 'the-sunlit-isles', name: 'The Sunlit Isles', role: 'The Outer Waters' },
]

export default function Home() {
  return (
    <main>
      {/* Cover plate of the compendium — the Legion at the Five Bridges */}
      <section className="relative border-b">
        <span aria-hidden="true" className="absolute inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset('/assets/divisions/iron-legion/charge.png')}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <span className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal" />
          <span className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-transparent to-charcoal/50" />
        </span>
        <div className="relative mx-auto flex max-w-archive flex-col items-center px-6 pb-28 pt-24 text-center md:pb-40 md:pt-36">
          <p className="stamp rise text-silver/80">
            Imperial Archive of Caeldrion · Rec. 0001-A · Clearance: General
          </p>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            aria-hidden="true"
            className="rise rise-1 mt-10"
          >
            <rect
              x="8.5"
              y="8.5"
              width="17"
              height="17"
              transform="rotate(45 17 17)"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
            <rect
              x="12.5"
              y="12.5"
              width="9"
              height="9"
              transform="rotate(45 17 17)"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1"
            />
            <circle cx="17" cy="17" r="2" fill="#D4AF37" />
          </svg>
          <h1 className="rise rise-1 mt-8 font-display text-4xl tracking-[0.12em] text-alabaster [text-shadow:0_2px_24px_rgba(0,0,0,0.7)] sm:text-5xl md:text-7xl">
            THE CAELDRION CODEX
          </h1>
          <p className="rise rise-2 mt-6 max-w-xl leading-7 text-[#c4c9d2] [text-shadow:0_1px_12px_rgba(0,0,0,0.8)]">
            The definitive record of the Empire of Caeldrion — its Grand Army,
            its Icons, its Arcanum, and its surveyed territories. Compiled by
            order of the Sovereign.
          </p>
          <p className="rise rise-3 mt-10 flex flex-wrap items-center justify-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-gold sm:tracking-[0.3em]">
            <span aria-hidden="true" className="hidden h-px w-10 bg-gold/50 sm:block" />
            Meritocracy · Uniformity · Economy
            <span aria-hidden="true" className="hidden h-px w-10 bg-gold/50 sm:block" />
          </p>
        </div>
        <p className="stamp absolute bottom-4 right-6 hidden text-silver/50 md:block">
          Plate HI-02/P1 — the Legion&apos;s charge, the Battle of the Five Bridges
        </p>
      </section>

      {/* The six sections of the archive */}
      <section className="mx-auto max-w-archive px-6 py-16">
        <h2 className="sr-only">Sections of the archive</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s) => (
            <UniformCard
              key={s.key}
              href={`/${s.key}`}
              sash={s.sash}
              eyebrow={`Codex/${s.ref}`}
              title={s.label}
              summary={s.blurb}
            />
          ))}
        </div>
      </section>

      {/* The Sea of Silver */}
      <section className="mx-auto max-w-archive px-6 py-16">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <p className="eyebrow">Visual doctrine · GA-00</p>
            <h2 className="mt-2 font-display text-3xl tracking-wide text-alabaster">
              The Sea of Silver
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-[#9aa0ab]">
              One steel for every soldier. Birthright is erased at issue; only
              the cloth of an operational role may vary. Eleven divisions,
              distinguished by sash alone.
            </p>
          </div>
          <Link
            href="/grand-army"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold transition-colors hover:text-alabaster"
          >
            Full order of battle →
          </Link>
        </div>
        <DoctrineStrip />
      </section>

      {/* House Caelaris */}
      <section className="border-y bg-vault/60">
        <div className="mx-auto grid max-w-archive gap-10 px-6 py-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] lg:items-center">
          <figure className="border bg-charcoal">
            <Link href="/icons/the-royal-family" className="group block">
              <span className="block max-h-[420px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset('/assets/icons/royals/family-portrait.png')}
                  alt="Official portrait of House Caelaris, the Royal Family of Caeldrion"
                  loading="lazy"
                  className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </span>
              <figcaption className="stamp border-t p-3">
                Plate IC-02/P1 — House Caelaris, official court portrait
              </figcaption>
            </Link>
          </figure>
          <div>
            <p className="eyebrow">Icons of the Empire · IC</p>
            <h2 className="mt-2 font-display text-3xl tracking-wide text-alabaster">
              The Sanctioned Exceptions
            </h2>
            <p className="mt-4 leading-7 text-[#9aa0ab]">
              Three stations alone stand outside the Silver: the Sovereign in
              Alabaster War-Steel and cobalt, the Royal Family in Alabaster
              over pure white silk, and the Paladins — heroes of the Empire,
              alabaster-clad, wearing their divisional colors at the sash.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                { href: '/icons/the-sovereign', ref: 'IC-01', label: 'The Sovereign' },
                { href: '/icons/the-royal-family', ref: 'IC-02', label: 'The Royal Family — House Caelaris' },
                { href: '/icons/the-paladins', ref: 'IC-03', label: 'The Paladins' },
              ].map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="group flex items-baseline gap-4 border-b pb-3"
                  >
                    <span className="stamp">{i.ref}</span>
                    <span className="font-display tracking-wide text-alabaster transition-colors group-hover:text-gold">
                      {i.label}
                    </span>
                    <span className="ml-auto font-mono text-[11px] text-gold opacity-0 transition-opacity group-hover:opacity-100">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The surveyed Empire */}
      <section className="mx-auto max-w-archive px-6 py-16">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <p className="eyebrow">Surveyed territories · GE</p>
            <h2 className="mt-2 font-display text-3xl tracking-wide text-alabaster">
              The Empire, Charted
            </h2>
          </div>
          <Link
            href="/geography"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold transition-colors hover:text-alabaster"
          >
            All surveyed territories →
          </Link>
        </div>
        <figure className="border bg-vault">
          <Link href="/geography" className="group block overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset('/assets/geography/map.png')}
              alt="Survey map of the Empire of Caeldrion"
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </Link>
          <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t p-4">
            <span className="stamp">
              Plate GE-00/P1 — Imperial survey, current revision
            </span>
            <span className="flex flex-wrap gap-x-6 gap-y-1">
              {CITIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/geography/${c.slug}`}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold transition-colors hover:text-alabaster"
                  title={c.role}
                >
                  {c.name}
                </Link>
              ))}
            </span>
          </figcaption>
        </figure>
      </section>
    </main>
  )
}
