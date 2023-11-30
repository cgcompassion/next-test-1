import { cva, type VariantProps } from 'class-variance-authority';

import { twMerge } from 'tailwind-merge';
import React, { PropsWithChildren } from 'react';

const typo = cva(['my-4'], {
  variants: {
    variant: {
      default: [''],
      feature: ['text-3xl'],
      label: ['text-sm uppercase'],
      quote: ['font-black uppercase'],
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typo> {}

export const Typography: React.FC<PropsWithChildren<TypographyProps>> = ({
  className,
  variant,
  children,
}) => {
  return <p className={twMerge(typo({ variant, className }))}>{children}</p>;
};
