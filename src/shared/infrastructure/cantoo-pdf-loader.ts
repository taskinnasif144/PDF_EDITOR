import { PDFDocument } from '@cantoo/pdf-lib';
import { PdfLoadError, PdfPasswordError } from '../kernel/domain/errors';
import type { LoadedPdf } from '../kernel/domain/loaded-pdf';
import type { PdfLoader } from '../kernel/ports/pdf-loader';

export class CantooPdfLoader implements PdfLoader {
  async load(
    bytes: Uint8Array,
    fileName: string,
    password?: string,
    signal?: AbortSignal,
  ): Promise<LoadedPdf> {
    if (signal?.aborted) {
      throw new PdfLoadError('Loading was cancelled.');
    }

    const owned = bytes.slice(0);

    let doc: PDFDocument;
    try {
      doc = await PDFDocument.load(owned, { ignoreEncryption: true });
    } catch {
      throw new PdfLoadError('Not a valid PDF file.');
    }

    if (doc.catalog === undefined) {
      throw new PdfLoadError('Not a valid PDF file.');
    }

    if (!doc.isEncrypted) {
      return {
        id: crypto.randomUUID(),
        fileName,
        pageCount: doc.getPageCount(),
        wasEncrypted: false,
        bytes: owned,
      };
    }

    if (!password) {
      throw new PdfPasswordError('This PDF is password-protected.');
    }

    let decrypted: PDFDocument;
    try {
      decrypted = await PDFDocument.load(owned, { ignoreEncryption: true, password });
    } catch {
      throw new PdfPasswordError('Wrong password.');
    }

    if (decrypted.catalog === undefined) {
      throw new PdfLoadError('Not a valid PDF file.');
    }

    try {
      decrypted.getPage(0);
    } catch {
      throw new PdfPasswordError('Wrong password.');
    }

    if (signal?.aborted) {
      throw new PdfLoadError('Loading was cancelled.');
    }

    const decryptedBytes = await decrypted.save();

    return {
      id: crypto.randomUUID(),
      fileName,
      pageCount: decrypted.getPageCount(),
      wasEncrypted: true,
      bytes: decryptedBytes,
    };
  }
}
