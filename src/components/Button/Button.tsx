import React, { ReactNode, HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Provides a Text for the button */

  children: ReactNode;

  /** Which variant look would you like to use */

  variant: 'primary' | 'secondary';
}

/** This is a Special Button */
const Button = ({
  children = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      style={{
        padding: 20,
        cursor: 'pointer',
        color: 'white',
        borderRadius: 20,
        backgroundColor: variant === 'primary' ? 'green' : 'gray',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
