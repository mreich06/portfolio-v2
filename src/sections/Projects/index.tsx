import SectionHeader from '../../components/SectionHeader';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import { ProjectCards } from '../../constants';
import { StaggerContainer, StaggerItem } from '../../components/motion/Stagger';

const Projects = () => {
  return (
    <>
      <SectionHeader
        sectionNumber={'03. Projects '}
        title={'Featured Work'}
        sectionDescription={'~/projects/featured'}
        descriptionSecondLine={'3 of 5 visible'}
      />
      <StaggerContainer className={styles.projectsGrid}>
        {ProjectCards.map(({ title, description, image, imageAltText, tags }) => (
          <StaggerItem key={title} hover className="card-aura">
            <ProjectCard {...{ title, description, image, imageAltText, tags }} />
          </StaggerItem>
        ))}
      </StaggerContainer>
      <div className={styles.allProjectsContainer}>
        <a className={styles.allProjects} href="https://github.com/mreich06" aria-label="github">
          View all projects on GitHub
        </a>
      </div>
    </>
  );
};

export default Projects;
