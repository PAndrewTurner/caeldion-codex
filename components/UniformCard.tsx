import Link from 'next/link'

/**
 * The uniform record card. Identical for every entry in the archive —
 * the sash is the only permitted variation (Sash Doctrine).
 */
export default function UniformCard({
  href,
  sash,
  eyebrow,
  title,
  summary,
  image,
  imageAlt,
}: {
  href: string
  sash: string
  eyebrow: string
  title: string
  summary: string
  image?: string
  imageAlt?: string
}) {
  return (
    <Link
      href={href}
      className="group flex border bg-vault transition-colors hover:border-silver/60"
    >
      <span
        aria-hidden="true"
        className="sash w-1 shrink-0 self-stretch transition-all group-hover:w-1.5"
        style={{ ['--sash' as string]: sash }}
      />
      <span className="flex min-w-0 flex-1 flex-col">
        {image && (
          <span className="block aspect-[16/9] overflow-hidden border-b">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={imageAlt ?? ''}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </span>
        )}
        <span className="flex flex-1 flex-col p-5">
          <span className="stamp">{eyebrow}</span>
          <span className="mt-2 font-display text-lg leading-snug tracking-wide text-alabaster transition-colors group-hover:text-gold">
            {title}
          </span>
          <span className="mt-2 text-sm leading-6 text-[#9aa0ab]">
            {summary}
          </span>
        </span>
      </span>
    </Link>
  )
}
