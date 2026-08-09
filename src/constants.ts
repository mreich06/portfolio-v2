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
