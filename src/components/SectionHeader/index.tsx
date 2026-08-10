import React from 'react';
import styles from './SectionHeader.module.css';

const SectionHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divider} />
      <div className={styles.titleSection}>
        <h5 className="color-cyan font-mono-xs">01. About Me</h5>
        <h1 className="font-sans-2xl color-white bold weight-heavy">My journey</h1>
      </div>
    </div>
  );
};

export default SectionHeader;
