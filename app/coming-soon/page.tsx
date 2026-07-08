import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coming soon — Arclat',
  description: 'The Arclat product app is launching soon.',
}

export default function ComingSoon() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-grid" />
      <div className="mx-auto flex min-h-[70vh] w-full max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
        <span aria-hidden className="brand-mark h-14 w-14" />

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-hair px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          Coming soon
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
          The Arclat app is almost here
        </h1>

        <p className="mt-4 max-w-md text-base leading-7 text-[var(--muted)]">
          We are putting the finishing touches on the Arclat product. Sign-up, the
          dashboard, and in-editor audits will live at{' '}
          <span className="text-[var(--text)]">mcp.arclat.com</span> shortly.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg border border-hair px-5 py-2.5 text-sm font-semibold text-[var(--text)] hover:bg-soft"
        >
          <ArrowLeft size={15} /> Back to home
        </Link>
      </div>
    </main>
  )
}
