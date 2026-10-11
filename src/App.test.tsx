import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('dashboard', () => {
  it('offers links to the three PDF tools', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: 'Merge PDFs' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Split PDF' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Protect / Unlock' })).toBeInTheDocument();
  });
});
