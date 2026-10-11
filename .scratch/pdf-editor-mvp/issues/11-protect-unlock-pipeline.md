# 11: Protect & unlock pipeline

**What to build:** The protect use case encrypts a PDF with a true open-password (AES-128, plus a random owner password so the protection can't be trivially stripped). The unlock use case produces an unencrypted copy **only** when the correct password is supplied — a wrong password yields a typed error and zero output bytes, and there is deliberately no password recovery. Round-trips are proven in Node, including a non-ASCII password, by encrypting a fixture and confirming the loader (and thus any viewer) refuses it bare and accepts it with the password.

**Blocked by:** 03.

**Status:** ready-for-agent

- [ ] Protect output refuses to open without the password and opens with it (real adapter round-trip)
- [ ] Passwords shorter than 4 characters never reach the cryptor (value-object gate)
- [ ] Wrong password on unlock → typed error, **no output bytes produced**
- [ ] Unlock output opens with no password and reports as unencrypted
- [ ] Non-ASCII password survives protect → unlock → load round-trip
