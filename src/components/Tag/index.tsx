import styles from './Tag.module.css';
import { motion } from 'framer-motion';

const Tag = ({ title }: { title: string }) => {
  return (
    <motion.div className={styles.tag} whileHover={{ scale: 1.08, y: -1 }} transition={{ duration: 0.15 }}>
      {title}
    </motion.div>
  );
};

export default Tag;
