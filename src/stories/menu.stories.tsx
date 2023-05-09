import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";
import { AiOutlineFilter } from "react-icons/ai";
import { MenuButton, MenuItem, MenuItems, UiMenu } from "../components/Menu";

const meta: Meta<typeof MenuButton> = {
  title: "ui/Menu",
  render: ({ intent, size,variant }) => {
    return (
      <UiMenu>
        <MenuButton {...{ intent, size,variant }} leftIcon={<AiOutlineFilter />}>
          Sort by
        </MenuButton>
        <MenuItems>
          <MenuItem>
          Best Season
          </MenuItem>
          <MenuItem>Visitors Count</MenuItem>
        </MenuItems>
      </UiMenu>
    );
  },
};

//exporting meta of button story
export default meta;
type Story = StoryObj<typeof Button>;

export const MenuListWithOutlineButton: Story = {
  args: {
    intent: "secondary",
    variant:"outline",
    size:"md"
  },
  argTypes: {},
};
