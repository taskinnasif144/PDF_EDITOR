# 04: Browser file picker and safe downloader

**What to build:** The user can select multiple PDF files from disk (even several named identically — each gets a unique id) and can save results back to Downloads with sanitized filenames: no path separators, no control or bidirectional-hijack characters, length capped, correct suffix enforced. Downloads are never cancelled by premature URL revocation, and a cleanup hook exists for flow teardown.

**Blocked by:** 02.

**Status:** ready-for-agent

- [ ] Picking multiple files yields unique ids per file (duplicate names do not collide)
- [ ] Sanitization strips path separators, control chars, and bidi-override characters; caps length; forces the correct extension
- [ ] Object URLs are revoked only after a delay (never synchronously mid-download) and via an explicit `revoke()` for teardown
- [ ] jsdom-based tests pass for picker and downloader
