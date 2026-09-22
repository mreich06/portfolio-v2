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
  large?: boolean;
  href?: string;
};
type ButtonAsButton = ButtonOwnProps & { href?: undefined } & Omit<HTMLMotionProps<'button'>, keyof ButtonOwnProps>;

type ButtonAsAnchor = ButtonOwnProps & { href: string } & Omit<HTMLMotionProps<'a'>, keyof ButtonOwnProps>;

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button = (props: ButtonProps) => {
  const { children, icon, className = '', variant = 'outline-primary', bold = false, upperCase = false, large = false } = props;

  const variantStyles: Record<ButtonVariant, string> = {
    'outline-primary': styles.primaryOutline,
    'solid-primary': styles.primarySolid,
    'outline-secondary': styles.outlineSecondary,
    'solid-secondary': styles.solidSecondary,
    terminal: styles.terminal,
  };
  const classes = `${styles.button} ${variantStyles[variant]} ${bold ? styles.bold : ''} ${upperCase ? styles.upperCase : ''} ${large ? styles.large : ''} ${className}`;
  const motionProps = {
    whileHover: { scale: 1.01, y: -1 },
    whileTap: { scale: 0.99, y: 0 },
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const },
  };

  if (props.href !== undefined) {
    // narrowed to ButtonAsAnchor here — also strip the props already folded
    // into `classes` above, otherwise this spread re-adds them to the DOM
    // node (as raw attributes) and, worse, its `className` clobbers `classes`
    // since it's spread after it.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- destructured only to exclude them from `rest`
    const { href, className: _className, variant: _variant, bold: _bold, upperCase: _upperCase, large: _large, ...rest } = props;
    return (
      <motion.a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...motionProps} {...rest}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </motion.a>
    );
  }

  // narrowed to ButtonAsButton here — same reasoning as above.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- destructured only to exclude them from `rest`
  const { href, className: _className, variant: _variant, bold: _bold, upperCase: _upperCase, large: _large, ...rest } = props;
  return (
    <motion.button className={classes} {...motionProps} {...rest}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;
