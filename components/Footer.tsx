import Link from 'next/link'
import { nav } from '../lib/site'

export default function Footer() {
  return (
    <footer className="border-t border-hair">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
        <div className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Arclat" className="h-6 w-6 rounded-md border border-hair" />
          <span className="text-sm font-semibold text-[var(--text)]">Arclat</span>
          <span className="text-xs text-[var(--muted)]">© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
          <a href="#features" className="hover:text-[var(--text)]">Features</a>
          <a href="#pricing" className="hover:text-[var(--text)]">Pricing</a>
          <a href={nav.app} className="hover:text-[var(--text)]">MCP App</a>
          <a href={nav.getStarted} className="hover:text-[var(--text)]">Get started</a>
        </nav>
      </div>
    </footer>
  )
}
