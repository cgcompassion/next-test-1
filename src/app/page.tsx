import { Button } from '@/components/ui/button';
import { HSHHero } from '@/custom-components/HSHHero/HSHHero';
import Image from 'next/image';
import Link from 'next/link';
import { PageSection } from '@/custom-components/PageSection/PageSection';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Typography } from '@/custom-components/Typography/Typography';
import crossIcon from '../../public/img/cross-icon.png';

const Home: React.FC = () => {
  return (
    <main>
      <HSHHero />
      <PageSection center className="bg-alabaster-50">
        <Image
          src={crossIcon}
          width="50"
          height="50"
          className="m-auto"
          alt=""
        />
        <Typography variant={'feature'} asChild>
          <h2>
            Ignite conversations. Commit to biblical justice.{' '}
            <strong>
              And grow your church&apos;s heart for discipleship, generosity and
              global mission.
            </strong>
          </h2>
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
        <Button asChild>
          <Link href="/register">Register for Hope Starts Here Online</Link>
        </Button>
        <div className="my-4 flex flex-row gap-3 text-left">
          <div className="basis-1/3">
            <Typography variant={'quote'}>
              It&apos;s our prayer that all those who experience Hope Starts
              Here Online will:
            </Typography>
            <Separator className="h-2 w-1/2 bg-alabaster-990" />
          </div>
          <div className="basis-2/3">
            <ul className="ml-6 list-outside list-disc">
              <Typography asChild>
                <li>
                  Be challenged by stories of a family&apos;s struggle,
                  sacrifice and generosity.
                </li>
              </Typography>
              <Typography asChild>
                <li>
                  See how the local church is igniting hope in the lives of
                  children living in extreme poverty.
                </li>
              </Typography>
              <Typography asChild>
                <li>
                  Witness first-hand the life-transforming power of child
                  sponsorship.
                </li>
              </Typography>
              <Typography asChild>
                <li>
                  Be moved to respond as they see that, for a child in desperate
                  need, hope can start with them.
                </li>
              </Typography>
            </ul>
          </div>
        </div>
      </PageSection>
    </main>
  );
};
export default Home;
