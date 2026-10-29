export interface Downloader {
  save(bytes: Uint8Array, fileName: string): void;
  revoke(): void;
}
