# 02: Kernel domain, ports, and PDF fixtures

**What to build:** The shared language every feature speaks exists and is tested: a `Password` value object that refuses values shorter than 4 characters and redacts itself in string/JSON contexts; a typed error hierarchy (`PdfEditorError` base with a `userMessage`, plus password / invalid-plan / load subclasses); `LoadedPdf` and `PickedFile` models carrying unique IDs; port interfaces for loading, picking, and downloading; and test-fixture generators that produce plain, encrypted, truncated, and text-renamed-as-PDF byte streams programmatically (no binary files in the repo).

**Blocked by:** 01.

**Status:** ready-for-agent

- [ ] `Password.create('ab')` throws; `create('abcd')` works; stringifying it never reveals the raw value
- [ ] All typed errors carry a friendly `userMessage`; adapters are forbidden from surfacing raw parser messages
- [ ] `PickedFile` and `LoadedPdf` each carry a `crypto.randomUUID()` id
- [ ] Fixture helpers generate: N-page plain PDF, password-protected PDF, 50%-truncated PDF, and plain-text-bytes-named-.pdf
- [ ] Ports defined for `PdfLoader` (with optional password + AbortSignal), `FilePicker`, `Downloader` (with a `revoke()` cleanup hook)
