import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-archive flex-col items-center px-6 py-32 text-center">
      <p className="stamp">Codex/ERR-404 · Office of the Imperial Archivist</p>
      <h1 className="mt-6 font-display text-4xl tracking-wide text-alabaster">
        Record Not Found
      </h1>
      <p className="mt-4 max-w-md leading-7 text-[#9aa0ab]">
        The requested file does not exist in this Archive, or is sealed above
        your clearance. Both possibilities are logged.
      </p>
      <Link
        href="/"
        className="mt-8 border px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-gold transition-colors hover:border-gold hover:text-alabaster"
      >
        Return to the Codex
      </Link>
    </main>
  )
}
