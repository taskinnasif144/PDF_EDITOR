# 06: Merge page — pick, reorder, merge, download

**What to build:** In the browser, the user picks PDFs into a drag-reorderable list, clicks Merge, and downloads `merged.pdf`. A locked file raises a password dialog (showing the file's name and size so duplicate names are distinguishable); cancel aborts cleanly. The button is disabled until at least one file is present, and a double-click cannot start two merges (non-dismissible busy overlay while running). Selecting more than 1.5 GB total triggers a warning confirmation. Invalid files produce a friendly inline error, and all state (files, passwords) is cleared after completion so decrypted material doesn't linger.

**Blocked by:** 04, 05.

**Status:** ready-for-agent

- [ ] Pick two PDFs, drag to reorder, merge, and download a correct combined file
- [ ] Merge button disabled with zero files; rapid double-click invokes the use case exactly once (automated)
- [ ] Locked file → password dialog with name+size; correct password completes; wrong password shows a typed error
- [ ] Total selection over 1.5 GB → warning confirm
- [ ] Text-renamed-as-.pdf → friendly inline error, no crash
- [ ] Shared UI pieces created here: dropzone, password dialog, progress dialog, busy overlay
