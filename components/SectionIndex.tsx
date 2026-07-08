import ClassificationStamp from './ClassificationStamp'
import UniformCard from './UniformCard'
import { entrySash, getEntries } from '@/lib/content'
import { getSection } from '@/lib/sections'

/** Uniform section index: stamp, section title, and the grid of records. */
export default function SectionIndex({
  section,
  children,
}: {
  section: string
  children?: React.ReactNode
}) {
  const sectionDef = getSection(section)
  const entries = getEntries(section)

  return (
    <main className="mx-auto max-w-archive px-6 py-10">
      <ClassificationStamp
        segments={[
          { label: `Codex/${sectionDef.ref}` },
          { label: sectionDef.label },
        ]}
      />
      <header className="mt-8 max-w-3xl">
        <h1 className="font-display text-4xl tracking-wide text-alabaster">
          {sectionDef.label}
        </h1>
        <p className="mt-4 leading-7 text-[#9aa0ab]">{sectionDef.blurb}</p>
      </header>

      {children}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((e) => (
          <UniformCard
            key={e.slug}
            href={`/${section}/${e.slug}`}
            sash={entrySash(e)}
            eyebrow={`${e.meta.codexRef} · ${e.meta.category}`}
            title={e.meta.title}
            summary={e.meta.summary}
            image={e.meta.heroImage}
            imageAlt={e.meta.title}
          />
        ))}
      </div>
    </main>
  )
}
