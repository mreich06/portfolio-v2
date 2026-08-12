import styles from './About.module.css';
import Text from '../../components/Text';
interface AboutProps {
  title: string;
  description: string;
}
const AboutSection = ({ title, description }: AboutProps) => {
  return (
    <div>
      <div className={styles.sectionContainer}>
        <Text variant="h3" color="white">
          {title}
        </Text>
        <Text variant="xs" color="white-70">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default AboutSection;
