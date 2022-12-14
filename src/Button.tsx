import React, { ReactNode, ComponentProps } from 'react';

export type ButtonProps = {
  /** Provides a Text for the button */

  children: ReactNode;

  /** Which variant look would you like to use */

  variant: 'primary' | 'secondary';
} & ComponentProps<'button'>;

/** This is a Special Button */
export const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      style={{
        padding: 20,
        cursor: 'pointer',
        color: 'white',
        borderRadius: 22,
        backgroundColor: variant === 'secondary' ? 'blue' : 'gray',
      }}
    >
      {children}
    </button>
  );
};
