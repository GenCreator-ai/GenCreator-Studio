import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center gap-8 px-6 py-20">
      <header className="flex flex-col gap-4">
        <span className="text-xs uppercase tracking-[0.18em] text-ink-subtle">
          404 · Not Found
        </span>
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
          Page not found
        </h1>
        <p className="max-w-xl text-base text-ink-muted md:text-lg">
          The page you requested does not exist or may have been moved.
        </p>
      </header>

      <nav aria-label="Page navigation" className="flex flex-wrap items-center gap-4 text-sm font-medium pt-2">
        <Link
          href="/"
          className="rounded-full bg-tech-primary px-5 py-2.5 text-sm font-semibold text-void transition hover:bg-tech-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tech-primary focus-visible:ring-offset-2 focus-visible:ring-offset-void"
        >
          Go to home
        </Link>
        <Link
          href="/studio"
          className="rounded-full border border-border-strong bg-elevated px-5 py-2.5 text-sm font-medium text-ink transition hover:border-tech-primary hover:text-tech-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tech-primary focus-visible:ring-offset-2 focus-visible:ring-offset-void"
        >
          Open Studio
        </Link>
      </nav>
    </main>
  )
}
