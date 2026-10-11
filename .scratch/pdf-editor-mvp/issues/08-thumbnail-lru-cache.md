# 08: Thumbnail LRU cache

**What to build:** A thumbnail cache that keeps a 500+ page document scrollable without melting the tab: keys combine document id, page index, and scale (so two files named the same never mix); at capacity 60 the least-recently-used entry is evicted **and its object URL revoked inside the eviction hook** (virtualized rows never unmount, so unmount-based cleanup would never fire); concurrent requests for the same page share one render; rejected or cancelled renders are never cached (a failed page can retry); documents are fully separated by id.

**Blocked by:** 02.

**Status:** ready-for-agent

- [ ] Cache hit does not re-invoke the renderer; each unique key renders exactly once
- [ ] Capacity-2 eviction: access A, B, C → A evicted and its URL revoked
- [ ] Concurrent same-key requests share a single renderer call
- [ ] A rejected render is not cached — the next request re-renders (no permanent blank page)
- [ ] Same page index under two document ids yields distinct entries
