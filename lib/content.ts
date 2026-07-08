import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getDivision, getSection } from './sections'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export interface EntryMeta {
  title: string
  codexRef: string
  category: string
  summary: string
  tags: string[]
  heroImage?: string
  division?: string
  sash?: string
  clearance?: string
  date?: string
}

export interface Entry {
  slug: string
  section: string
  meta: EntryMeta
  body: string
}

export function getEntries(section: string): Entry[] {
  const dir = path.join(CONTENT_DIR, section)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => readEntry(section, f))
    .sort((a, b) => a.meta.codexRef.localeCompare(b.meta.codexRef))
}

export function getEntry(section: string, slug: string): Entry | null {
  const file = path.join(CONTENT_DIR, section, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  return readEntry(section, `${slug}.mdx`)
}

function readEntry(section: string, filename: string): Entry {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, section, filename), 'utf8')
  const { data, content } = matter(raw)
  return {
    slug: filename.replace(/\.mdx$/, ''),
    section,
    meta: data as EntryMeta,
    body: content,
  }
}

/** Sash color for an entry: division color wins, then explicit sash, then section default. */
export function entrySash(entry: Entry): string {
  if (entry.meta.division) {
    const d = getDivision(entry.meta.division)
    if (d) return d.color
  }
  if (entry.meta.sash) return entry.meta.sash
  return getSection(entry.section).sash
}

export interface Heading {
  id: string
  text: string
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

/** Extract h2 headings from MDX source for the table of contents. */
export function extractHeadings(body: string): Heading[] {
  const matches = body.match(/^## (.+)$/gm) ?? []
  return matches.map((m) => {
    const text = m.replace(/^## /, '').trim()
    return { id: slugifyHeading(text), text }
  })
}
