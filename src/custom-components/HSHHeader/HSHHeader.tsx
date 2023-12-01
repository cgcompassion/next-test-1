import Image from 'next/image';
import { PageSection } from '../PageSection/PageSection';
import React from 'react';

export const HSHHeader: React.FC = () => {
  return (
    <PageSection className="bg-matisse py-5">
      <Image
        src="/img/hsh-logo.png"
        width={200}
        height={40}
        alt="Hope Starts Here, A Compassion Experience"
        priority
      />
    </PageSection>
  );
};
