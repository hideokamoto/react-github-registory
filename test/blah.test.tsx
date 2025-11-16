import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Thing } from '../src';

describe('Thing', () => {
  it('renders without crashing', () => {
    render(<Thing />);
    expect(screen.getByText(/snozzberries/i)).toBeInTheDocument();
  });
});
