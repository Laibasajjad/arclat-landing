// Central place for cross-site URLs.
//
// The product app (mcp.arclat.com) is not live yet, so every app-bound CTA
// currently resolves to the internal /coming-soon page — that keeps all links
// working. When the product ships, point these back at MCP_URL.
export const MCP_URL =
  process.env.NEXT_PUBLIC_MCP_URL || 'https://mcp.arclat.com'

const COMING_SOON = '/coming-soon'

export const nav = {
  app: COMING_SOON,
  signIn: COMING_SOON,
  getStarted: COMING_SOON,
  dashboard: COMING_SOON,
   socials: {
    github: "https://github.com/orgs/arclat-ai",
    linkedin: "https://www.linkedin.com/company/arclat/",
    instagram: "https://www.instagram.com/arclat.ai/",
  },
}
