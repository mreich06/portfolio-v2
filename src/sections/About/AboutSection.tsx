import styles from './About.module.css';

interface AboutProps {
  title: string;
  description: string;
}
const AboutSection = ({ title, description }: AboutProps) => {
  return (
    <div>
      <div className={styles.sectionContainer}>
        <h3 className="font-sans-lg bold color-white">{title}</h3>
        <h5 className="font-sans-xs color-white-70">{description}</h5>
      </div>
    </div>
  );
};

export default AboutSection;
