import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import ProjectCard from './index';
import type { Tag as TagType } from '../../../constants';

describe('ProjectCard', () => {
  const baseProps = {
    title: 'Spotify Dashboard',
    description: 'An analytics dashboard for Spotify listening habits.',
    tags: ['React', 'TypeScript'] as TagType[],
    image: '',
    imageAltText: 'Spotify Dashboard',
  };

  it('renders the title and description', () => {
    render(<ProjectCard {...baseProps} />);

    expect(screen.getByText('Spotify Dashboard')).toBeInTheDocument();
    expect(screen.getByText('An analytics dashboard for Spotify listening habits.')).toBeInTheDocument();
  });

  it('renders a tag for each entry in tags', () => {
    render(<ProjectCard {...baseProps} />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders the project image when an image src is provided', () => {
    render(<ProjectCard {...baseProps} image="mock-project.webp" imageAltText="Spotify Dashboard Project" />);

    const img = screen.getByRole('img', { name: 'Spotify Dashboard Project' });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'mock-project.webp');
  });

  it('does not render an image when the image src is empty', () => {
    render(<ProjectCard {...baseProps} title="Relokit" image="" imageAltText="Relokit" />);

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.getByText('Relokit')).toBeInTheDocument();
  });

  it('does not render github or live links when their urls are omitted', () => {
    render(<ProjectCard {...baseProps} />);

    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });

  it('renders a github link when githubUrl is provided', () => {
    render(<ProjectCard {...baseProps} githubUrl="https://github.com/example/repo" />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute('href', 'https://github.com/example/repo');
    expect(links[0]).toHaveAttribute('target', '_blank');
    expect(links[0]).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders a live link when liveUrl is provided', () => {
    render(<ProjectCard {...baseProps} liveUrl="https://example.com" />);

    const link = screen.getByRole('link', { name: 'See Live' });
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders both links when both urls are provided', () => {
    render(<ProjectCard {...baseProps} githubUrl="https://github.com/example/repo" liveUrl="https://example.com" />);

    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
});
