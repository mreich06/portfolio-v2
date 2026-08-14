import SectionHeader from '../../components/SectionHeader';
import { WorkHistory, type Tag } from '../../constants';
import Text from '../../components/Text';
import styles from './Experience.module.css';
export interface ExperienceSectionProps {
  dates: string;
  company: string;
  location: string;
  jobTitle: string;
  descriptionList: string[];
  stack: Tag[];
}
const ExperienceSection = ({ dates, company, location, jobTitle, descriptionList, stack }: ExperienceSectionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftCol}>
        <Text variant="xs" font="mono" color="cyan">
          {dates}
        </Text>
        <Text variant="bodySmall" font="sans">
          {company}
        </Text>
        <Text variant="xs" font="sans" color="muted">
          {location}
        </Text>
      </div>
      <div className={styles.rightCol}>
        <Text className={styles.jobTitle} variant="subtitle" font="sans" color="cyan">
          {jobTitle}
        </Text>
        <Text className={styles.bullets} as="ul" variant="body" font="sans" color="cyan">
          {descriptionList.map((bulletPoint) => (
            <Text as="li" variant="xs" font="sans" color="white-70">
              {bulletPoint}
            </Text>
          ))}
        </Text>
        <div className={styles.stack}>
          {stack.map((tech) => (
            <div className={styles.stackItem}>{tech}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
const Experience = () => {
  return (
    <div>
      <SectionHeader
        sectionNumber={'02. Experience '}
        title={'Work History'}
        sectionDescription={'~/experience'}
        descriptionSecondLine={'web development roles'}
      />
      <div className={styles.experienceContainer}>
        {WorkHistory.map((item) => (
          <ExperienceSection key={item.company} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
