import { describe, it } from 'bun:test';
import { render, screen } from '@testing-library/react';

import { Typography } from './Typography';

describe('Typography', () => {
  it('should display typography text', () => {
    render(<Typography>Hello World</Typography>);
    screen.debug();
    screen.getByText(/Hello World/i);
  });
});
