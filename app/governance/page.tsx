import type { Metadata } from 'next'
import SectionIndex from '@/components/SectionIndex'

export const metadata: Metadata = {
  title: 'Governance',
  description:
    'The constitutional order of the Empire: the Crown, the Senate, the Imperial Command Council, the Inner Sanctum, and the Eye.',
}

export default function GovernancePage() {
  return <SectionIndex section="governance" />
}
