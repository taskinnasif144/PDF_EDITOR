# 03: Open PDFs — plain, locked, and corrupt handling

**What to build:** The kernel PDF loader opens plain PDFs (reporting page count, without needless re-serialization), opens password-protected PDFs when given the correct password, refuses locked PDFs without one, refuses wrong passwords with zero chance of silent garbage (a verification probe forces a real content access after decrypt), and turns corrupt or non-PDF bytes into a friendly load error instead of a crash. Decrypted material is always password-free from this point on, so downstream features never learn what encryption is. Aborted requests reject without a result.

**Blocked by:** 02.

**Status:** ready-for-agent

- [ ] Plain fixture loads: correct page count, `wasEncrypted=false`, original bytes retained (no re-save pass)
- [ ] Encrypted fixture without password → password-required error
- [ ] Encrypted fixture with correct password → loads decrypted, `wasEncrypted=true` (including a non-ASCII password)
- [ ] Wrong password → password error, never a successful-looking garbage document (probe enforced)
- [ ] Truncated fixture and text-as-.pdf fixture → friendly load error, not a crash
- [ ] Loader copies input bytes at its boundary (callers' buffers stay immutable); aborted signal rejects
- [ ] Integration tests run in Node against the real PDF library
