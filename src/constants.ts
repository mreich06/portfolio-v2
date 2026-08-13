import type { ProjectCardProps } from './sections/Projects/ProjectCard';
import spotifyDashboardImage from './assets/Projects/spotify-project.webp';
import portfolioProject from './assets/Projects/portfolio-project.webp';
import relokit from './assets/Projects/relokit.webp';

interface NavItem {
  label: string;
  href: string;
}
export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Stack', href: '/stack' },
  { label: 'Projects', href: '/project' },
] as const;

export const Tag = [
  'React',
  'TypeScript',
  'Tailwind',
  'Next.js',
  'Prisma',
  'Redux',
  'CSS Modules',
  'React Router',
  'Vitest',
  'Vercel',
  'Render',
  'PostgreSQL',
  'Auth.js v5',
  'Framer Motion',
  'Node.js',
  'Express',
  'Nodemailer',
] as const;

export type Tag = (typeof Tag)[number];
export const ProjectCards: ProjectCardProps[] = [
  {
    image: spotifyDashboardImage,
    imageAltText: 'Spotify Dashboard Project',
    title: 'Spotify Dashboard',
    description:
      'An interactive analytics dashboard that visualizes your Spotify listening habits over time. Tracks your top artists, genres, and songs across short, medium, and long-term ranges',
    tags: ['React', 'TypeScript', 'Tailwind', 'Redux', 'Next.js'],
  },
  {
    image: relokit,
    imageAltText: 'Relokit',
    title: 'Relokit',
    description:
      'A comprehensive relocation assistance platform, providing personalized guidance, document management, and community support for individuals moving abroad',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Prisma', 'Auth.js v5', 'Vercel'],
  },
  {
    image: portfolioProject,
    imageAltText: 'Previous Portfolio',
    title: 'Previous Portfolio',
    description:
      'A modern, responsive portfolio website showcasing my projects and skills. Features smooth animations, optimized performance, and a dynamic contact form',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Node.js', 'Express', 'Nodemailer', 'Vercel', 'Render'],
  },
];
