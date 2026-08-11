import SectionHeader from '../../components/SectionHeader';
import styles from './About.module.css';
import AboutSection from './AboutSection';
import * as BadgeLogos from '../../assets/BadgeLogos';
import HobbyBadge from '../../components/HobbyBadge';

const About = () => {
  return (
    <div>
      <SectionHeader sectionNumber={'01. About Me'} title={'My journey'} />

      <div className={styles.container}>
        <div className={styles.leftCol}>
          <AboutSection
            title={'Who I am'}
            description={
              'I am a detail-oriented and highly adaptable Full Stack Web and Mobile Software Engineer with 4 years of experience developing enterprise applications.'
            }
          />
          <AboutSection
            title={'Who I am'}
            description={
              'I am a detail-oriented and highly adaptable Full Stack Web and Mobile Software Engineer with 4 years of experience developing enterprise applications.'
            }
          />
        </div>

        <div className={styles.terminalContainer}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalDots}>
              {['#ff5f56', '#ffbd2e', '#27c93f'].map((color, index) => (
                <span key={index} style={{ color }}>
                  ●
                </span>
              ))}
            </div>
            <div className={styles.terminalHeaderText}>my_info.sh</div>
          </div>

          <div className={styles.terminalInput}>$ whoami</div>
          <div className={styles.terminalOutput}>maya</div>
          <div className={styles.terminalInput}>$ pwd</div>
          <div className={styles.terminalOutput}>/Users/maya/career/lmi</div>
          <div className={styles.terminalInput}>$ echo $CURRENT_FOCUS</div>
          <div className={styles.terminalOutput}>Full Stack Web Development</div>
          <div className={styles.terminalFooter}>
            <div>$ status: Available for opportunities</div>
            <div>$ response_time: Usually within 24 hours</div>
          </div>
        </div>
      </div>

      {/* Bottom Beyond the job section */}
      <div className={styles.bottomSection}>
        <div className={styles.beyondHeader}>
          <h3>Beyond the job</h3>
          <h5>INTERESTS AND VALUES</h5>
        </div>
        <div className={styles.badgeContainer}>
          {Object.entries(BadgeLogos).map(([name, src]) => (
            <HobbyBadge key={name} icon={src} label={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
