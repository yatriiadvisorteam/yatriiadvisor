import React from 'react';
import { Story, Meta } from '@storybook/react';
import History, { HistoryProps } from '../components/History';

export default {
  title: 'Components/History',
  component: History,
} as Meta;

const Template: Story<HistoryProps> = (args) => <History {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://example.com/image.jpg',
  rating: 4,
  username: 'John Doe',
  views: 100,
  feedback: 'Great experience!',
};
