import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  title: string;
  className: string;
}

const Button = ({ title, className }: ButtonProps) => {
  const handleClick = () => {
    // fill in later
  };
  return (
    <button className={`${styles.button} ${className}`} onClick={() => handleClick}>
      {title}
    </button>
  );
};

export default Button;
