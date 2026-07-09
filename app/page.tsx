'use client';
import { useEffect, useState, type FormEvent } from 'react'
import { Terminal, Code2, Zap, GitBranch, ShieldCheck, Gauge, ArrowRight, Check } from 'lucide-react'
import { nav } from '../lib/site'

const MCP_SNIPPET = `{
  "mcpServers": {
    "arclat": {
      "command": "uvx",
      "args": ["arclat-mcp"],
      "env": {
        "ARCLAT_API_KEY": "your_api_key_here"
      }
    }
  }
}`

const features = [
  {
    icon: Terminal,
    title: 'Works inside Claude Code',
    body: 'No browser tab, no upload flow. Arclat runs as an MCP server inside the editor you already live in.',
  },
  {
    icon: Code2,
    title: 'Reads your actual code',
    body: 'AST-based analysis on your real .py source, not logs, not traces, not guesses. The true source of bottlenecks.',
  },
  {
    icon: Gauge,
    title: 'Ranked by impact',
    body: 'Findings sorted by the time they cost, so you fix what actually matters instead of chasing micro-optimizations.',
  },
  {
    icon: Zap,
    title: 'One-command fixes',
    body: 'Ask Claude Code to apply a fix and Arclat patches the file in place, with a diff you approve first.',
  },
  {
    icon: GitBranch,
    title: 'CI-ready',
    body: 'Wire the same engine into a GitHub Action and fail the build when a change regresses agent latency.',
  },
  {
    icon: ShieldCheck,
    title: 'Your code stays yours',
    body: 'Analysis runs locally through the MCP server. Only usage metadata syncs, never your source.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Add one config block',
    body: 'Drop the Arclat MCP entry into your Claude Code config and paste your API key.',
  },
  {
    n: '02',
    title: 'Ask for an audit',
    body: '“Audit this codebase for latency issues.” Arclat parses your code and ranks every bottleneck.',
  },
  {
    n: '03',
    title: 'Apply the fixes',
    body: 'Review the ranked findings, then let Arclat patch the ones you approve, right in your editor.',
  },
]

const rotatingPhrases = ['slow.', 'expensive.', 'hard to debug.']

const faqs = [
  {
    question: 'What is Arclat?',
    answer:
      'Arclat is an MCP server that helps you identify, rank, and fix latency bottlenecks in AI agent code directly inside Claude Code.',
  },
  {
    question: 'Does Arclat send my source code to the cloud?',
    answer:
      'No. Analysis runs locally through the MCP server. Only usage metadata is synced. Your source code remains on your machine.',
  },
  {
    question: 'Which programming languages are supported?',
    answer:
      'Arclat currently focuses on Python agent codebases, with support for additional languages planned.',
  },
  {
    question: 'Do I need Claude Code?',
    answer:
      'Yes. Arclat integrates with Claude Code using the Model Context Protocol (MCP).',
  },
  {
    question: 'Can Arclat automatically fix issues?',
    answer:
      'Yes. Arclat can generate fixes and apply them inside Claude Code after you review and approve the changes.',
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Yes. You can start with the free plan, which includes a limited number of audits each month.',
  },
]

export default function Home() {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email.trim()) {
      return
    }

    setLoading(true)
    setSuccess(false)

    await new Promise((resolve) => setTimeout(resolve, 1200))

    setLoading(false)
    setSuccess(true)
    setName('')
    setEmail('')
  }

