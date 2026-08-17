import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './TypewriterText.module.css';

interface TypewriterTextProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const TypewriterText = ({ phrases, typingSpeed = 55, deletingSpeed = 30, pauseDuration = 1800, className = '' }: TypewriterTextProps) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];

    if (!isDeleting && text === currentPhrase) {
      const pause = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(pause);
    }

    if (isDeleting && text === '') {
      const advance = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 0);
      return () => clearTimeout(advance);
    }

    const timeout = setTimeout(
      () => {
        setText(currentPhrase.slice(0, isDeleting ? text.length - 1 : text.length + 1));
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {text}
      <motion.span
        className={styles.cursor}
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: 'linear', times: [0, 0.5, 0.5, 1] }}
      />
    </span>
  );
};

export default TypewriterText;
