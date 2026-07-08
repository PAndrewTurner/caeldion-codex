/**
 * Prefix a public asset path with the deployment base path.
 * GitHub Pages serves project sites under /<repo>/; Next's basePath covers
 * routes and <Link>, but plain <img> src strings must be prefixed manually.
 */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`
}
