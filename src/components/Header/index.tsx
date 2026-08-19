import styles from './Header.module.css';
import Button from '../Button';
import logoSvg from '../../assets/logo.svg';
import { useEffect, useState, useRef } from 'react';
import NavModal from '../NavModal';
import { NAV_ITEMS } from '../../constants';
import { Menu } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { scrollToSection } from '../../utils/scrollToSection';

interface HeaderProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header = ({ setIsModalOpen }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (underlineRef.current) {
      // exit if none selected
      if (activeIndex === null) {
        underlineRef.current.style.transform = 'scaleX(0)';
        return;
      }
      const parent = underlineRef.current.parentElement;

      const activeItem = parent?.querySelector(`.${styles.activeItemWrapper}`) as HTMLElement;

      if (activeItem) {
        const left = activeItem.offsetLeft;
        const width = activeItem.offsetWidth * 0.75;

        underlineRef.current.style.transform = `translateX(${left}px) scaleX(${width})`;
      }
    }
  }, [activeIndex]);

  const handleItemClick = (e: React.MouseEvent, index: number, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    setActiveIndex(index);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <a href="/" aria-label="Home" className={styles.logo}>
        <img src={logoSvg} alt="logo" />
      </a>
      <nav className={styles.headerNav}>
        <ul className={styles.navItems}>
          {NAV_ITEMS.map((item, index) => (
            <li key={index} className={`${styles.navItemWrapper} ${index === activeIndex ? styles.activeItemWrapper : ''}`}>
              <a
                className={`${styles.navItem} ${index === activeIndex ? styles.active : ''}`}
                onClick={(e) => handleItemClick(e, index, item.href)}
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
          <div ref={underlineRef} className={styles.activeUnderline} />
        </ul>
      </nav>
      <Button
        variant="outline-secondary"
        className={styles.contactButton}
        onClick={() => {
          setIsModalOpen(true);
          setIsMenuOpen(false);
        }}
      >
        Get in touch
      </Button>
      <button aria-label="Toggle menu" className={styles.mobileMenuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu className={styles.menuIcon} size={30} />
      </button>

      <AnimatePresence>{isMenuOpen && <NavModal setIsModalOpen={setIsModalOpen} setIsMenuOpen={setIsMenuOpen} />}</AnimatePresence>
    </header>
  );
};

export default Header;
