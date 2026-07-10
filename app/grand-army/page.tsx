import type { Metadata } from 'next'
import SectionIndex from '@/components/SectionIndex'
import DoctrineStrip from '@/components/DoctrineStrip'

export const metadata: Metadata = {
  title: 'The Grand Army',
  description:
    'Order of battle for the eleven divisions of the Sea of Silver, their doctrine, and their issued war-steel.',
}

export default function GrandArmyPage() {
  return (
    <SectionIndex section="grand-army">
      <div className="mt-10">
        <p className="eyebrow mb-4">The Sea of Silver — issued war-steel</p>
        <DoctrineStrip />
      </div>
    </SectionIndex>
  )
}
