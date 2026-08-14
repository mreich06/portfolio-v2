import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Footer from './index';

describe('Footer Component', () => {
  it('renders all footer text successfully', () => {
    render(<Footer />);
    expect(screen.getByText((_, element) => element?.textContent === 'Made with ❤️ using React & TypeScript by Maya')).toBeInTheDocument();
    expect(screen.getByText('© 2026 • All rights reserved')).toBeInTheDocument();
  });
});
