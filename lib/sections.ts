export type SectionKey =
  | 'grand-army'
  | 'icons'
  | 'arcanum'
  | 'geography'
  | 'history'

export interface SectionDef {
  key: SectionKey
  label: string
  ref: string
  blurb: string
  sash: string
}

export const SECTIONS: SectionDef[] = [
  {
    key: 'grand-army',
    label: 'The Grand Army',
    ref: 'GA',
    blurb:
      'Order of battle for the six divisions of the Sea of Silver, their doctrine, and their issued war-steel.',
    sash: '#C0C0C0',
  },
  {
    key: 'icons',
    label: 'Icons of the Empire',
    ref: 'IC',
    blurb:
      'The sanctioned exceptions to the Silver: the Sovereign, the Royal Family, and the Paladins.',
    sash: '#F8F9FA',
  },
  {
    key: 'arcanum',
    label: 'The Arcanum',
    ref: 'AR',
    blurb:
      'Science Division findings on the Weave, the Burn, and the runic countermeasures that keep casters alive.',
    sash: '#D4AF37',
  },
  {
    key: 'geography',
    label: 'Geography',
    ref: 'GE',
    blurb:
      'Surveyed territories of the Empire: the Capital, the fjord fortress-port, the southern coast, and the Isles.',
    sash: '#C0C0C0',
  },
  {
    key: 'history',
    label: 'History',
    ref: 'HI',
    blurb:
      'Certified accounts of engagements and successions, as ratified by the Office of the Imperial Archivist.',
    sash: '#C0C0C0',
  },
]

export function getSection(key: string): SectionDef {
  const s = SECTIONS.find((s) => s.key === key)
  if (!s) throw new Error(`Unknown section: ${key}`)
  return s
}

export interface DivisionDef {
  slug: string
  name: string
  epithet: string
  color: string
  ref: string
}

export const DIVISIONS: DivisionDef[] = [
  {
    slug: 'purple-guard',
    name: "Sovereign's Arcanum",
    epithet: 'The Purple Guard',
    color: '#4B0082',
    ref: 'GA-01',
  },
  {
    slug: 'cobalt-ascendancy',
    name: 'Cobalt Ascendancy',
    epithet: 'Lords of War',
    color: '#0047AB',
    ref: 'GA-02',
  },
  {
    slug: 'iron-legion',
    name: 'Iron Legion',
    epithet: 'The Anvil of the Empire',
    color: '#1A1A1A',
    ref: 'GA-03',
  },
  {
    slug: 'crimson-vanguard',
    name: 'Crimson Vanguard',
    epithet: 'First Through the Wall',
    color: '#8B0000',
    ref: 'GA-04',
  },
  {
    slug: 'green-rangers',
    name: 'Green Rangers',
    epithet: 'The Deep Watch',
    color: '#2E8B57',
    ref: 'GA-05',
  },
  {
    slug: 'craftsman',
    name: 'The Craftsman Corps',
    epithet: 'Medical · Science · Engineering',
    color: '#3E6E70',
    ref: 'GA-06',
  },
]

export function getDivision(slug: string): DivisionDef | undefined {
  return DIVISIONS.find((d) => d.slug === slug)
}
