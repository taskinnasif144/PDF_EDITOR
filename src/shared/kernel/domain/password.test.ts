import { describe, expect, it } from 'vitest';
import { InvalidPlanError } from './errors';
import { Password } from './password';

describe('Password', () => {
  it('rejects passwords shorter than 4 characters', () => {
    expect(() => Password.create('ab')).toThrow(InvalidPlanError);
  });

  it('accepts a password of 4 or more characters', () => {
    const pw = Password.create('abcd');
    expect(pw.value).toBe('abcd');
  });

  it('redacts itself in string contexts', () => {
    const pw = Password.create('secret123');
    expect(String(pw)).toBe('[redacted]');
  });

  it('redacts itself in JSON serialization', () => {
    const pw = Password.create('secret123');
    const json = JSON.stringify({ pw });
    expect(json).not.toContain('secret123');
    expect(json).toContain('[redacted]');
  });
});
