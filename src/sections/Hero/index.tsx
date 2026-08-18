import styles from './Hero.module.css';
import Button from '../../components/Button';
import image from '../../assets/profile-photo.webp';
import Text from '../../components/Text';
import TypewriterText from '../../components/motion/TypewriterText';
import FadeUp from '../../components/motion/FadeUp';
import { StaggerContainer, StaggerItem } from '../../components/motion/Stagger';
import resumeUrl from '../../assets/maya-reich-resume.pdf';

const TAGLINES = [
  'Snowboarding enthusiast on a code journey',
  'Runner, traveler, full-stack engineer',
  'Curious builder, always learning something new',
];

const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume.pdf';
    link.click();
  };
  return (
    <div className={styles.hero}>
      <StaggerContainer className={styles.heroText} staggerChildren={0.15}>
        <StaggerItem>
          <h5 className="font-sans-lg color-cyan">Hello, I'm</h5>
        </StaggerItem>
        <StaggerItem>
          <Text variant="h1" font="sans" color="white">
            Maya Reich
          </Text>
        </StaggerItem>
        <StaggerItem>
          <Text variant="subtitle" font="sans" color="muted">
            <TypewriterText phrases={TAGLINES} />
          </Text>
        </StaggerItem>
        <StaggerItem>
          <Text variant="bodySmall" font="sans" color="white-70">
            I’m a full-stack software engineer who builds production-ready web and mobile applications from frontend to backend. With experience in
            React, TypeScript, Node.js, and cloud infrastructure, I care about creating software that is fast, scalable, and genuinely useful, from
            enterprise applications serving millions of users to products built from the ground up.
          </Text>
        </StaggerItem>

        <StaggerItem className={styles.buttonContainer}>
          <Button variant="solid-primary" bold upperCase onClick={downloadResume}>
            Download Resume
          </Button>
          <Button variant="outline-secondary" bold upperCase>
            Get in touch
          </Button>
        </StaggerItem>
      </StaggerContainer>
      <FadeUp className={styles.heroPhoto} delay={0.2}>
        <img className={styles.photo} src={image} alt="profile photo" />
      </FadeUp>
    </div>
  );
};

export default Hero;
