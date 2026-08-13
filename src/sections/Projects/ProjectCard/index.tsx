import Text from '../../../components/Text';
import type { Tag as TagType } from '../../../constants';
import Tag from '../../../components/Tag';

import styles from './ProjectCard.module.css';
import Button from '../../../components/Button';

export interface ProjectCardProps {
  image: string;
  imageAltText: string;
  title: string;
  description: string;
  tags: TagType[];
  githubUrl?: string;
  liveUrl?: string;
}
const ProjectCard = ({ image, imageAltText, title, description, tags, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>{image && <img className={styles.image} src={image} alt={imageAltText} />}</div>
      <div className={styles.cardHeader}>
        <Text variant="h3" styles={styles.title}>
          {title}
        </Text>

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
      <Text variant="xs" color="white-70" styles={styles.description}>
        {description}
      </Text>

      <div className={styles.tags}>
        {tags.map((tag) => (
          <Tag title={tag} />
        ))}
      </div>
      <div className={styles.buttons}>
        <Button variant="solid-primary" title={'GitHub'} />
        <Button title={'See Live'} />
      </div>
    </div>
  );
};

export default ProjectCard;
