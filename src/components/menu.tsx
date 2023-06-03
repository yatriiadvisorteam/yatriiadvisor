import React, { useState } from 'react';

interface MenuItem {
  name: string;
  link: string;
}

interface DropdownMenuProps {
  title: string;
  items: MenuItem[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="dropdown-menu">
      <button className="dropdown-menu__button" onClick={handleClick}>
        {title}
      </button>
      {isOpen && (
        <ul className="dropdown-menu__list">
          {items.map((item, index) => (
            <li key={index} className="dropdown-menu__item">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default DropdownMenu;
import { ButtonExtendedProps, buttonStyles } from "./cancel_Button";
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
