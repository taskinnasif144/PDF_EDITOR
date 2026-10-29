import { PDFDocument } from '@cantoo/pdf-lib';

export async function makePdfWithPages(
  pageCount: number,
  width = 200,
  height = 200,
): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  for (let i = 0; i < pageCount; i++) {
    doc.addPage([width, height]);
  }
  return doc.save();
}

export async function makeEncryptedPdf(pageCount: number, password: string): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  for (let i = 0; i < pageCount; i++) {
    doc.addPage([200, 200]);
  }
  doc.encrypt({
    userPassword: password,
    ownerPassword: crypto.randomUUID(),
  });
  return doc.save();
}

export async function makeTruncatedPdf(): Promise<Uint8Array> {
  const bytes = await makePdfWithPages(2);
  const header = bytes.slice(0, 8);
  const garbage = new Uint8Array(bytes.length - 8);
  for (let i = 0; i < garbage.length; i++) {
    garbage[i] = Math.floor(Math.random() * 256);
  }
  const result = new Uint8Array(header.length + garbage.length);
  result.set(header, 0);
  result.set(garbage, header.length);
  return result;
}

export function makeTextFileAsPdf(): Uint8Array {
  return new TextEncoder().encode('This is not a PDF. It is plain text.');
}
