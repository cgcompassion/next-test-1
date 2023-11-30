import Image from 'next/image';
import { PageSection } from '../PageSection/PageSection';
import React from 'react';

export const HSHHero: React.FC = () => {
  return (
    <PageSection
      className="bg-[#006ab5] bg-top pt-32"
      backgroundImageUrl="/img/hsh-hero-image-large.jpg"
    >
      <Image
        src="/img/hsh-introducing-logo.png"
        width={300}
        height={347}
        alt="Introducing Hope Starts Here Online"
        priority
      />
      <p className="max-w-[300px] text-center text-black">
        <span className="bg-white px-2">A Compassion</span>
        <br />
        <span className="bg-white px-2">Experience for</span>
        <br />
        <span className="bg-white px-2">Small Groups</span>
      </p>
    </PageSection>
  );
};
