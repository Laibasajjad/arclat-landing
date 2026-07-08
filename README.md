# Arclat — Landing Page

Marketing site for [arclat.com](https://arclat.com). Standalone Next.js 14 app,
kept separate from the product app (which lives at `mcp.arclat.com`).

## Domains

| Domain             | App                         |
| ------------------ | --------------------------- |
| `arclat.com`       | This landing page           |
| `mcp.arclat.com`   | The product / dashboard     |

All CTAs point at the product app via `lib/site.ts`. Override the target with
`NEXT_PUBLIC_MCP_URL` (defaults to `https://mcp.arclat.com`).

## Develop

```bash
npm install
npm run dev
```

## Deploy (Vercel)

1. Import this directory as a new Vercel project.
2. Framework preset: **Next.js** (auto-detected).
3. Add domain `arclat.com` in project settings.
4. (Optional) Set `NEXT_PUBLIC_MCP_URL` if the product app isn't at `mcp.arclat.com`.

## Brand

Monochrome, corporate. Charcoal ground + silver mark, sampled from the Arclat
logo. Palette lives in `app/globals.css`; near-white primary buttons via the
`.btn-primary` utility. Light theme included (toggle in the header).
