'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (error?.digest) {
      console.error(error.digest)
    }
    headingRef.current?.focus()
  }, [error])

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-start justify-center gap-6 px-6 py-20">
      <header className="flex flex-col gap-3">
        <span className="text-xs uppercase tracking-[0.18em] text-ink-subtle">
          Studio · System Notice
        </span>
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="font-display text-3xl font-semibold text-ink outline-none md:text-4xl"
        >
          Something went wrong
        </h1>
        <p className="max-w-xl text-sm text-ink-muted md:text-base">
          A temporary issue occurred while rendering this segment. You can try again or
          return to the homepage.
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-3 text-sm">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-tech-primary px-4 py-2 font-semibold text-void transition hover:bg-tech-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech-primary"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border border-border-strong bg-elevated px-4 py-2 text-ink transition hover:border-tech-primary hover:text-tech-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech-primary"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
