# 13: Final QA and README

**What to build:** The whole app verified as a user would experience it from a production build, plus a README so a fresh clone can run it. Every tool exercised with real files; the 500+ page split and the external-viewer encryption check repeated against the preview build; DevTools confirms zero external requests across all flows; the CSP is present; double-click guards hold. README covers run/build instructions, the three features, the privacy story (everything runs in your browser; nothing is uploaded), and known limitations (heavy work runs on the main thread with progress yields; worker isolation deferred).

**Blocked by:** 06, 10, 12.

**Status:** ready-for-agent

- [ ] Production build + preview: all three tools work with real user files
- [ ] 500+ page Split and external-viewer encryption round-trip re-verified on the preview build
- [ ] Network tab: zero external requests across every flow; CSP meta present
- [ ] Double-click busy guards hold on Merge, Split, and Protect
- [ ] README committed with run/build, features, privacy note, and known limitations
