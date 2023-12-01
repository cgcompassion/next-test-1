import React, { PropsWithChildren } from 'react';

import { PageSection } from '../PageSection/PageSection';

interface HSHHeroCustomProps {
  backgroundImageUrl: string;
}

export const HSHHeroCustom: React.FC<PropsWithChildren<HSHHeroCustomProps>> = ({
  backgroundImageUrl,
  children,
}) => {
  return (
    <PageSection
      className="-mb-20 bg-matisse bg-center pb-0 pt-96"
      backgroundImageUrl={backgroundImageUrl}
    >
      <div className="flex flex-row">
        <div className="basis-full sm:basis-1/2">{children}</div>
      </div>
    </PageSection>
  );
};
