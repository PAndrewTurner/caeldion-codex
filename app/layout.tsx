import type { Metadata } from 'next'
import { Marcellus, Source_Sans_3, IBM_Plex_Mono } from 'next/font/google'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import './globals.css'

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marcellus',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
})

const plexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-plex-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'The Caeldion Codex — Imperial Archive',
    template: '%s — The Caeldion Codex',
  },
  description:
    'The definitive record of the Empire of Caeldrion: the Grand Army, the Icons, the Arcanum, and the surveyed territories.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${marcellus.variable} ${sourceSans.variable} ${plexMono.variable} flex min-h-screen flex-col`}
      >
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
