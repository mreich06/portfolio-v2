import type { ProjectCardProps } from './sections/Projects/ProjectCard';
import spotifyDashboardImage from './assets/Projects/spotify-project.webp';
import portfolioProject from './assets/Projects/portfolio-project.webp';
import relokit from './assets/Projects/relokit.webp';
import type { ExperienceSectionProps } from './sections/Experience';

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
  'React Native',
  'TypeScript',
  'GraphQL',
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
  'Auth.js',
  'Zod',
  'AWS',
  'Jest',
  'Cypress',
  'PlayWright',
  'Vercel',
  'PHP',
  'Figma',
  'Kibana',
  'Jenkins',
  'Docker',
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
    githubUrl: 'https://github.com/mreich06/spotify-dashboard',
  },
  {
    image: relokit,
    imageAltText: 'Relokit',
    title: 'Relokit',
    description:
      'A comprehensive relocation assistance platform, providing personalized guidance, document management, and community support for individuals moving abroad',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Prisma', 'Auth.js v5', 'Vercel'],
    githubUrl: 'https://github.com/mreich06/relokit',
  },
  {
    image: portfolioProject,
    imageAltText: 'Previous Portfolio',
    title: 'Previous Portfolio',
    description:
      'A modern, responsive portfolio website showcasing my projects and skills. Features smooth animations, optimized performance, and a dynamic contact form',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Node.js', 'Express', 'Nodemailer', 'Vercel', 'Render'],
    githubUrl: 'https://github.com/mreich06/portfolio',
    liveUrl: 'https://mayareich.dev',
  },
];

export const WorkHistory: ExperienceSectionProps[] = [
  {
    dates: 'Jan 2026 - Present',
    company: 'Lean Management Instituut',
    location: 'Zeist, The Netherlands',
    jobTitle: 'Full Stack Software Engineer',
    descriptionList: [
      'Developed an internal course management platform in Next.js (App Router), React, TypeScript, Tailwind, PostgreSQL, Prisma, Auth.js and Zod with role-based auth, typed REST endpoints and SFTP integration',
      'Automated course publishing via a custom XML feed generator, integrating ActiveCampaign and study provider APIs with server-side auth and error handling',
      'Established Vitest/Playwright testing and a GitHub Actions CI pipeline with lint, typecheck and tests on every PR',
      'Architected the public website as a custom WordPress theme (PHP 8.2, Tailwind, Vite, Docker Compose) with separated data modeling, no ACF or page builders',
    ],
    stack: ['React', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Prisma', 'Auth.js', 'Zod', 'PHP'],
  },
  {
    dates: 'Jan 2024 - Jul 2024',
    company: 'Rakuten',
    location: 'Tokyo, Japan',
    jobTitle: 'Front-End Software Engineer',
    descriptionList: [
      "Developed features in React and TypeScript for Rakuten Ichiba (Japan's largest e-commerce platform, 200M+ product listings) on one of the company's highest-revenue teams",
      'Optimized page performance with a hybrid SSR/CSR architecture, lazy-loading on-critical components and reducing initial JS payload',
      'Integrated a Backend-for-Frontend (BFF) layer with cross-functional teams for streamlined data aggregation and API management',
      'Built CI/CD pipelines using AWS CodePipeline, CodeBuild and Docker, with automated E2E tests using Mocha and Jenkins',
    ],
    stack: ['React', 'TypeScript', 'Jest', 'PlayWright', 'Docker', 'Jenkins'],
  },
  {
    dates: 'Sept 2019 - Nov 2022',
    company: 'Viasat',
    location: 'San Diego, CA, USA',
    jobTitle: 'Full Stack Software Engineer',
    descriptionList: [
      "Developed MyViasat, a cross-platform React Native application for web, iOS and Android, used by Viasat's Wi-Fi customers",
      'Led the implementation of user analytics by building a pixel tracker to log engagement data, and Kibana dashboards for monitoring user behavior and API requests',
      'Transitioned MyViasat to a microservices architecture for faster deployment and better customer experience',
      'Led the configuration and monitoring of dashboards in Kibana, including user analytics and API request logging',
      'Represented engineering team in stakeholder demos, communicating progress and gathering feedback to shape the product roadmap',
    ],
    stack: ['React Native', 'TypeScript', 'GraphQL', 'AWS', 'Jest', 'Cypress', 'Node.js', 'Jenkins', 'Docker', 'Kibana'],
  },
];
