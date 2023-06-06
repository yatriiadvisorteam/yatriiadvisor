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
