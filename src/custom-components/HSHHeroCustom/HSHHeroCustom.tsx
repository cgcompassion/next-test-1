import React, { PropsWithChildren } from 'react';

import { PageSection } from '@/custom-components/PageSection/PageSection';
import { StaticImageData } from 'next/image';

interface HSHHeroCustomProps {
  backgroundImage: StaticImageData;
}

export const HSHHeroCustom: React.FC<PropsWithChildren<HSHHeroCustomProps>> = ({
  backgroundImage,
  children,
}) => {
  return (
    <PageSection
      className="-mb-20 bg-matisse bg-center pb-0 pt-96"
      backgroundImage={backgroundImage}
    >
      <div className="flex flex-row">
        <div className="basis-full sm:basis-1/2">{children}</div>
      </div>
    </PageSection>
  );
};
