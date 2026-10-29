import type { LoadedPdf } from '../domain/loaded-pdf';

export interface PdfLoader {
  load(
    bytes: Uint8Array,
    fileName: string,
    password?: string,
    signal?: AbortSignal,
  ): Promise<LoadedPdf>;
}
