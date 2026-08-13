import styles from './SectionHeader.module.css';
import Text from '../Text';

interface SectionHeaderProps {
  sectionNumber: string;
  title: string;
}
const SectionHeader = ({ sectionNumber, title }: SectionHeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.divider} />
      <div className={styles.titleSection}>
        <Text variant="eyebrow" font="mono" as="h2">
          {sectionNumber}
        </Text>
        <Text variant="h2" font="sans">
          {title}
        </Text>
      </div>
    </div>
  );
};

export default SectionHeader;
