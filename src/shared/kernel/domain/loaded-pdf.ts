export interface LoadedPdf {
  readonly id: string;
  readonly fileName: string;
  readonly pageCount: number;
  readonly wasEncrypted: boolean;
  readonly bytes: Uint8Array;
}

export interface PickedFile {
  readonly id: string;
  readonly name: string;
  readonly bytes: Uint8Array;
}
