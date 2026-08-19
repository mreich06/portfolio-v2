import styles from './Button.module.css';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'outline-primary' | 'solid-primary' | 'outline-secondary' | 'solid-secondary' | 'terminal';

type ButtonOwnProps = {
  children: React.ReactNode;
  icon?: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  bold?: boolean;
  upperCase?: boolean;
  href?: string;
};
type ButtonAsButton = ButtonOwnProps & { href?: undefined } & Omit<HTMLMotionProps<'button'>, keyof ButtonOwnProps>;

type ButtonAsAnchor = ButtonOwnProps & { href: string } & Omit<HTMLMotionProps<'a'>, keyof ButtonOwnProps>;

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button = (props: ButtonProps) => {
  const { children, icon, className = '', variant = 'outline-primary', bold = false, upperCase = false } = props;

  const variantStyles: Record<ButtonVariant, string> = {
    'outline-primary': styles.primaryOutline,
    'solid-primary': styles.primarySolid,
    'outline-secondary': styles.outlineSecondary,
    'solid-secondary': styles.solidSecondary,
    terminal: styles.terminal,
  };
  const classes = `${styles.button} ${variantStyles[variant]} ${bold ? styles.bold : ''} ${upperCase ? styles.upperCase : ''} ${className}`;
  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.97, y: 0 },
    transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] as const },
  };

  if (props.href !== undefined) {
    const { href, ...rest } = props; // narrowed to ButtonAsAnchor here
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...motionProps} {...rest}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </motion.a>
    );
  }

  const { href, ...rest } = props; // narrowed to ButtonAsButton here
  return (
    <motion.button className={classes} {...motionProps} {...rest}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;
