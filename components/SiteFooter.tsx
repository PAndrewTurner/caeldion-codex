import Link from 'next/link'
import { SECTIONS } from '@/lib/sections'

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto grid max-w-archive gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-lg tracking-[0.14em] text-alabaster">
            THE CAELDRION CODEX
          </p>
          <p className="stamp mt-3">Meritocracy · Uniformity · Economy</p>
        </div>
        <nav aria-label="Footer sections" className="grid gap-2">
          {SECTIONS.map((s) => (
            <Link
              key={s.key}
              href={`/${s.key}`}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-silver/70 transition-colors hover:text-gold"
            >
              {s.ref} — {s.label}
            </Link>
          ))}
        </nav>
        <p className="stamp leading-5 md:text-right">
          Compiled by order of the Sovereign.
          <br />
          Office of the Imperial Archivist.
          <br />
          Entry into these records is a privilege of service.
        </p>
      </div>
    </footer>
  )
}
