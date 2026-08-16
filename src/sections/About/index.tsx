import SectionHeader from '../../components/SectionHeader';
import styles from './About.module.css';
import * as BadgeLogos from '../../assets/BadgeLogos';
import HobbyBadge from '../../components/HobbyBadge';
import Text from '../../components/Text';
import FadeUp from '../../components/motion/FadeUp';
import { StaggerContainer, StaggerItem } from '../../components/motion/Stagger';
const About = () => {
  return (
    <div>
      <SectionHeader
        sectionNumber={'01. About Me'}
        title={'My journey'}
        sectionDescription={'~/about'}
        descriptionSecondLine={'work && personal life'}
      />

      <div className={styles.container}>
        <FadeUp className={styles.leftCol}>
          <div>
            <div className={styles.sectionContainer}>
              <Text variant="h3" font="sans" color="white">
                Who I am
              </Text>
              <Text variant="bodySmall" font="sans" color="white-70">
                My journey into software started with a Computer Science degree at Middlebury College and has taken me across the U.S., Japan, and the
                Netherlands. I've worked in very different environments, from a large technology company in San Diego, to Rakuten in Tokyo, to smaller
                teams in the Netherlands where I've worked across the stack. Working across cultures, teams, and time zones has taught me to adapt
                quickly, communicate clearly, and approach problems from different perspectives.
              </Text>
              <Text variant="bodySmall" font="sans" color="white-70">
                Outside of code, I like to keep moving and creating. I enjoy running, snowboarding, traveling, and exploring new places and cultures.
                I also enjoy creative pursuits like drawing and experimenting with design. That curiosity carries into how I approach software: I'm
                always learning, experimenting, and looking for ways to make things better.
              </Text>
            </div>
          </div>
        </FadeUp>

        <FadeUp className={styles.terminalContainer} delay={0.15}>
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

          {[
            { command: '$ whoami', output: 'maya' },
            { command: '$ pwd', output: '/Users/maya/career/lmi' },
            { command: '$ echo $CURRENT_FOCUS', output: 'Full Stack Web Development' },
            { command: '$ echo $BASED_IN', output: 'Amsterdam, Netherlands' },
            { command: '$ echo $INTERESTS', output: 'Web Development · UX · Creative Technology' },
          ].map(({ command, output }) => (
            <div key={command} className={styles.terminalLine}>
              <div className={styles.terminalInput}>{command}</div>
              <div className={styles.terminalOutput}>{output}</div>
            </div>
          ))}
          <div className={styles.terminalFooter}>
            <div>$ status: Available for opportunities</div>
            <div>$ response_time: Usually within 24 hours</div>
          </div>
        </FadeUp>
      </div>

      {/* Bottom Beyond the job section */}
      <div className={styles.bottomSection}>
        <div className={styles.beyondHeader}>
          {/* change text */}
          <h3>Beyond the job</h3>
          <h5>INTERESTS AND VALUES</h5>
        </div>
        <StaggerContainer className={styles.badgeContainer} staggerChildren={0.08}>
          {Object.entries(BadgeLogos).map(([name, src]) => (
            <StaggerItem key={name} hover>
              <HobbyBadge icon={src} label={name} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
};

export default About;
