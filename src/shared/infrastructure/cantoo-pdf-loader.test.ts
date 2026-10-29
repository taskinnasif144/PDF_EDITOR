import { describe, expect, it } from 'vitest';
import { PdfLoadError, PdfPasswordError } from '../kernel/domain/errors';
import {
  makeEncryptedPdf,
  makePdfWithPages,
  makeTextFileAsPdf,
  makeTruncatedPdf,
} from '../testing/pdf-fixtures';
import { CantooPdfLoader } from './cantoo-pdf-loader';

describe('CantooPdfLoader', () => {
  const loader = new CantooPdfLoader();

  it('loads a plain PDF: correct page count, not encrypted, bytes are a copy', async () => {
    const input = await makePdfWithPages(3);
    const result = await loader.load(input, 'plain.pdf');

    expect(result.pageCount).toBe(3);
    expect(result.wasEncrypted).toBe(false);
    expect(result.fileName).toBe('plain.pdf');
    expect(result.id).toBeTruthy();
    expect(result.bytes).not.toBe(input);
    expect(result.bytes.length).toBeGreaterThan(0);
  });

  it('rejects an encrypted PDF without a password', async () => {
    const input = await makeEncryptedPdf(2, 'secret');
    await expect(loader.load(input, 'locked.pdf')).rejects.toThrow(PdfPasswordError);
  });

  it('loads an encrypted PDF with the correct password', async () => {
    const input = await makeEncryptedPdf(2, 'secret');
    const result = await loader.load(input, 'locked.pdf', 'secret');

    expect(result.pageCount).toBe(2);
    expect(result.wasEncrypted).toBe(true);
  });

  it('rejects a wrong password', async () => {
    const input = await makeEncryptedPdf(2, 'secret');
    await expect(loader.load(input, 'locked.pdf', 'wrong')).rejects.toThrow(PdfPasswordError);
  });

  it('loads an encrypted PDF with a non-ASCII password', async () => {
    const input = await makeEncryptedPdf(2, 'пароль🔑');
    const result = await loader.load(input, 'locked.pdf', 'пароль🔑');

    expect(result.pageCount).toBe(2);
    expect(result.wasEncrypted).toBe(true);
  });

  it('rejects text-renamed-as-pdf with a friendly load error', async () => {
    const input = makeTextFileAsPdf();
    await expect(loader.load(input, 'fake.pdf')).rejects.toThrow(PdfLoadError);
  });

  it('rejects a corrupted PDF (no usable catalog) with a friendly load error', async () => {
    const input = await makeTruncatedPdf();
    await expect(loader.load(input, 'broken.pdf')).rejects.toThrow(PdfLoadError);
  });

  it('rejects when the abort signal is already aborted', async () => {
    const input = await makePdfWithPages(1);
    const controller = new AbortController();
    controller.abort();

    await expect(loader.load(input, 'plain.pdf', undefined, controller.signal)).rejects.toThrow();
  });
});
