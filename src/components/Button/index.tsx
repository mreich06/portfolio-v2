import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  const handleClick = () => {
    // fill in later
  };
  return (
    <button className={styles.button} onClick={() => handleClick}>
      {title}
    </button>
  );
};

export default Button;
