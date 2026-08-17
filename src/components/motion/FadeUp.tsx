import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { easeOut, fadeUpVariants } from './variants';

interface FadeUpProps extends HTMLMotionProps<'div'> {
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: 'some' | 'all' | number;
}

const FadeUp = ({ delay = 0, duration = 0.8, once = true, amount = 'some', children, ...rest }: FadeUpProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount }}
    variants={fadeUpVariants}
    transition={{ duration, delay, ease: easeOut }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default FadeUp;