useEffect(() => {
  const current = rotatingPhrases[phraseIndex]

  const timer = setTimeout(() => {
    if (!isDeleting) {
      setText(current.substring(0, text.length + 1))

      if (text === current) {
        setTimeout(() => {
          setIsDeleting(true)
        }, 1200)
      }
    } else {
      setText(current.substring(0, text.length - 1))

      if (text === "") {
        setIsDeleting(false)
        setPhraseIndex((phraseIndex + 1) % rotatingPhrases.length)
      }
    }
  }, isDeleting ? 50 : 90)

  return () => clearTimeout(timer)
}, [text, isDeleting, phraseIndex])

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(109,31,59,0.08),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(200,164,92,0.08),transparent_40%)]">
        <div className="pointer-events-none absolute inset-0 hero-grid" />
        <div className="mx-auto grid w-full max-w-6xl items-start gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              MCP · Claude Code
            </div>

        <h1 className="mt-7 text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--text)] sm:text-6xl">
          Your AI agent is{" "}
          <span className="text-[var(--accent-strong)] inline-flex items-center min-w-[11ch]">
         {text}
        <span className="ml-1 h-8 w-[2px] bg-[var(--accent-strong)] animate-pulse"></span>
        </span>

        <br />

          Arclat tells you{" "}
          <span className="text-[var(--accent-strong)]">
          exactly why
          </span>, and fixes it.
        </h1>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              Arclat audits your agent codebase for latency bottlenecks, ranks them by the time they
              cost, and applies fixes, all from a single Claude Code conversation. No log files, no
              context switching.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={nav.getStarted}
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold"
              >
                Install free <ArrowRight size={15} />
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-lg border border-hair px-5 py-2.5 text-sm font-semibold text-[var(--text)] hover:bg-soft"
              >
                See how it works
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                { value: '1 line', label: 'Add to Claude Code config and you’re running.' },
                { value: 'Ranked', label: 'Bottlenecks sorted by time lost, not guesswork.' },
                { value: 'Auto-fix', label: 'Apply patches directly from Claude Code.' },
              ].map((item) => (
                <div
                  key={item.value}
                  className="rounded-xl border border-hair bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="text-xl font-semibold text-[var(--text)]">{item.value}</div>
                  <p className="mt-1 text-xs text-[var(--muted)]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Install card */}
          <div className="rounded-xl border border-hair bg-[var(--card)] p-5">
            <div className="flex items-start justify-between gap-4 border-b border-hair pb-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--muted)]">One-line install</p>
                <p className="mt-1.5 text-lg font-semibold text-[var(--text)]">Add to Claude Code config</p>
              </div>
              <span className="rounded-full border border-hair px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-[var(--muted)]">
                ~/.claude/config
              </span>
            </div>

            <pre className="mt-4 overflow-x-auto rounded-lg border border-hair bg-code p-4 text-xs leading-6 text-[var(--text)]">
              <code>{MCP_SNIPPET}</code>
            </pre>

            <div className="mt-4 rounded-lg border border-hair p-3.5">
              <p className="text-sm text-[var(--muted)]">Then say in Claude Code:</p>
              <p className="mt-1 text-sm font-medium text-[var(--text)]">“Audit this codebase for latency issues”</p>
            </div>

            <a
              href={nav.getStarted}
              className="btn-primary mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold"
            >
              Get your API key <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            Latency profiling that lives in your editor
          </h2>
          <p className="mt-3 text-base leading-7 text-[var(--muted)]">
            Everything Arclat does happens where you already work. Point it at a codebase and it does
            the rest.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className="rounded-xl border border-hair p-5 transition-colors hover:bg-soft">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-hair">
                <f.icon size={16} className="text-[var(--accent)]" />
              </div>
              <h3 className="text-base font-semibold text-[var(--text)]">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-y border-hair bg-soft">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            From install to fix in under a minute
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl border border-hair bg-[var(--bg)] p-6">
                <div className="text-sm font-semibold text-[var(--accent)]">{s.n}</div>
                <h3 className="mt-3 text-lg font-semibold text-[var(--text)]">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid gap-10 rounded-3xl border border-hair bg-[var(--card)] p-8 shadow-xl shadow-black/5 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--accent)]/25 bg-[var(--bg)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Launching Soon
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
              Join the Waitlist
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
              Be among the first developers to use Arclat. Get early access, exclusive updates, and help shape the future of AI agent latency optimization.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                'Early access before public launch',
                'Priority onboarding and updates',
                'Influence upcoming features',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--text)]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--bg)] text-[var(--accent)]">
                    <Check size={14} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-hair bg-[var(--bg)]/70 p-6 shadow-lg shadow-black/5 backdrop-blur-sm sm:p-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--text)]">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Ava Chen"
                  className="w-full rounded-lg border border-hair bg-[var(--card)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-all duration-300 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--text)]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-hair bg-[var(--card)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-all duration-300 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-80"
              >
                {loading ? 'Joining...' : 'Join Waitlist'}
              </button>

              {success ? (
                <p className="text-sm font-medium text-[var(--accent-strong)]">
                  You&apos;re on the waitlist! 🎉
                </p>
              ) : (
                <p className="text-sm text-[var(--muted)]">
                  We&apos;ll only email you about Arclat updates. No spam.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-8 sm:px-10 lg:px-12">
        <div className="rounded-3xl border border-hair bg-[var(--card)] p-8 shadow-xl shadow-black/5 sm:p-10 lg:p-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-base leading-7 text-[var(--muted)]">
              Everything you need to know before joining the early access list.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-2xl border border-hair bg-[var(--bg)]/70 p-5">
                <h3 className="text-base font-semibold text-[var(--text)]">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-2xl border border-hair bg-soft p-10 text-center sm:p-14">
          <div className="pointer-events-none absolute inset-0 hero-grid" />
          <h2 className="relative text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            Stop guessing where the latency is.
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-base leading-7 text-[var(--muted)]">
            Install Arclat in Claude Code and get a ranked latency audit of your agent codebase in
            under a minute.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={nav.getStarted}
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold"
            >
              Install free <ArrowRight size={15} />
            </a>
            <a
              href={nav.app}
              className="inline-flex items-center justify-center rounded-lg border border-hair px-5 py-2.5 text-sm font-semibold text-[var(--text)] hover:bg-soft"
            >
              Open the MCP app
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
