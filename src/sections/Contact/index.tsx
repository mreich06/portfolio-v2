import Button from '../../components/Button';
import SectionHeader from '../../components/SectionHeader';
import Text from '../../components/Text';
import styles from './Contact.module.css';
import ContactForm from './ContactForm';

const contactInfo = [
  { key: 'location', value: 'Amsterdam, NL' },
  { key: 'status', value: 'accepting work · Q3 2026' },
  { key: 'github', value: '@mreich06' },
  { key: 'linkedin', value: '/maya-reich' },
];

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <SectionHeader
        sectionNumber={'05. Contact'}
        title={"Let's create something together."}
        sectionDescription={'~/contact'}
        descriptionSecondLine={'Usually replies within 24 hours'}
      />
      <div className={styles.columns}>
        <div className={styles.container}>
          <Text variant="body" font="mono" styles={'color: var(--primary)'}>
            mayareich0606@gmail.com
          </Text>
          <div className={styles.contactInfo}>
            {contactInfo.map(({ key, value }, index) => (
              <div key={index} className={styles.line}>
                <Text variant="xs" font="mono" color="muted">
                  {`${key}:`}
                </Text>
                <Text variant="xs" font="mono" color="cyan">
                  {value}
                </Text>
              </div>
            ))}
          </div>
          <div className={styles.scheduleCall}>
            <div>
              <Text variant="xs" font="sans" color="muted">
                Prefer to chat face-to-face?
              </Text>
            </div>
            <Button>book a 30 min video call</Button>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
