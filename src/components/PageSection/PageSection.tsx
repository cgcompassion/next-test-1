import React, { PropsWithChildren } from 'react';

import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const sectionOuter = cva([
  'bg-cover',
  'bg-[image:var(--image-url)]',
  'px-5',
  'py-20',
]);
const sectionInner = cva(['mx-auto max-w-2xl']);

export interface PageSectionProps {
  className?: string;
  backgroundImageUrl?: string;
}

export const PageSection: React.FC<PropsWithChildren<PageSectionProps>> = ({
  className,
  backgroundImageUrl,
  children,
}) => {
  const bgImageVar = {
    '--image-url': `url(${backgroundImageUrl})`,
  } as React.CSSProperties;
  return (
    <section
      className={twMerge(sectionOuter({ className }))}
      style={bgImageVar}
    >
      <div className={sectionInner()}>{children}</div>
    </section>
  );
};
