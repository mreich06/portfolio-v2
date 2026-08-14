import type { ElementType, ReactNode } from 'react';
import styles from './Text.module.css';

type TextVariant = 'eyebrow' | 'h1' | 'h2' | 'subtitle' | 'h3' | 'body' | 'bodySmall' | 'xs' | 'xxs' | 'button' | 'tag';

type FontVariant = 'sans' | 'mono';

type ColorVariant = 'default' | 'cyan' | 'muted' | 'white' | 'white-70' | 'white-50' | 'blue' | 'orange';
interface TextProps {
  variant: TextVariant;
  font: FontVariant;
  color?: ColorVariant;
  as?: ElementType;
  children: ReactNode;
  className?: string;
  styles?: string;
  [key: string]: unknown;
}

const variantStyles: Record<TextVariant, string> = {
  eyebrow: styles.eyebrow,
  h1: styles.h1,
  h2: styles.h2,
  subtitle: styles.subtitle,
  h3: styles.h3,
  body: styles.body,
  bodySmall: styles.bodySmall,
  button: styles.button,
  xs: styles.xs,
  xxs: styles.xxs,
  tag: styles.tag,
};

const fontStyles: Record<FontVariant, string> = {
  sans: styles.sans,
  mono: styles.mono,
};

const colorClasses: Record<ColorVariant, string> = {
  default: '',
  cyan: 'color-cyan',
  muted: 'color-muted',
  white: 'white',
  'white-70': 'color-white-70',
  'white-50': 'color-white-50',
  blue: 'color-blue',
  orange: 'color-orange',
};

const defaultElements: Record<TextVariant, ElementType> = {
  eyebrow: 'span',
  h1: 'h1',
  h2: 'h2',
  subtitle: 'h3',
  h3: 'h3',
  body: 'p',
  bodySmall: 'p',
  xs: 'p',
  xxs: 'p',
  button: 'button',
  tag: 'span',
};

const Text = ({ variant, font, color = 'default', as, children, className = '', styles = '', ...rest }: TextProps) => {
  const Component = as ?? defaultElements[variant];

  return (
    <Component className={`${variantStyles[variant]} ${fontStyles[font]} ${colorClasses[color]} ${styles} ${className}`.trim()} {...rest}>
      {children}
    </Component>
  );
};

export default Text;
