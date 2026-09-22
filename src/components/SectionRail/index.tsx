import { useEffect, useRef, useState } from 'react';
import styles from './SectionRail.module.css';
import { SECTION_DOTS, CONTACT_EMAIL } from '../../constants';
import { scrollToSection } from '../../utils/scrollToSection';

const SectionRail = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = SECTION_DOTS.map(({ id }) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = elements.indexOf(entry.target as HTMLElement);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <aside className={styles.rail} aria-label="Section navigation">
      <ul className={styles.dots}>
        {SECTION_DOTS.map(({ id, label }, index) => (
          <li key={id}>
            <button
              type="button"
              aria-label={`Go to ${label} section`}
              aria-current={index === activeIndex}
              className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => scrollToSection(`#${id}`)}
            />
          </li>
        ))}
      </ul>
      <a href={`mailto:${CONTACT_EMAIL}`} className={styles.email}>
        {CONTACT_EMAIL}
      </a>
      <span className={styles.line} aria-hidden="true" />
    </aside>
  );
};

export default SectionRail;
