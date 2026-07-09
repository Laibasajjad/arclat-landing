import { Github, Instagram, Linkedin } from 'lucide-react'
import { nav } from '../lib/site'

const socialLinks = [
  { href: 'https://github.com/arclat-ai', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/company/arclat/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://www.instagram.com/arclat.ai/', label: 'Instagram', icon: Instagram },
]

export default function Footer() {
  return (
    <footer className="border-t border-hair">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="brand-mark h-5 w-5" />
          <span className="text-sm font-semibold text-[var(--text)]">Arclat</span>
          <span className="text-xs text-[var(--muted)]">© {new Date().getFullYear()}</span>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
            <a href="#features" className="hover:text-[var(--text)]">Features</a>
            <a href="#faq" className="hover:text-[var(--text)]">FAQ</a>
            <a href={nav.app} className="hover:text-[var(--text)]">MCP App</a>
            <a href={nav.getStarted} className="hover:text-[var(--text)]">Get started</a>
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Arclat on ${label}`}
                className="text-[var(--muted)] transition-colors duration-200 hover:text-[var(--accent)]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
