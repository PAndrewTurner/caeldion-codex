import type { Metadata } from 'next'
import SectionIndex from '@/components/SectionIndex'

export const metadata: Metadata = {
  title: 'Combat Magic',
  description:
    'The War Academy combat curriculum: how the Empire actually fights with magic — casting doctrine, hybrid weaving, the Coven Link, signature divisional arts, and the counter-magics.',
}

export default function MagicPage() {
  return <SectionIndex section="magic" />
}
