import type { Metadata } from 'next'
import SectionIndex from '@/components/SectionIndex'

export const metadata: Metadata = {
  title: 'Icons of the Empire',
  description:
    'The sanctioned exceptions to the Silver: the Sovereign, the Royal Family, and the Paladins.',
}

export default function IconsPage() {
  return <SectionIndex section="icons" />
}
