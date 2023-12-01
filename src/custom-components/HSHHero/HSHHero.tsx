import Image from 'next/image';
import { PageSection } from '@/custom-components/PageSection/PageSection';
import React from 'react';
import { Typography } from '@/custom-components/Typography/Typography';
import hshHeroBackground from '../../../public/img/hsh-hero-image-large.jpg';
import hshIntroducing from '../../../public/img/hsh-introducing-logo.png';

export const HSHHero: React.FC = () => {
  return (
    <PageSection
      className="bg-matisse bg-top pt-32"
      backgroundImage={hshHeroBackground}
    >
      <div className="flex flex-row">
        <div className="basis-full items-center text-center sm:basis-1/3">
          <Image
            className="m-auto"
            src={hshIntroducing}
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
