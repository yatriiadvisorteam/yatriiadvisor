import React from 'react';
import ProfilePage from '../components/profile';
export default {
  title: 'Profile Page',
  component: ProfilePage,
};

const Template = (args) => <ProfilePage {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  onSubmit: (data) => console.log(data),
};
