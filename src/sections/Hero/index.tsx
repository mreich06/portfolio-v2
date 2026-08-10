import React from 'react';
import styles from './Hero.module.css';
import Button from '../../components/Button';
import image from '../../assets/profile-photo.webp';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h5 className="font-sans-lg color-cyan">Hello, I'm</h5>
        <h1 className="font-sans-3xl weight-bold color-white">Maya Reich</h1>
        <h3 className="font-sans-xl weight-bold color-muted">Snowboarding enthusiast on a code journey</h3>
        <h4 className="font-sans-base color-white-70">
          I am a detail-oriented and highly adaptable Full Stack Web and Mobile Software Engineer with 4 years of experience developing enterprise
          applications.
        </h4>
        <div className={styles.buttonContainer}>
          <Button title={'View my work'} variant="solid-primary" bold upperCase />
          <Button title={'Get in touch'} variant="outline-secondary" bold upperCase />
        </div>
      </div>
      <div className={styles.heroPhoto}>
        <img className={styles.photo} src={image} alt="profile photo" />
      </div>
    </div>
  );
};

export default Hero;
