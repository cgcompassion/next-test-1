import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const typographyVariants = cva('text-alabaster-990', {
  variants: {
    variant: {
      paragraphFooter: ['my-4 text-xs text-alabaster-50'],
      paragraph: ['my-4'],
      feature: ['my-4 text-3xl'],
      superHeaderFeature: [
        'inline bg-matisse box-decoration-clone px-2 text-3xl font-bold leading-normal text-alabaster-50',
      ],
      headerFeature: [
        'inline bg-alabaster-50 box-decoration-clone px-2 text-center text-xl font-bold leading-normal text-black',
      ],
      label: ['my-4 text-sm uppercase'],
      quote: ['my-4 font-black uppercase'],
    },
  },
  defaultVariants: {
    variant: 'paragraph',
  },
});

export interface TypographyProps
  extends React.BaseHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'p';
    return (
      <Comp
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
