'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SECTIONS } from '@/lib/sections'

export default function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b bg-charcoal/90 backdrop-blur">
      <div className="mx-auto flex max-w-archive flex-wrap items-center gap-x-8 gap-y-2 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 whitespace-nowrap"
          aria-label="The Caeldion Codex — home"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect
              x="4.5"
              y="4.5"
              width="9"
              height="9"
              transform="rotate(45 9 9)"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.25"
            />
            <circle cx="9" cy="9" r="1.5" fill="#D4AF37" />
          </svg>
          <span className="font-display text-lg tracking-[0.14em] text-alabaster">
            THE CAELDION CODEX
          </span>
        </Link>
        <span className="stamp hidden lg:inline">
          Imperial Archive · Rec. 0001-A
        </span>
        <nav
          aria-label="Archive sections"
          className="ml-auto flex flex-wrap items-center gap-x-6 gap-y-1"
        >
          {SECTIONS.map((s) => {
            const href = `/${s.key}`
            const active = pathname === href || pathname.startsWith(`${href}/`)
            return (
              <Link
                key={s.key}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  active
                    ? 'text-gold'
                    : 'text-silver/70 hover:text-alabaster'
                }`}
              >
                {s.label.replace('The ', '').replace(' of the Empire', '')}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
