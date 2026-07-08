import Link from 'next/link'
import { asset } from '@/lib/asset'
import DoctrineStrip from '@/components/DoctrineStrip'
import UniformCard from '@/components/UniformCard'
import { SECTIONS } from '@/lib/sections'

export default function Home() {
  return (
    <main>
      {/* Cover page of the compendium */}
      <section className="border-b">
        <div className="mx-auto flex max-w-archive flex-col items-center px-6 py-24 text-center md:py-32">
          <p className="stamp rise">
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
          <h1 className="rise rise-1 mt-8 font-display text-4xl tracking-[0.12em] text-alabaster sm:text-5xl md:text-7xl">
            THE CAELDION CODEX
          </h1>
          <p className="rise rise-2 mt-6 max-w-xl leading-7 text-[#9aa0ab]">
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
      </section>

      {/* The five sections of the archive */}
      <section className="mx-auto max-w-archive px-6 py-16">
        <h2 className="sr-only">Sections of the archive</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
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
              One steel for every soldier. Birthright is erased at issue;
              only the cloth of an operational role may vary. Six divisions,
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

      {/* Featured plate */}
      <section className="mx-auto max-w-archive px-6 py-16">
        <figure className="border bg-vault">
          <Link href="/history/battle-of-the-five-bridges" className="group block">
            <span className="block max-h-[480px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset('/assets/divisions/iron-legion/charge.png')}
                alt="The charge of the Iron Legion at the Battle of the Five Bridges"
                loading="lazy"
                className="w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </span>
            <figcaption className="flex flex-wrap items-baseline justify-between gap-2 border-t p-4">
              <span className="stamp">
                Plate HI-03/P1 — the Legion&apos;s charge at failing light, the
                Battle of the Five Bridges
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold transition-colors group-hover:text-alabaster">
                Read the certified account →
              </span>
            </figcaption>
          </Link>
        </figure>
      </section>
    </main>
  )
}
