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
          I am a detail-oriented and highly adaptable Full Stack Web and Mobile Software Engineer with 4 years of experience developing enterprise
          applications...
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
