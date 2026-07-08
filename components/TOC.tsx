import type { Heading } from '@/lib/content'

export default function TOC({ headings }: { headings: Heading[] }) {
  if (headings.length === 0) return null
  return (
    <nav aria-label="On this page" className="border-l pl-5">
      <p className="stamp mb-4 text-alabaster/80">On this page</p>
      <ul className="space-y-2.5">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className="block text-[13px] leading-5 text-silver/70 transition-colors hover:text-gold"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
