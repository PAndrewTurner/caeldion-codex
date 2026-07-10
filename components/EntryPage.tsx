import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import ClassificationStamp from './ClassificationStamp'
import SidebarNav from './SidebarNav'
import TOC from './TOC'
import { mdxComponents } from './mdx-components'
import {
  entrySash,
  extractHeadings,
  getEntries,
  getEntry,
} from '@/lib/content'
import { getSection } from '@/lib/sections'
import { asset } from '@/lib/asset'

/** The uniform document template. Every lore entry in the archive uses it. */
export default function EntryPage({
  section,
  slug,
}: {
  section: string
  slug: string
}) {
  const entry = getEntry(section, slug)
  if (!entry) notFound()

  const sectionDef = getSection(section)
  const siblings = getEntries(section)
  const headings = extractHeadings(entry.body)
  const sash = entrySash(entry)

  return (
    <main className="mx-auto max-w-archive px-6 py-10">
      <ClassificationStamp
        segments={[
          { label: `Codex/${entry.meta.codexRef}` },
          { label: sectionDef.label, href: `/${section}` },
          { label: entry.meta.title },
        ]}
        clearance={entry.meta.clearance ?? 'General'}
      />

      <div className="mt-8 grid gap-10 lg:grid-cols-[230px_minmax(0,1fr)] xl:grid-cols-[230px_minmax(0,1fr)_190px]">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <SidebarNav
              heading={`${sectionDef.ref} — ${sectionDef.label}`}
              items={siblings.map((s) => ({
                href: `/${section}/${s.slug}`,
                title: s.meta.title,
                refCode: s.meta.codexRef,
                sash: entrySash(s),
                active: s.slug === slug,
              }))}
            />
          </div>
        </aside>

        <article>
          <header
            className="flex border bg-vault"
            style={{
              backgroundImage: `linear-gradient(105deg, ${sash}1F, transparent 55%)`,
            }}
          >
            <span
              aria-hidden="true"
              className="sash w-1.5 shrink-0 self-stretch"
              style={{ ['--sash' as string]: sash }}
            />
            <div className="p-7">
              <p className="eyebrow">
                {entry.meta.category} · {entry.meta.codexRef}
              </p>
              <h1 className="mt-3 font-display text-3xl leading-tight tracking-wide text-alabaster md:text-4xl">
                {entry.meta.title}
              </h1>
              <p className="mt-4 max-w-2xl leading-7 text-[#9aa0ab]">
                {entry.meta.summary}
              </p>
              {entry.meta.tags?.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tags">
                  {entry.meta.tags.map((t) => (
                    <li key={t} className="stamp border px-2 py-1">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </header>

          {entry.meta.heroImage && (
            <figure className="mt-px border bg-vault">
              <span className="flex justify-center bg-charcoal/60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(entry.meta.heroImage)}
                  alt={entry.meta.title}
                  className="max-h-[560px] w-auto max-w-full object-contain"
                />
              </span>
              <figcaption className="stamp border-t p-3">
                Plate {entry.meta.codexRef} — official archive rendering
              </figcaption>
            </figure>
          )}

          <div className="prose-archive mt-10">
            <MDXRemote
              source={entry.body}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
        </article>

        <aside className="hidden xl:block">
          <div className="sticky top-24">
            <TOC headings={headings} />
          </div>
        </aside>
      </div>
    </main>
  )
}
