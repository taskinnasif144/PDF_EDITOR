# 09: Self-contained pdf.js thumbnail renderer

**What to build:** The renderer that turns a decrypted page into a blob object URL, with pdf.js fully self-contained: worker, cmaps, and standard fonts bundled locally so the app never makes an external network fetch (the "files never leave the machine" promise holds even while rendering). Worker startup failure is loud, not a silent fallback to main-thread rendering. Rendering is disciplined: at most two concurrent tasks, decoded-page proxies cached in a small per-document LRU with cleanup after use, render width clamped to 600px and device-pixel-ratio to 2, cancelled renders swallowed without caching.

**Blocked by:** 08.

**Status:** ready-for-agent

- [ ] Real fixture page renders to a `blob:` URL with zero external network requests (all pdf.js assets bundled)
- [ ] Worker connect failure throws a typed, friendly error instead of degrading silently
- [ ] Concurrency capped at 2; page proxies cleaned up after render; width ≤600px, dpr ≤2
- [ ] Cancelled render tasks do not poison the cache
