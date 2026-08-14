import styles from './SectionHeader.module.css';
import Text from '../Text';

interface SectionHeaderProps {
  sectionNumber: string;
  title: string;
  sectionDescription: string;
  descriptionSecondLine: string;
}
const SectionHeader = ({ sectionNumber, title, sectionDescription, descriptionSecondLine }: SectionHeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.divider} />
      <div className={styles.titleSection}>
        <div className={styles.left}>
          <Text variant="eyebrow" font="mono" as="h2">
            {sectionNumber}
          </Text>
          <Text variant="h2" font="sans">
            {title}
          </Text>
        </div>
        <div className={styles.right}>
          <Text variant="xxs" font="mono" color="muted">
            {sectionDescription}
          </Text>
          <Text variant="xxs" font="mono" color="muted">
            {descriptionSecondLine}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
