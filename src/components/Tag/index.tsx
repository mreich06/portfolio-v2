import styles from './Tag.module.css';

const Tag = ({ title }: { title: string }) => {
  return <div className={styles.tag}>{title}</div>;
};

export default Tag;
