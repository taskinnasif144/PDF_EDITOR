import { PDFDocument } from '@cantoo/pdf-lib';
import { describe, expect, it } from 'vitest';
import { makeEncryptedPdf, makePdfWithPages, makeTextFileAsPdf, makeTruncatedPdf } from './pdf-fixtures';

describe('pdf-fixtures', () => {
  it('makePdfWithPages produces a loadable PDF with the requested page count', async () => {
    const bytes = await makePdfWithPages(3);
    const doc = await PDFDocument.load(bytes);
    expect(doc.getPageCount()).toBe(3);
  });

  it('makeEncryptedPdf produces a PDF that pdf-lib detects as encrypted', async () => {
    const bytes = await makeEncryptedPdf(2, 'secret');
    const doc = await PDFDocument.load(bytes, { ignoreEncryption: true });
    expect(doc.isEncrypted).toBe(true);
  });

  it('makeTruncatedPdf produces a PDF with no usable catalog', async () => {
    const bytes = await makeTruncatedPdf();
    const doc = await PDFDocument.load(bytes, { ignoreEncryption: true });
    expect(doc.catalog).toBeUndefined();
  });

  it('makeTextFileAsPdf produces bytes that fail to load as a PDF', async () => {
    const bytes = makeTextFileAsPdf();
    expect(bytes.length).toBeGreaterThan(0);
    await expect(PDFDocument.load(bytes)).rejects.toThrow();
  });
});
