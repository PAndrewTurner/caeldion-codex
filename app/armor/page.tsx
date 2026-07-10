import type { Metadata } from 'next'
import SectionIndex from '@/components/SectionIndex'

export const metadata: Metadata = {
  title: 'The Armory',
  description:
    'The war-steel doctrine: the three issued kits, their component pieces, and the specialist configurations built on top of them.',
}

export default function ArmorPage() {
  return <SectionIndex section="armor" />
}
