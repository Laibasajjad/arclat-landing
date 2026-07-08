// Central place for cross-site URLs so the landing page (arclat.com) can point
// at the MCP app (mcp.arclat.com) without hardcoding strings everywhere.
export const MCP_URL =
  process.env.NEXT_PUBLIC_MCP_URL || 'https://mcp.arclat.com'

export const nav = {
  app: MCP_URL,
  signIn: `${MCP_URL}/auth/login`,
  getStarted: `${MCP_URL}/auth/register`,
  dashboard: `${MCP_URL}/dashboard`,
}
