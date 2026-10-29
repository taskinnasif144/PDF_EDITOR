import type { PickedFile } from '../domain/loaded-pdf';

export interface FilePicker {
  pickPdfFiles(): Promise<PickedFile[]>;
}
