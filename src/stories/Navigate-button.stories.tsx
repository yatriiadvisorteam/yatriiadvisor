import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Navigate-button';

const meta: Meta<typeof Button> = {
  title: 'Navigate_button',
  component: Button,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Button>;

//exporting primary varient of button
export const Primary: Story = {

}