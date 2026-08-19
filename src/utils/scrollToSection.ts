export const scrollToSection = (href: string) => {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};
