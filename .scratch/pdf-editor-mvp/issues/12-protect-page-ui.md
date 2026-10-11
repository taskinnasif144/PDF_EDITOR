# 12: Protect page — lock and unlock UI

**What to build:** One page with two tabs. **Protect:** pick a file, type a password and confirm it (mismatch → inline error; under 4 chars → friendly validation), and download `<name>-protected.pdf` behind a busy overlay. **Unlock:** pick a locked file, enter its password, and download `<name>-unlocked.pdf`; a wrong password shows an inline "Wrong password." with no download; an invalid file shows the friendly load error. Manual check: opening the protected output in an external viewer (Edge/Acrobat) demands the password.

**Blocked by:** 04, 11.

**Status:** ready-for-agent

- [ ] Tabs render; protect downloads a password-protected file with sanitized name
- [ ] Password/confirm mismatch and short-password inline validation
- [ ] Unlock with correct password downloads; wrong password → inline error, nothing downloaded
- [ ] Invalid file → friendly error on both tabs
- [ ] Manual: external viewer requires the password on protected output; unlock round-trip opens freely
