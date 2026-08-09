import styles from './Header.module.css';
import Button from '../Button';
import logoSvg from '../../assets/logo.svg';
import { useEffect, useState } from 'react';

const navItemList = ['About', 'Work', 'Stack', 'Projects'];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const item = navItemList.find((item) => `/${item.toLowerCase()}` === currentPath);
    setActiveItem(item || '');
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <a href="/" aria-label="Home" className={styles.logo}>
        <img src={logoSvg} alt="logo" />
      </a>
      <nav className={styles.headerNav}>
        <ul className={styles.navItems}>
          {navItemList.map((item, index) => (
            <li>
              <a key={index} className={`${styles.navItem} ${activeItem === item ? styles.active : ''}`} href={`/${item.toLowerCase()}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Button title={'Get in touch'} />
    </header>
  );
};

export default Header;
