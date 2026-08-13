import styles from './Header.module.css';
import Button from '../Button';
import logoSvg from '../../assets/logo.svg';
import { useEffect, useState, useRef } from 'react';
import NavModal from '../NavModal';
import { NAV_ITEMS } from '../../constants';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);

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

  const handleItemClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
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
                onClick={(e) => handleItemClick(e, index)}
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
          <div ref={underlineRef} className={styles.activeUnderline} />
        </ul>
      </nav>
      <Button variant="outline-secondary" className={styles.contactButton} title={'Get in touch'} />
      <button className={styles.mobileMenuButton} onClick={() => setIsModalOpen(!isModalOpen)}>
        <Menu className={styles.menuIcon} size={30} />
      </button>

      {isModalOpen && <NavModal setIsModalOpen={setIsModalOpen} />}
    </header>
  );
};

export default Header;
