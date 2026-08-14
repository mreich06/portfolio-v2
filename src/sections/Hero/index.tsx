import styles from './Hero.module.css';
import Button from '../../components/Button';
import image from '../../assets/profile-photo.webp';
import Text from '../../components/Text';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h5 className="font-sans-lg color-cyan">Hello, I'm</h5>
        <Text variant="h1" font="sans" color="white">
          Maya Reich
        </Text>
        <Text variant="h3" font="sans" color="muted">
          Snowboarding enthusiast on a code journey
        </Text>
        <Text variant="body" font="sans" color="white-70">
          I’m a full-stack software engineer who builds production-ready web and mobile applications from frontend to backend. With experience in
          React, TypeScript, Node.js, and cloud infrastructure, I care about creating software that is fast, scalable, and genuinely useful, from
          enterprise applications serving millions of users to products built from the ground up.
        </Text>

        <div className={styles.buttonContainer}>
          <Button variant="solid-primary" bold upperCase>
            View my work
          </Button>
          <Button variant="outline-secondary" bold upperCase>
            Get in touch
          </Button>
        </div>
      </div>
      <div className={styles.heroPhoto}>
        <img className={styles.photo} src={image} alt="profile photo" />
      </div>
    </div>
  );
};

export default Hero;
