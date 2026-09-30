import type { ProjectCardProps } from './sections/Projects/ProjectCard';
import spotifyDashboardImage from './assets/Projects/spotify-project.webp';
import portfolioProject from './assets/Projects/portfolio-project.webp';
import visihire from './assets/Projects/visihire.webp';
import type { ExperienceSectionProps } from './sections/Experience';

interface NavItem {
  label: string;
  href: string;
}
export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
] as const;

export type SocialIconKey = 'github' | 'linkedin' | 'tiktok' | 'whatsapp';

interface SocialLink {
  key: SocialIconKey;
  label: string;
  href: string;
}
export const SOCIAL_LINKS: readonly SocialLink[] = [
  { key: 'github', label: 'GitHub', href: 'https://github.com/mreich06' },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/maya-reich/' },
  { key: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@abroadwithmaya' },
  { key: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/31621325571' },
] as const;

interface SectionDot {
  id: string;
  label: string;
}
export const SECTION_DOTS: readonly SectionDot[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'founding-experience', label: 'Founding Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;

export const CONTACT_EMAIL = 'mayareich0606@gmail.com';

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
    image: visihire,
    imageAltText: 'Visihire',
    title: 'Visihire',
    description:
      'A self-founded SaaS platform that gives job seekers a single connected workflow for applications, documents, and outreach, in place of scattered spreadsheets and CVs. Features a Kanban-style application tracker, a CRM for contacts, ATS-style CV scoring, and LLM-powered personalized outreach generation',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Prisma', 'Vercel'],
    liveUrl: 'https://visihire.com',
  },
  {
    image: portfolioProject,
    imageAltText: 'Previous Portfolio',
    title: 'Previous Portfolio',
    description:
      'A modern, responsive portfolio website showcasing my projects and skills. Features smooth animations, optimized performance, and a dynamic contact form',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Node.js', 'Express', 'Nodemailer', 'Vercel', 'Render'],
    githubUrl: 'https://github.com/mreich06/portfolio',
    liveUrl: 'https://portfolio-orcin-beta-24.vercel.app/',
  },
];

export const FoundingExperience: ExperienceSectionProps[] = [
  {
    dates: 'JUN 2025 - PRESENT',
    company: 'Visihire',
    location: 'Remote',
    jobTitle: 'Founder & Solo Developer',
    descriptionList: [
      'Founded Visihire (visihire.com) after identifying a gap: job seekers juggle spreadsheets, CVs, cover letters, and LinkedIn messages, and designed a single connected workflow for job applications, documents, and outreach',
      'Developed a Kanban-style application tracker and a CRM to track contacts',
      'Built ATS-style CV scoring and personalized outreach generation',
      'Integrated LLM APIs into the product using prompt design, structured output parsing, and evaluation to power CV scoring',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Prisma', 'Vercel'],
  },
];

export const WorkHistory: ExperienceSectionProps[] = [
  {
    dates: 'JAN 2026 - PRESENT',
    company: 'Lean Management Instituut',
    location: 'Zeist, The Netherlands',
    jobTitle: 'Senior Full Stack Engineer',
    descriptionList: [
      'Built an internal course management platform end-to-end in Next.js, React, TypeScript, Tailwind, PostgreSQL/Prisma, implementing role-based auth (Auth.js), Zod-validated REST endpoints, and SFTP integration for third-party feed delivery',
      'Eliminated manual course updates across multiple different platforms by integrating via REST APIs and a custom XML generator with bidirectional enrollment syncing',
      'Built and maintained a CI/CD pipeline (GitHub Actions) with Vitest and Playwright; using AI-assisted tools in daily development',
      'Developed a performant WordPress theme using PHP 8.2, Tailwind, Vite and Docker with custom data architecture',
    ],
    stack: ['React', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Prisma', 'Auth.js', 'Zod', 'PHP'],
  },
  {
    dates: 'DEC 2023 - JUL 2024',
    company: 'Rakuten',
    location: 'Tokyo, Japan',
    jobTitle: 'Front-End Engineer',
    descriptionList: [
      "Developed customer-facing features in React/TypeScript for Rakuten Ichiba, Japan's largest e-commerce platform (40M+ users)",
      'Improved page load times by 21% from 3.7s to 2.9s by implementing a hybrid SSR/CSR architecture, lazy-loading non-critical components, and reducing initial JavaScript bundle size',
      'Optimized the existing Backend-for-Frontend (BFF) layer with backend teams, reducing client-side API calls by 17%',
      'Contributed to CI/CD pipelines using AWS CodePipeline, CodeBuild, Docker and Jenkins, and E2E testing with Playwright',
    ],
    stack: ['React', 'TypeScript', 'Jest', 'PlayWright', 'Docker', 'Jenkins'],
  },
  {
    dates: 'SEPT 2019 - NOV 2022',
    company: 'Viasat',
    location: 'San Diego, CA, USA',
    jobTitle: 'Full Stack Engineer',
    descriptionList: [
      'Developed MyViasat, a cross-platform React Native application for web, iOS, and Android, with end-to-end ownership of the payment portal and integrating internal Payments team APIs, improving checkout completion by 11%',
      'Led the implementation of user analytics by building a custom pixel tracker and Kibana dashboards, enabling the team to analyze user behavior and drive product improvements',
      'Transitioned the MyViasat monolith to a microservices architecture, enabling faster feature releases, reducing initial load times by 35% and cutting agent-reported software issues by 53%',
    ],
    stack: ['React Native', 'TypeScript', 'GraphQL', 'AWS', 'Jest', 'Cypress', 'Node.js', 'Jenkins', 'Docker', 'Kibana'],
  },
];
