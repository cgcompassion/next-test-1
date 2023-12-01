import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  args: {
    variant: 'superHeaderFeature',
    children: 'Peter piper picked a peck of pickled peppers.',
  },
  argTypes: {
    variant: {
      options: [
        'paragraphFooter',
        'paragraph',
        'feature',
        'superHeaderFeature',
        'headerFeature',
        'label',
        'quote',
      ],
      control: { type: 'select' },
    },
  },
};

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  render: (args) => <Typography {...args} />,
};

export default meta;
