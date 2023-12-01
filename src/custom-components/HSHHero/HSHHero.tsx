import Image from 'next/image';
import { PageSection } from '../PageSection/PageSection';
import React from 'react';
import { Typography } from '../Typography/Typography';

export const HSHHero: React.FC = () => {
  return (
    <PageSection
      className="bg-matisse bg-top pt-32"
      backgroundImageUrl="/img/hsh-hero-image-large.jpg"
    >
      <div className="flex flex-row">
        <div className="basis-full items-center text-center sm:basis-1/3">
          <Image
            className="m-auto"
            src="/img/hsh-introducing-logo.png"
            width={300}
            height={347}
            alt="Introducing Hope Starts Here Online"
            priority
          />
          <Typography variant={'headerFeature'} asChild>
            <h1>
              A Compassion
              <br />
              Experience for
              <br />
              Small Groups
            </h1>
          </Typography>
        </div>
      </div>
    </PageSection>
  );
};
