import styles from './NavModal.module.css';
import { NAV_ITEMS } from '../../constants';
import { X } from 'lucide-react';

interface NavModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavModal = ({ setIsModalOpen }: NavModalProps) => {
  return (
    <div className={styles.modal}>
      <button onClick={() => setIsModalOpen(false)}>
        <X className={styles.closeIcon} size={20} />
      </button>

      {NAV_ITEMS.map((item) => (
        <button className={styles.modalItem}>{item.label}</button>
      ))}
      <button className={styles.contactButton}>Contact</button>
    </div>
  );
};

export default NavModal;
