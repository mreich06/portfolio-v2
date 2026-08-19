import { act, render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Hero from './';

// Type definition for mocked button props
interface ButtonProps {
  children: React.ReactNode;
}

const setIsModalOpen = vi.fn();

// Mock the Button component to isolate Hero component testing
vi.mock('../../components/Button', () => {
  return {
    default: ({ children }: ButtonProps) => <button>{children}</button>,
  };
});

// Mock the image asset import
vi.mock('../../assets/profile-photo.webp', () => ({
  default: 'mock-image-path.webp',
}));

describe('Hero Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the correct introduction texts', () => {
    render(<Hero {...{ setIsModalOpen }} />);

    expect(screen.getByText("Hello, I'm")).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /maya reich/i })).toBeInTheDocument();
    expect(screen.getByText(/full-stack software engineer/i)).toBeInTheDocument();

    for (let i = 0; i < 55; i++) {
      act(() => vi.advanceTimersByTime(60));
    }
    expect(screen.getByText('Snowboarding enthusiast on a code journey')).toBeInTheDocument();
  });

  it('renders both action buttons', () => {
    render(<Hero {...{ setIsModalOpen }} />);

    expect(screen.getByRole('button', { name: /download resume/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /get in touch/i })).toBeInTheDocument();
  });

  it('renders the profile image with correct attributes', () => {
    render(<Hero {...{ setIsModalOpen }} />);

    const img = screen.getByRole('img', { name: /profile photo/i }) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'mock-image-path.webp');
  });
});
