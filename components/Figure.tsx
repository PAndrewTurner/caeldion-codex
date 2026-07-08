import { asset } from '@/lib/asset'

/** Single archival plate with a filing caption. */
export default function Figure({
  src,
  alt,
  caption,
  aspect = 'wide',
}: {
  src: string
  alt: string
  caption?: string
  aspect?: 'wide' | 'tall' | 'natural'
}) {
  const aspectClass =
    aspect === 'wide'
      ? 'aspect-[16/9]'
      : aspect === 'tall'
        ? 'aspect-[3/4]'
        : ''
  return (
    <figure className="my-8 border bg-vault">
      <span className={`block overflow-hidden ${aspectClass}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(src)}
          alt={alt}
          loading="lazy"
          className={`w-full object-cover ${aspectClass ? 'h-full' : 'h-auto'}`}
        />
      </span>
      {caption && (
        <figcaption className="stamp border-t p-3">{caption}</figcaption>
      )}
    </figure>
  )
}
