import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import TagSection from './index';
import type { Tag as TagType } from '../../constants';

describe('TagSection', () => {
  const manyTags: TagType[] = ['React', 'TypeScript', 'Tailwind', 'Next.js', 'Prisma', 'Redux', 'Vercel'];

  it('renders every tag when there are 4 or fewer', () => {
    const tags: TagType[] = ['React', 'TypeScript', 'Tailwind'];
    render(<TagSection tags={tags} />);

    tags.forEach((tag) => expect(screen.getByText(tag)).toBeInTheDocument());
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders every tag with no button when there are exactly 4', () => {
    const tags: TagType[] = ['React', 'TypeScript', 'Tailwind', 'Next.js'];
    render(<TagSection tags={tags} />);

    tags.forEach((tag) => expect(screen.getByText(tag)).toBeInTheDocument());
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('shows only the first 4 tags plus a button with the count of hidden tags', () => {
    render(<TagSection tags={manyTags} />);

    manyTags.slice(0, 4).forEach((tag) => expect(screen.getByText(tag)).toBeInTheDocument());
    manyTags.slice(4).forEach((tag) => expect(screen.queryByText(tag)).not.toBeInTheDocument());

    expect(screen.getByRole('button', { name: '+3' })).toBeInTheDocument();
  });

  it('reveals the remaining tags and hides the button when clicked', () => {
    render(<TagSection tags={manyTags} />);

    fireEvent.click(screen.getByRole('button', { name: '+3' }));

    manyTags.forEach((tag) => expect(screen.getByText(tag)).toBeInTheDocument());
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
