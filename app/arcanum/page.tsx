import type { Metadata } from 'next'
import SectionIndex from '@/components/SectionIndex'

export const metadata: Metadata = {
  title: 'The Arcanum',
  description:
    'Science Division findings on the Weave, the Burn, and the runic countermeasures that keep casters alive.',
}

export default function ArcanumPage() {
  return <SectionIndex section="arcanum" />
}
