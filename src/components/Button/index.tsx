import styles from './Button.module.css';
import type { ComponentPropsWithoutRef } from 'react';

type ButtonVariant = 'outline-primary' | 'solid-primary' | 'outline-secondary' | 'solid-secondary';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  title: string;
  className?: string;
  variant?: ButtonVariant;
  bold?: boolean;
  upperCase?: boolean;
}

const Button = ({ title, className = '', variant = 'outline-primary', bold = false, upperCase = false, ...props }: ButtonProps) => {
  const variantStyles: Record<ButtonVariant, string> = {
    'outline-primary': styles.primaryOutline,
    'solid-primary': styles.primarySolid,
    'outline-secondary': styles.outlineSecondary,
    'solid-secondary': styles.solidSecondary,
  };

  return (
    <button
      className={`${styles.button} ${variantStyles[variant]} ${bold ? styles.bold : ''} ${upperCase ? styles.upperCase : ''} ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
