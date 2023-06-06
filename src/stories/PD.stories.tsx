import React from 'react';
import { Meta, Story } from '@storybook/react';

import PD from '../components/PD';

export default {
  title: 'PROFILE/PD',
  component: PD,
} as Meta;

const Template: Story = (args) => <PD {...args} />;

export const Default = Template.bind({});
