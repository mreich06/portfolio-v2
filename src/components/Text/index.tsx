import type { ElementType, ReactNode } from 'react';
import styles from './Text.module.css';

type TextVariant = 'eyebrow' | 'h1' | 'h2' | 'h3' | 'body' | 'xs' | 'button' | 'tag';

type ColorVariant = 'default' | 'cyan' | 'muted' | 'white' | 'white-70' | 'white-50';
interface TextProps {
  variant: TextVariant;
  color?: ColorVariant;
  as?: ElementType;
  children: ReactNode;
  className?: string;
  styles?: string;
}

const variantStyles: Record<TextVariant, string> = {
  eyebrow: styles.eyebrow,
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  body: styles.body,
  button: styles.button,
  xs: styles.xs,
  tag: styles.tag,
};

const colorClasses: Record<ColorVariant, string> = {
  default: '',
  cyan: 'color-cyan',
  muted: 'color-muted',
  white: 'white',
  'white-70': 'color-white-70',
  'white-50': 'color-white-50',
};

const defaultElements: Record<TextVariant, ElementType> = {
  eyebrow: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  xs: 'p',
  button: 'button',
  tag: 'span',
};

const Text = ({ variant, color = 'default', as, children, className = '', styles = '' }: TextProps) => {
  const Component = as ?? defaultElements[variant];

  return <Component className={`${variantStyles[variant]} ${colorClasses[color]} ${styles} ${className}`.trim()}>{children}</Component>;
};

export default Text;
