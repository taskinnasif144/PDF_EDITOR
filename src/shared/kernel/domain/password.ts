import { InvalidPlanError } from './errors';

export class Password {
  readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(raw: string): Password {
    if (raw.length < 4) {
      throw new InvalidPlanError('Password must be at least 4 characters.');
    }
    return new Password(raw);
  }

  toString(): string {
    return '[redacted]';
  }

  toJSON(): string {
    return '[redacted]';
  }
}
