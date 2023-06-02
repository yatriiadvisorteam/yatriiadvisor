import React from 'react';
import { Meta, Story } from '@storybook/react';

import ProfilePic from '../components/ProfilePic';

export default {
  title: 'PROFILE/ProfilePic',
  component: ProfilePic,
} as Meta;

const Template: Story = (args) => <ProfilePic {...args} />;

export const Default = Template.bind({});
