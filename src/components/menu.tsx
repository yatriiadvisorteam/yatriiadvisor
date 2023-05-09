import { ButtonExtendedProps, buttonStyles } from "./Button";
import { Menu } from "@headlessui/react";

export const UiMenu = ({ children }: { children: React.ReactNode }) => (
  <Menu>{children}</Menu>
);

export const MenuItems = ({ children }: { children: React.ReactNode }) => (
  <Menu.Items
    className={"bg-white mt-2 p-1 shadow-md rounded-md flex flex-col w-fit outline-none"}
  >
    {children}
  </Menu.Items>
);

export const MenuItem = ({ children }: { children: React.ReactNode }) => (
  <Menu.Item>
    {({ active }) => (
      <span className={"text-brand rounded-md px-3 pr-14 py-2 text-md font-medium  hover:cursor-pointer "+(active && "bg-secondary text-white")}>
        {children}
      </span>
    )}
  </Menu.Item>
);

export function MenuButton({
  intent,
  size,
  variant,
  children,
  leftIcon,
  ...props
}: ButtonExtendedProps) {
  return (
    <Menu.Button className={buttonStyles({ intent, size, variant })} {...props}>
      <div className="pr-2">{leftIcon}</div>
      {children}
    </Menu.Button>
  );
}
