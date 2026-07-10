import type { Metadata } from 'next'
import EntryPage from '@/components/EntryPage'
import { getEntries, getEntry } from '@/lib/content'

const SECTION = 'governance'

export function generateStaticParams() {
  return getEntries(SECTION).map((e) => ({ slug: e.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const entry = getEntry(SECTION, params.slug)
  return {
    title: entry?.meta.title ?? 'Record Not Found',
    description: entry?.meta.summary,
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  return <EntryPage section={SECTION} slug={params.slug} />
}
