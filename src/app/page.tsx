import { Button } from '@/custom-components/Button/Button';
import { HSHHero } from '@/custom-components/HSHHero/HSHHero';
import Image from 'next/image';
import { PageSection } from '@/custom-components/PageSection/PageSection';
import React from 'react';
import { Typography } from '@/custom-components/Typography/Typography';

const section1_1 = (
  <Typography key={0}>
    Hope Starts Here Online is a Compassion experience specifically designed for
    small groups. If you&apos;re a leader looking to host a unique event, or if
    you&apos;re looking for resources to complement your existing small groups,
    youth groups or Bible studies, Hope Starts Here Online is for you.
  </Typography>
);

const section1_2 = (
  <Typography key={1}>
    Hope Starts Here Online is a Compassion experience specifically designed for
    small groups. If you&apos;re a leader looking to host a unique event, or if
    you&apos;re looking for resources to complement your existing small groups,
    youth groups or Bible studies, Hope Starts Here Online is for you.
  </Typography>
);

const Home: React.FC = () => {
  return (
    <main>
      <HSHHero />
      <PageSection center>
        <Image
          src={'/img/cross-icon.png'}
          width="50"
          height="50"
          className="m-auto"
          alt=""
        />
        <Typography variant={'feature'}>
          Ignite conversations. Commit to biblical justice.{' '}
          <strong>
            And grow your church&apos;s heart for discipleship, generosity and
            global mission.
          </strong>
        </Typography>
        <Typography>
          Hope Starts Here Online is a Compassion experience specifically
          designed for small groups. If you&apos;re a leader looking to host a
          unique event, or if you&apos;re looking for resources to complement
          your existing small groups, youth groups or Bible studies, Hope Starts
          Here Online is for you.
        </Typography>
        <Typography>
          Hope Starts Here Online is free to host and attend. It is self-paced
          but takes most small groups approximately 45 minutes to complete. It
          can be streamed online or downloaded to your own device to make it as
          easy and accessible as possible. And we&apos;ll send you guides and
          resources to help plan your event — along with profiles of unsponsored
          children to give your small group an opportunity to sponsor in
          response to what they&apos;ve experienced.
        </Typography>
        <Button href="/resources">Register for Hope Starts Here Online</Button>
      </PageSection>
    </main>
  );
};
export default Home;
