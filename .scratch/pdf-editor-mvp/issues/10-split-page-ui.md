# 10: Split page — virtualized grid with cut points

**What to build:** The full split experience: pick a PDF (locked → password prompt keyed by file id; dialog cancel aborts, late resolutions ignored) and watch a virtualized thumbnail grid materialize only the visible pages — smooth scrolling on a 500+ page document is the headline requirement. Click the gutter between pages to drop or remove cut markers; segment count and estimated output bytes update live. Splitting more than 100 files or an estimated 1.5 GB raises a confirmation showing both numbers; cancel aborts. During execution a progress dialog advances per segment; a double-click cannot start two runs. The result downloads as `<name>-split.zip`. Session state is cleared afterward. DevTools shows zero external requests throughout.

**Blocked by:** 07, 09.

**Status:** ready-for-agent

- [ ] 500+ page PDF scrolls smoothly with thumbnails appearing only for visible pages
- [ ] Gutter clicks toggle integer cut markers; live segment count and byte estimate shown
- [ ] >100 segments or >1.5 GB estimate → confirm dialog with both numbers; cancel aborts cleanly
- [ ] Locked input → password prompt; cancel aborts; wrong password → typed inline error
- [ ] Progress dialog during execution; rapid double-click inert (automated where practical)
- [ ] Correct zip downloaded; state cleared after; zero external network requests
