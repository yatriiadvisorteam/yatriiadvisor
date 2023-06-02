import React from 'react';
import { Story, Meta } from '@storybook/react';

import Profile, { ProfileProps } from '../components/profile';

export default {
  title: 'Components/Profile',
  component: Profile,
} as Meta;

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
  profilePic: 'https://images.unsplash.com/photo-1503965830912-6d7b07921cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
};
