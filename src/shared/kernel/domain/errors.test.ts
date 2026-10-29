import { describe, expect, it } from 'vitest';
import { InvalidPlanError, PdfEditorError, PdfLoadError, PdfPasswordError } from './errors';

describe('typed errors', () => {
  it('carry a userMessage and extend PdfEditorError', () => {
    const err = new PdfPasswordError('Wrong password.');
    expect(err.userMessage).toBe('Wrong password.');
    expect(err).toBeInstanceOf(PdfEditorError);
    expect(err).toBeInstanceOf(Error);
  });

  it('each subclass is distinct', () => {
    expect(new PdfPasswordError('x')).toBeInstanceOf(PdfPasswordError);
    expect(new InvalidPlanError('x')).toBeInstanceOf(InvalidPlanError);
    expect(new PdfLoadError('x')).toBeInstanceOf(PdfLoadError);
  });
});
