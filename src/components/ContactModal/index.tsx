import styles from './ContactModal.module.css';
import ContactForm from '../../sections/Contact/ContactForm';
import Text from '../../components/Text';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { easeOut, fadeInVariants, fadeUpVariants } from '../motion/variants';
interface ContactModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ContactModal = ({ setIsModalOpen }: ContactModalProps) => {
  const handleClickOutsideModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <motion.div
      className={styles.container}
      onClick={(e) => handleClickOutsideModal(e)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeInVariants}
      transition={{ duration: 0.3, ease: easeOut }}
    >
      <motion.div className={styles.background} variants={fadeUpVariants} transition={{ duration: 0.5, ease: easeOut }}>
        <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
          <X />
        </button>
        <Text variant="h2" font="sans" color="white">
          Let's build something together
        </Text>
        <Text variant="bodySmall" font="sans" color="cyan">
          Send me a message! I usually reply within 24 hours and am always open to new opportunities!
        </Text>
        <div className={styles.contactModal}>
          <ContactForm />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;
