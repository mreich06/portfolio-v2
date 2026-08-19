import styles from './NavModal.module.css';
import { NAV_ITEMS } from '../../constants';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../../utils/scrollToSection';

interface NavModalProps {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavModal = ({ setIsMenuOpen, setIsModalOpen }: NavModalProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <motion.div
      className={styles.modal}
      initial={{ opacity: 0, y: -16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <button className={styles.closeButton} onClick={() => setIsMenuOpen(false)}>
        <X size={20} />
      </button>

      {NAV_ITEMS.map((item) => (
        <a href={item.href} key={item.label} className={styles.modalItem} onClick={(e) => handleScroll(e, item.href)}>
          {item.label}
        </a>
      ))}
      <button
        className={styles.contactButton}
        onClick={() => {
          setIsMenuOpen(false);
          setIsModalOpen(true);
        }}
      >
        Contact
      </button>
    </motion.div>
  );
};

export default NavModal;
