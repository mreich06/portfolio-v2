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

interface HeroProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero = ({ setIsModalOpen }: HeroProps) => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume.pdf';
    link.click();
  };
  return (
    <div className={styles.hero} id="hero">
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
          <Text variant="body" font="grotesk" color="white-75" className={styles.heroText}>
            I’m a <span className="color-cyan">full-stack software engineer</span> who builds production-ready web and mobile applications from
            frontend to backend. With experience in <span className="color-cyan">React</span>, <span className="color-cyan">TypeScript</span>,{' '}
            <span className="color-cyan">Node.js</span>, and cloud infrastructure, I care about creating software that is fast, scalable, and
            genuinely useful, from enterprise applications serving <span className="color-cyan">millions</span> of users to products built from the
            ground up.
          </Text>
        </StaggerItem>

        <StaggerItem className={styles.buttonContainer}>
          <Button variant="solid-primary" bold upperCase large onClick={downloadResume}>
            Download Resume
          </Button>
          <Button variant="outline-secondary" className={styles.contactCta} bold upperCase large onClick={() => setIsModalOpen(true)}>
            Get in touch
          </Button>
        </StaggerItem>
      </StaggerContainer>
      <FadeUp className={styles.heroPhoto} delay={0.2}>
        <div className={styles.photoStack}>
          <span className={styles.photoLabelTop}>Full Stack Developer</span>
          <img className={styles.photo} src={image} alt="profile photo" />
          <span className={styles.photoLabelBottom} aria-hidden="true">
            Full Stack Developer
          </span>
        </div>
      </FadeUp>
    </div>
  );
};

export default Hero;
