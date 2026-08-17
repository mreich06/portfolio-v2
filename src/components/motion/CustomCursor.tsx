import { useEffect } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const shouldReduceMotion = useReducedMotion();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const dotX = useSpring(cursorX, { damping: 40, stiffness: 2000 });
  const dotY = useSpring(cursorY, { damping: 40, stiffness: 2000 });

  const ringX = useSpring(cursorX, { damping: 34, stiffness: 700 });
  const ringY = useSpring(cursorY, { damping: 34, stiffness: 700 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [shouldReduceMotion, cursorX, cursorY]);

  if (shouldReduceMotion) return null;

  return (
    <>
      <motion.div className={styles.ring} style={{ x: ringX, y: ringY }} />
      <motion.div className={styles.dot} style={{ x: dotX, y: dotY }} />
    </>
  );
};

export default CustomCursor;
