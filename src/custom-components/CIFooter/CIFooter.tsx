import Image from 'next/image';
import { PageSection } from '../PageSection/PageSection';
import React from 'react';
import { Typography } from '../Typography/Typography';

// @TODO: Use the real CI Footer

export const CIFooter: React.FC = () => {
  return (
    <PageSection className="bg-matisse py-5">
      <div className="flex flex-row">
        <div className="basis-1/2">
          <Typography asChild variant={'paragraphFooter'}>
            <h2>A PROJECT OF COMPASSION INTERNATIONAL</h2>
          </Typography>
          <Typography variant={'paragraphFooter'}>
            Compassion International is the world&aps;s leading authority in
            holistic child development through sponsorship. It is the only child
            sponsorship program to be validated through independent, empirical
            research. For more information about Compassion, visit
            compassion.com.
          </Typography>
          <Typography variant={'paragraphFooter'}>
            © 2023 Compassion International. All Rights Reserved.
            <br />
            (888) 503-4590
          </Typography>
          <Typography variant={'paragraphFooter'}>
            Privacy Statement and Conditions of Use
            <br />
            Full Disclosure Statement
          </Typography>
          <Typography variant={'paragraphFooter'}>
            Compassion and Compassion International are Registered Trademarks of
            Compassion International, Inc.
          </Typography>
        </div>
        <div className="basis-1/2 text-right">
          <Image
            className="inline-block"
            src="/img/compassion-logo.png"
            width={100}
            height={37}
            alt="Compassion International"
            priority
          />
        </div>
      </div>
    </PageSection>
  );
};
