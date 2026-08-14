import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import Contact from './index';

vi.mock('react-calendly', () => ({
  PopupModal: () => null,
}));

vi.mock('./ContactForm', () => ({
  default: () => <div data-testid="contact-form" />,
}));

describe('Contact links', () => {
  it('renders github and linkedin as clickable links with correct hrefs', () => {
    render(<Contact />);

    const githubLink = screen.getByText('@mreich06');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/mreich06');

    const linkedinLink = screen.getByText('/maya-reich');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/maya-reich/');
  });

  it('does not add an href to non-linked entries', () => {
    render(<Contact />);

    const locationText = screen.getByText('Amsterdam, NL');
    expect(locationText).not.toHaveAttribute('href');

    const statusText = screen.getByText('accepting work · Q3 2026');
    expect(statusText).not.toHaveAttribute('href');
  });
});
