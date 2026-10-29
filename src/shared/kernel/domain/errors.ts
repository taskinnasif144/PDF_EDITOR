export class PdfEditorError extends Error {
  readonly userMessage: string;

  constructor(userMessage: string) {
    super(userMessage);
    this.name = this.constructor.name;
    this.userMessage = userMessage;
  }
}

export class PdfPasswordError extends PdfEditorError {}
export class InvalidPlanError extends PdfEditorError {}
export class PdfLoadError extends PdfEditorError {}
