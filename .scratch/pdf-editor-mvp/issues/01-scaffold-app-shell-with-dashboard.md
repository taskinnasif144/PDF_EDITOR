# 01: Scaffold app shell with dashboard

**What to build:** Running the dev server shows a dashboard with three doors — Merge PDFs, Split PDF, Protect / Unlock — each leading to a placeholder page. The automated test suite runs and the production build succeeds. A Content-Security-Policy meta tag is present in the HTML shell (with a documented note that Vite dev mode needs a relaxed script policy).

**Blocked by:** None (can start immediately).

**Status:** ready-for-agent

- [ ] Dashboard renders at the root route with working links to all three tool routes
- [ ] Smoke test passes in Vitest; `npm run build` succeeds
- [ ] CSP meta tag present (`default-src 'self'; script-src 'self'; worker-src 'self' blob:; object-src 'none'; base-uri 'none'`)
- [ ] All dependencies installed at exact pinned versions with lockfile committed
- [ ] Strict TypeScript mode enabled
