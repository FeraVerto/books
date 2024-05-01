import React from 'react';
import s from './Button.module.css';

export type ButtonType = {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ type, text, onClick, className }: ButtonType) => {
  return (
    <button
      className={`${s.button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
