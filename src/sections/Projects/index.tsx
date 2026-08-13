import SectionHeader from '../../components/SectionHeader';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import { ProjectCards } from '../../constants';
const Projects = () => {
  return (
    <div>
      <SectionHeader sectionNumber={'03. Projects '} title={'Featured Work'} />
      <div className={styles.projectsGrid}>
        {ProjectCards.map(({ title, description, image, imageAltText, tags }) => (
          <ProjectCard key={title} {...{ title, description, image, imageAltText, tags }} />
        ))}
      </div>
      <div className={styles.allProjectsContainer}>
        <a className={styles.allProjects} href="https://github.com/mreich06" aria-label="github">
          View all projects on GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
