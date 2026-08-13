import styles from './Button.module.css';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonVariant = 'outline-primary' | 'solid-primary' | 'outline-secondary' | 'solid-secondary' | 'terminal';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  title: string;
  icon?: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  bold?: boolean;
  upperCase?: boolean;
}

const Button = ({ title, icon, className = '', variant = 'outline-primary', bold = false, upperCase = false, ...props }: ButtonProps) => {
  const variantStyles: Record<ButtonVariant, string> = {
    'outline-primary': styles.primaryOutline,
    'solid-primary': styles.primarySolid,
    'outline-secondary': styles.outlineSecondary,
    'solid-secondary': styles.solidSecondary,
    terminal: styles.terminal,
  };

  return (
    <button
      className={`${styles.button} ${variantStyles[variant]} ${bold ? styles.bold : ''} ${upperCase ? styles.upperCase : ''} ${className}`}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {title}
    </button>
  );
};

export default Button;
