import Button from '../../../components/Button';
import type { Tag } from '../../../constants';
import styles from './ProjectCard.module.css';

export interface ProjectCardProps {
  image: string;
  imageAltText: string;
  title: string;
  description: string;
  tags: Tag[];
  githubUrl?: string;
  liveUrl?: string;
}
const ProjectCard = ({ image, imageAltText, title, description, tags, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      {image && (
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image} alt={imageAltText} />
        </div>
      )}
      <div className={styles.cardHeader}>
        <h3 className={`${styles.title} font-sans-lg weight-bold color-white`}>{title}</h3>
        <div className={styles.links}>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              &#xe900; {/* or use an SVG/icon component */}
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              ↗
            </a>
          )}
        </div>
      </div>
      <p className={`${styles.description} font-sans-base color-white-70`}>{description}</p>

      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={`${styles.tag} font-mono-sm`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
