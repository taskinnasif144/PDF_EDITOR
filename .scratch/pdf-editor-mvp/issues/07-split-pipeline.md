# 07: Split pipeline — plan cuts and build segment zip

**What to build:** Pure cut-planning math plus the executable split flow, verified in Node. Given a page count and cut positions, the planner produces contiguous 1-based segments (cuts after pages 2 and 4 of a 5-page doc → `[{1,2},{3,4},{5,5}]`), rejects NaN, Infinity, floats, zero, negatives, and out-of-range cuts with an error naming the bad value, and sorts/dedupes valid input. A byte-estimate function predicts output size. Execution loads the source **once**, extracts each segment from that single parse (no re-reading per segment), zips with STORE compression and sanitized names, reports progress, yields to the UI between segments, and honors abort.

**Blocked by:** 03.

**Status:** ready-for-agent

- [ ] `planSegments(5, [2, 4])` → `[{1,2},{3,4},{5,5}]`; `(5, [])` → `[{1,5}]`; unsorted/duplicate cuts normalized
- [ ] Table-driven invalid-cut tests: NaN, ±Infinity, -1, 0, 1.5, pageCount+1 each rejected naming the value
- [ ] Byte estimate = (segment pages / total pages) × source bytes; exposed for the confirm dialog
- [ ] Execute calls the splitter once per segment **against one parsed source**, zips STORE with sanitized names, emits progress, yields between segments, aborts cleanly
- [ ] Integration: 3-page fixture with one cut → zip containing two correct PDFs (pages 2 and 1)
