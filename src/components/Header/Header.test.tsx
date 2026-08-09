import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import Header from './index';

// Mock the Button to isolate Header
vi.mock('../Button', () => ({
  default: ({ title, className }: { title: string; className?: string }) => <button className={className}>{title}</button>,
}));

vi.mock('../../assets/logo.svg', () => ({
  default: 'mocked-logo.svg',
}));

describe('Header Component', () => {
  it('renders all navigation items from constants successfully', () => {
    render(<Header />);

    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Stack')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('toggles the mobile modal open and closed via user interactions', () => {
    render(<Header />);

    // Initial State
    expect(screen.queryByText('Contact')).not.toBeInTheDocument();

    // check that clcking menu button opens modal
    const mobileMenu = screen.getByRole('button', { name: '' });
    fireEvent.click(mobileMenu);

    // Modal Opened State
    const contactButton = screen.getByRole('button', { name: 'Contact' });
    expect(contactButton).toBeInTheDocument();

    const contactInModal = screen.getByRole('button', { name: 'Contact' });
    const modalContainer = contactInModal.parentElement as HTMLElement;
    // Modal Closed state
    const closeIconButton = modalContainer.querySelector('button') as HTMLButtonElement;
    fireEvent.click(closeIconButton);
    expect(screen.queryByRole('button', { name: 'Contact' })).not.toBeInTheDocument();
  });

  it('updates the active class visual styles when a desktop nav item is clicked', () => {
    render(<Header />);

    const aboutLink = screen.getByText('About');
    const workLink = screen.getByText('Work');

    // Simulating clicking on 'Work'
    fireEvent.click(workLink);

    // We check that our CSS Module active tracker successfully gets applied to the element
    expect(workLink.className).toContain('active');
    expect(aboutLink.className).not.toContain('active');
  });
});
