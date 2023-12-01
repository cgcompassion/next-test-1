import React, { PropsWithChildren } from 'react';

import { StaticImageData } from 'next/image';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const sectionOuter = cva([
  'bg-cover',
  'bg-[image:var(--image-url)]',
  'px-5',
  'py-20',
]);
const sectionInner = cva(['mx-auto max-w-2xl'], {
  variants: {
    align: {
      center: ['text-center', 'items-center'],
      left: [],
    },
  },
  defaultVariants: {
    align: 'left',
  },
});

export interface PageSectionProps {
  className?: string;
  backgroundImage?: StaticImageData;
  center?: boolean;
}

export const PageSection: React.FC<PropsWithChildren<PageSectionProps>> = ({
  className,
  backgroundImage,
  children,
  center,
}) => {
  const bgImageVar = {
    '--image-url': `url(${backgroundImage?.src})`,
  } as React.CSSProperties;
  return (
    <section
      className={twMerge(sectionOuter({ className }))}
      style={bgImageVar}
    >
      <div className={sectionInner({ align: center ? 'center' : 'left' })}>
        {children}
      </div>
    </section>
  );
};
