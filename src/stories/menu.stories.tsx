import React from 'react';
import { Story, Meta } from '@storybook/react';
import DropdownMenu, { DropdownMenuProps } from '../components/menu';

export default {
  title: 'Dropdown Menu',
  component: DropdownMenu,
} as Meta;

const Template: Story<DropdownMenuProps> = (args) => <DropdownMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '=',
  items: [
    {
      name: 'History',
      link: '/',
    },
    {
      name: 'Profile',
      link: '/Profile',
    },
    {
      name: 'Favourites',
      link: '/Favourites',
    },
    {
      name: 'Plans',
      link: '/Plans',
    },
    {
      name: 'Destination',
      link: '/Destination',
    },
    {
      name: 'Weather',
      link: '/Weather',
    },
    {
      name: 'Visited',
      link: '/visited',
    },
    {
      name: 'Contact Us',
      link: '/Contact Us',
    },
    {
      name: 'Help',
      link: '/Help',
    },
  ],
};