import Link from 'next/link'

export interface SidebarItem {
  href: string
  title: string
  refCode: string
  sash: string
  active?: boolean
}

export default function SidebarNav({
  heading,
  items,
}: {
  heading: string
  items: SidebarItem[]
}) {
  return (
    <nav aria-label={heading}>
      <p className="stamp mb-4 text-alabaster/80">{heading}</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={item.active ? 'page' : undefined}
              className={`group flex items-stretch gap-3 border py-2 pr-3 transition-colors ${
                item.active
                  ? 'border-silver/40 bg-vault'
                  : 'border-transparent hover:border-silver/25 hover:bg-vault/60'
              }`}
            >
              <span
                aria-hidden="true"
                className="sash w-1 shrink-0"
                style={{ ['--sash' as string]: item.sash }}
              />
              <span className="min-w-0">
                <span className="stamp block">{item.refCode}</span>
                <span
                  className={`block truncate text-[13px] leading-5 transition-colors ${
                    item.active
                      ? 'text-gold'
                      : 'text-[#b9bec7] group-hover:text-alabaster'
                  }`}
                >
                  {item.title}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
