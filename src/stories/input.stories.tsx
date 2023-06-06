import type { Meta, StoryObj } from '@storybook/react';
import input, { InputProps } from '../components/Input';

const meta: Meta<typeof input> = {
  title: 'input',
  component: input,
};

export default meta;

type Story = StoryObj<typeof input>;

export const Default: Story = {
  args: {
    placeholder: "Default Input",
  },
};

export const Email: Story = {
  args: {
    placeholder: "Email",
    inputVariant: "email",
  },
};

export const Username: Story = {
  args: {
    placeholder: "Username",
    inputVariant: "username",
  },
};



export const PhoneNumber: Story = {
    args: {
      placeholder: "Phone Number",
      inputVariant: "phoneNumber",
  },
  };

  export const Age: Story = {
    args: {
      placeholder: "Age",
      inputVariant: "age",
  },
  };

  
  export const Address: Story = {
    args: {
      placeholder: "Address",
      inputVariant: "address",
  },
  };

  
  export const Password: Story = {
    args: {
      placeholder: "********",
      inputVariant: "password",
  },
  };

  export const ConfirmPassword: Story = {
    args: {
      placeholder: "********",
      inputVariant: "password",
  },
  };