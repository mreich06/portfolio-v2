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
    dates: 'JAN 2026 - PRESENT',
    company: 'Lean Management Instituut',
    location: 'Zeist, The Netherlands',
    jobTitle: 'Full Stack Software Engineer',
    descriptionList: [
      'Built an internal course management platform from scratch in Next.js, React, TypeScript, Tailwind, PostgreSQL, and Prisma, implementing role-based auth (Auth.js), typed REST endpoints, Zod validation, and SFTP integration',
      'Automated course publishing by building a custom XML feed generator that integrates ActiveCampaign and external study provider APIs with server-side auth and structured error handling',
      "Established the team's first CI pipeline with GitHub Actions, running lint, typecheck, and Vitest/Playwright tests on every pull request, reducing bugs reaching staging",
      'Architected the public-facing website as a custom WordPress theme using PHP 8.2, Tailwind, Vite and Docker Compose with clean data modeling, no ACF or page builders',
    ],
    stack: ['React', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Prisma', 'Auth.js', 'Zod', 'PHP'],
  },
  {
    dates: 'JAN 2024 - JUL 2024',
    company: 'Rakuten',
    location: 'Tokyo, Japan',
    jobTitle: 'Front-End Software Engineer',
    descriptionList: [
      "Developed and shipped customer-facing features in React and TypeScript for Rakuten Ichiba, Japan's largest ecommerce platform with 40M+ active users, on one of the company's highest-revenue teams",
      'Improved page load times by 24% from 3.7s to 2.8s by implementing a hybrid SSR/CSR architecture, lazy-loading non-critical components, and reducing initial JavaScript bundle size',
      'Optimized the existing Backend-for-Frontend (BFF) layer with backend teams, reducing client-side API calls by 30%',
      'Contributed to CI/CD pipelines using AWS CodePipeline, CodeBuild, Docker, and Jenkins, integrating automated E2E testing with Playwright',
    ],
    stack: ['React', 'TypeScript', 'Jest', 'PlayWright', 'Docker', 'Jenkins'],
  },
  {
    dates: 'SEPT 2019 - NOV 2022',
    company: 'Viasat',
    location: 'San Diego, CA, USA',
    jobTitle: 'Full Stack Software Engineer',
    descriptionList: [
      'Developed MyViasat, a cross-platform React Native application for web, iOS, and Android, with end-to-end ownership of the payment portal and integrating internal Payments team APIs, improving checkout completion by 11%',
      'Led the implementation of user analytics by building a custom pixel tracker and Kibana dashboards, enabling the team to analyze user behavior and drive product improvements',
      'Transitioned the MyViasat monolith to a microservices architecture, enabling faster feature releases, reducing initial load times by 35% and cutting agent-reported software issues by 67%',
    ],
    stack: ['React Native', 'TypeScript', 'GraphQL', 'AWS', 'Jest', 'Cypress', 'Node.js', 'Jenkins', 'Docker', 'Kibana'],
  },
];
