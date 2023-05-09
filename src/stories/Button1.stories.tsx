import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button1';
import {AiOutlineLogin, AiOutlineShareAlt} from "react-icons/ai"

const meta: Meta<typeof Button> = {
  title: 'examples/Button1',
  component: Button,
};

//exporting meta of button story
export default meta;

type Story = StoryObj<typeof Button>;

//exporting primary varient of button
export const Primary: Story = {
  args:{
    intent:"primary",
    fullwidth:true,
    size:'medium',
    children:"Login",
    children1:"Share",
    LeftIcon:<AiOutlineLogin/>,
    LeftIcon1:<AiOutlineShareAlt/>
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}

export const Disabled: Story = {
  args:{
    intent:"disabled",
    fullwidth:true,
    size:'medium',
    children:"Login",
    children1:"Share",
    LeftIcon:<AiOutlineLogin/>,
    LeftIcon1:<AiOutlineShareAlt/>
  },
  argTypes:{
    fullwidth:{
      type:"boolean",
      defaultValue:false
    }
  }
}

