import { HSHHeroCustom } from '@/custom-components/HSHHeroCustom/HSHHeroCustom';
import { HSHRegistrationForm } from '@/custom-components/HSHRegistrationForm/HSHRegistrationForm';
import { PageSection } from '@/custom-components/PageSection/PageSection';
import React from 'react';
import { Typography } from '@/custom-components/Typography/Typography';

const Register: React.FC = () => {
  return (
    <main>
      <HSHHeroCustom backgroundImageUrl="/img/hsh-hero-image-2-large.jpg">
        <Typography asChild variant={'superHeaderFeature'}>
          <h1>Register your church to host Hope Starts Here Online.</h1>
        </Typography>
      </HSHHeroCustom>
      <PageSection className="bg-alabaster-50">
        <div className="my-4 flex flex-row gap-6">
          <div className="basis-3/6">
            <Typography className="font-bold">
              Thank you so much for your interest in Hope Starts Here Online.
            </Typography>
            <Typography>
              Registering your event is easy. Simply complete the form below and
              we&apos;ll send you everything you need - including links to the
              online experience, a comprehensive planning guide, and other
              resources to help you make the most of this unique opportunity.
            </Typography>
            <Typography>
              We look forward to welcoming you and your small group to Hope
              Starts Here Online.
            </Typography>
            <HSHRegistrationForm />
          </div>
          <div className="basis-3/6">
            <Typography>Next Steps:</Typography>
          </div>
        </div>
      </PageSection>
    </main>
  );
};
export default Register;
