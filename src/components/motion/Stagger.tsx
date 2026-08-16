import { motion } from 'framer-motion';
import type { HTMLMotionProps, Variants } from 'framer-motion';
import { easeOut, fadeUpVariants } from './variants';

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  once?: boolean;
  amount?: 'some' | 'all' | number;
  staggerChildren?: number;
  delayChildren?: number;
}

export const StaggerContainer = ({
  once = true,
  amount = 'some',
  staggerChildren = 0.12,
  delayChildren = 0,
  children,
  ...rest
}: StaggerContainerProps) => {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
  };

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once, amount }} variants={containerVariants} {...rest}>
      {children}
    </motion.div>
  );
};

interface StaggerItemProps extends HTMLMotionProps<'div'> {
  duration?: number;
  hover?: boolean;
}

export const StaggerItem = ({ duration = 0.65, hover = false, children, ...rest }: StaggerItemProps) => (
  <motion.div
    variants={fadeUpVariants}
    transition={{ duration, ease: easeOut }}
    whileHover={hover ? { y: -6, transition: { duration: 0.2, ease: easeOut } } : undefined}
    {...rest}
  >
    {children}
  </motion.div>
);
