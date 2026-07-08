import type { Metadata } from 'next'
import SectionIndex from '@/components/SectionIndex'

export const metadata: Metadata = {
  title: 'History',
  description:
    'Certified accounts of engagements and successions, as ratified by the Office of the Imperial Archivist.',
}

export default function HistoryPage() {
  return <SectionIndex section="history" />
}
