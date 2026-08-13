import { useState } from 'react';
import type { Tag as TagType } from '../../constants';
import styles from './TagSection.module.css';
import Tag from '../Tag';

const VISIBLE_COUNT = 4;

const TagSection = ({ tags }: { tags: TagType[] }) => {
  const [showMore, setShowMore] = useState(false);
  const shownTags = showMore ? tags : tags.slice(0, VISIBLE_COUNT);
  const hiddenCount = tags.length - VISIBLE_COUNT;

  return (
    <div className={styles.tags}>
      {shownTags.map((tag) => (
        <Tag key={tag} title={tag} />
      ))}
      {!showMore && hiddenCount > 0 && (
        <button className={styles.showMore} onClick={() => setShowMore(true)}>{`+${hiddenCount}`}</button>
      )}
    </div>
  );
};

export default TagSection;
