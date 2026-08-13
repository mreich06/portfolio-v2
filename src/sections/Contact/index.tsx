import SectionHeader from '../../components/SectionHeader';
import Text from '../../components/Text';
import styles from './Contact.module.css';

const contactInfo = [
  { key: 'location', value: 'Amsterdam, NL' },
  { key: 'status', value: 'accepting work · Q3 2026' },
  { key: 'github', value: '@mreich06' },
  { key: 'linkedin', value: '/maya-reich' },
];

const Contact = () => {
  return (
    <>
      <SectionHeader sectionNumber={'05. Contact'} title={"Let's build something."} />
      <div className={styles.container}>
        <Text variant="body" font="mono" styles={'color: var(--primary)'}>
          mayareich0606@gmail.com
        </Text>
        <div className={styles.contactInfo}>
          {contactInfo.map(({ key, value }, index) => (
            <div key={index} className={styles.line}>
              <Text variant="xxs" font="sans" color="muted">
                {`${key}:   `}
              </Text>
              <Text variant="xxs" font="sans" color="cyan">
                {value}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
