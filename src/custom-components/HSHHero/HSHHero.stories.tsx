import type { Meta, StoryObj } from '@storybook/react';

import { HSHHero } from './HSHHero';
import React from 'react';

const meta: Meta<typeof HSHHero> = {
  title: 'HSHHero',
  component: HSHHero,
};

type Story = StoryObj<typeof HSHHero>;

export const Default: Story = {
  render: () => <HSHHero />,
};

export default meta;
