import { cva, type VariantProps } from 'class-variance-authority';

import { twMerge } from 'tailwind-merge';
import React, { PropsWithChildren } from 'react';

const button = cva(
  [
    'justify-center',
    'inline-flex',
    'items-center',
    'rounded',
    'text-center',
    'border',
    'border-blue-400',
    'transition-colors',
    'delay-100',
    'uppercase',
    'm-auto',
  ],
  {
    variants: {
      intent: {
        primary: ['bg-[#006ab4]', 'text-white', 'hover:enabled:bg-blue-700'],
        secondary: [
          'bg-transparent',
          'text-blue-400',
          'hover:enabled:bg-blue-400',
          'hover:enabled:text-white',
        ],
      },
      size: {
        sm: ['h-full', 'text-sm', 'py-1.5', 'px-4'],
        lg: ['h-full', 'text-sm', 'py-2.5', 'px-6'],
        full: ['h-full', 'text-sm', 'py-2.5', 'px-6', 'block'],
      },
      underline: { true: ['underline'], false: [] },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'lg',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
    VariantProps<typeof button> {
  underline?: boolean;
  href?: string;
  callback?: () => void;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  className,
  intent,
  size,
  underline,
  href,
  callback,
  children,
}) => {
  if (!href && !callback) {
    return;
  }
  if (href) {
    return (
      <a
        className={twMerge(button({ intent, size, className, underline }))}
        href={href}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={twMerge(button({ intent, size, className, underline }))}
      onClick={callback}
    >
      {children}
    </button>
  );
};
