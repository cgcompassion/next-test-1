import Image from 'next/image';
import { PageSection } from '@/custom-components/PageSection/PageSection';
import React from 'react';
import hshLogo from '../../../public/img/hsh-logo.png';

export const HSHHeader: React.FC = () => {
  return (
    <PageSection className="bg-matisse py-5">
      <Image
        src={hshLogo}
        width={200}
        height={40}
        alt="Hope Starts Here, A Compassion Experience"
        priority
      />
    </PageSection>
  );
};
