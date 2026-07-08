import Link from 'next/link'
import type { MDXComponents } from 'mdx/types'
import PlateGallery from './PlateGallery'
import Figure from './Figure'
import { slugifyHeading } from '@/lib/content'
import { asset } from '@/lib/asset'

function headingText(children: React.ReactNode): string {
  if (typeof children === 'string') return children
  if (Array.isArray(children)) return children.map(headingText).join('')
  return ''
}

export const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2 id={slugifyHeading(headingText(children))}>{children}</h2>
  ),
  a: ({ href, children }) => {
    if (href && href.startsWith('/')) {
      return <Link href={href}>{children}</Link>
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  },
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src ? asset(src) : src}
      alt={alt ?? ''}
      loading="lazy"
      className="border"
    />
  ),
  PlateGallery,
  Figure,
}
