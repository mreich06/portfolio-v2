import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from './';

// Type definition for mocked button props
interface ButtonProps {
  title: string;
}

// Mock the Button component to isolate Hero component testing
vi.mock('../../components/Button', () => {
  return {
    default: ({ title }: ButtonProps) => <button>{title}</button>,
  };
});

// Mock the image asset import
vi.mock('../../assets/profile-photo.webp', () => ({
  default: 'mock-image-path.webp',
}));

describe('Hero Component', () => {
  it('renders the correct introduction texts', () => {
    render(<Hero />);

    expect(screen.getByText("Hello, I'm")).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /maya reich/i })).toBeInTheDocument();
    expect(screen.getByText('Snowboarding enthusiast on a code journey')).toBeInTheDocument();
    expect(screen.getByText(/4 years of experience/i)).toBeInTheDocument();
  });

  it('renders both action buttons', () => {
    render(<Hero />);

    expect(screen.getByRole('button', { name: /view my work/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /get in touch/i })).toBeInTheDocument();
  });

  it('renders the profile image with correct attributes', () => {
    render(<Hero />);

    const img = screen.getByRole('img', { name: /profile photo/i }) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'mock-image-path.webp');
  });
});
