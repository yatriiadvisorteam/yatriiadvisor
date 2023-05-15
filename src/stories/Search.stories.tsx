import type { Meta, StoryObj } from '@storybook/react';
import Search, { SearchProps } from '../components/Search';

const meta: Meta<typeof Search> = {
  title: 'Examples/Search',
  component: Search,
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
    inputVariant: 'default',
  },
};

export const AnotherVariant: Story = {
  args: {
    placeholder: 'Search...',
    inputVariant: 'another',
  },
};