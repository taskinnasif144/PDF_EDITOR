# 05: Merge pipeline — stitch documents in order

**What to build:** The merge use case takes a list of picked files (plus optional per-file passwords keyed by file **id**, never by name) and returns one merged PDF byte stream. Order is respected and provable; a single file behaves as a copy; an empty list is a clear validation error; locked inputs decrypt transparently when their password is supplied; passwords are forgotten as soon as each file loads; aborted requests produce nothing. Verified end-to-end in Node with the real loader and merger against generated fixtures.

**Blocked by:** 03.

**Status:** ready-for-agent

- [ ] Merging a 100×100-page-size PDF before a 200×200 one yields a result whose first and last page sizes prove the order
- [ ] Single file → its bytes; empty list → invalid-plan error naming the problem
- [ ] Encrypted input with password under its file id merges; **two files both named `scan.pdf` with different passwords both decrypt correctly**
- [ ] Password entries are removed after their file loads; abort signal prevents any output
- [ ] Node integration tests with the real loader + merger + fixtures pass
