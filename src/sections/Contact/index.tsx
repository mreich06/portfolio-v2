import { useState } from 'react';
import Button from '../../components/Button';
import SectionHeader from '../../components/SectionHeader';
import Text from '../../components/Text';
import styles from './Contact.module.css';
import ContactForm from './ContactForm';
import { PopupModal } from 'react-calendly';

type ContactInfoType = { key: string; value: string; link?: string };

const contactInfo: ContactInfoType[] = [
  { key: 'location', value: 'Amsterdam, NL' },
  { key: 'status', value: 'accepting work · Q3 2026' },
  { key: 'github', value: '@mreich06', link: 'https://github.com/mreich06' },
  { key: 'linkedin', value: '/maya-reich', link: 'https://www.linkedin.com/in/maya-reich/' },
];

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const calendlyUrl = 'https://calendly.com/mayareich';

  return (
    <div className={styles.contactContainer}>
      <SectionHeader
        sectionNumber={'05. Contact'}
        title={"Let's create something together."}
        sectionDescription={'~/contact'}
        descriptionSecondLine={'Usually replies within 24 hours'}
        secondLineHighlight
      />
      <div className={styles.columns}>
        <div className={styles.container}>
          <Text variant="body" font="mono" styles={'color: var(--primary)'}>
            mayareich0606@gmail.com
          </Text>
          <div className={styles.contactInfo}>
            {contactInfo.map(({ key, value, link }, index) => (
              <div key={index} className={styles.line}>
                <Text variant="xs" font="mono" color="muted">
                  {`${key}:`}
                </Text>
                <Text as={link ? 'a' : 'span'} variant="xs" font="mono" color="cyan" {...(link && { href: link })}>
                  {value}
                </Text>
              </div>
            ))}
          </div>
          <div className={styles.scheduleCall}>
            <div>
              <Text variant="xs" font="sans">
                Prefer to chat face-to-face?
              </Text>
            </div>
            <Button onClick={() => setIsOpen(true)}>book a 30 min video call</Button>
          </div>
        </div>
        <ContactForm />
        <PopupModal
          url={calendlyUrl}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.getElementById('root') || document.body}
        />
      </div>
    </div>
  );
};

export default Contact;
