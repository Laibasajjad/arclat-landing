'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { nav } from '../lib/site'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
]

export default function Header() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null
    if (stored) {
      setTheme(stored)
      if (stored === 'light') document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    if (next === 'light') document.documentElement.setAttribute('data-theme', 'light')
    else document.documentElement.removeAttribute('data-theme')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hair bg-[var(--bg)]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3.5 sm:px-10 lg:px-12">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="Arclat" className="h-8 w-8 rounded-lg border border-hair" />
          <span className="text-base font-semibold tracking-tight text-[var(--text)]">Arclat</span>
        </Link>

        <nav className="hidden items-center gap-0.5 text-sm text-[var(--muted)] md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-lg px-3 py-2 hover:bg-soft hover:text-[var(--text)]">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex items-center justify-center rounded-lg border border-hair p-2 text-[var(--muted)] hover:bg-soft hover:text-[var(--text)]"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href={nav.signIn}
            className="hidden rounded-lg border border-hair px-4 py-2 text-sm text-[var(--muted)] hover:bg-soft hover:text-[var(--text)] sm:block"
          >
            Sign in
          </a>
          <a
            href={nav.getStarted}
            className="btn-primary rounded-lg px-4 py-2 text-sm font-semibold"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  )
}
