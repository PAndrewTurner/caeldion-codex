import type { Metadata } from 'next'
import SectionIndex from '@/components/SectionIndex'
import Figure from '@/components/Figure'

export const metadata: Metadata = {
  title: 'Geography',
  description:
    'Surveyed territories of the Empire: the Capital, the fjord fortress-port, the southern coast, and the Isles.',
}

export default function GeographyPage() {
  return (
    <SectionIndex section="geography">
      <div className="mt-10">
        <p className="eyebrow mb-4">Survey plate GE-00 — the Empire entire</p>
        <Figure
          src="/assets/geography/map.png"
          alt="Map of the Empire of Caeldrion"
          caption="Plate GE-00 — imperial survey, current edition. Provisional beyond the Sunlit Isles."
          aspect="natural"
        />
      </div>
    </SectionIndex>
  )
}
