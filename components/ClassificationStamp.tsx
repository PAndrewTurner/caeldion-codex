import Link from 'next/link'

export interface StampSegment {
  label: string
  href?: string
}

export default function ClassificationStamp({
  segments,
  clearance = 'General',
}: {
  segments: StampSegment[]
  clearance?: string
}) {
  return (
    <nav aria-label="Breadcrumb" className="stamp flex flex-wrap items-center gap-x-2 gap-y-1">
      {segments.map((s, i) => (
        <span key={i} className="flex items-center gap-x-2">
          {i > 0 && <span aria-hidden="true">·</span>}
          {s.href ? (
            <Link href={s.href} className="transition-colors hover:text-gold">
              {s.label}
            </Link>
          ) : (
            <span className="text-silver/90">{s.label}</span>
          )}
        </span>
      ))}
      <span aria-hidden="true">·</span>
      <span>Clearance: {clearance}</span>
    </nav>
  )
}
