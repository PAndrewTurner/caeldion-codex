export type SectionKey =
  | 'grand-army'
  | 'icons'
  | 'arcanum'
  | 'governance'
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
      'Order of battle for the eleven divisions of the Sea of Silver, their doctrine, and their issued war-steel.',
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
    key: 'governance',
    label: 'Governance',
    ref: 'GV',
    blurb:
      'The constitutional order of the Empire: the Crown, the Senate, the Imperial Command Council, the Inner Sanctum, and the Eye.',
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
    slug: 'azure-covenant',
    name: 'The Azure Covenant',
    epithet: 'The Living Battery',
    color: '#4682B4',
    ref: 'GA-06',
  },
  {
    slug: 'medical-corps',
    name: 'The Medical Corps',
    epithet: 'The White Hand',
    color: '#EDE6D6',
    ref: 'GA-07',
  },
  {
    slug: 'engineering-corps',
    name: 'The Engineering Corps',
    epithet: 'The Knit',
    color: '#D97706',
    ref: 'GA-08',
  },
  {
    slug: 'logistics-corps',
    name: 'The Logistics Corps',
    epithet: 'The Lifeline',
    color: '#C2A878',
    ref: 'GA-09',
  },
  {
    slug: 'imperial-cavalry',
    name: 'The Imperial Cavalry',
    epithet: 'The Mounted Arm',
    color: '#D4AF37',
    ref: 'GA-10',
  },
  {
    slug: 'imperial-navy',
    name: 'The Imperial Navy',
    epithet: 'The Silver Fleet',
    color: '#1B4F6B',
    ref: 'GA-11',
  },
]

export function getDivision(slug: string): DivisionDef | undefined {
  return DIVISIONS.find((d) => d.slug === slug)
}
