"use client";
import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>My Sidebar</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="logout-logo">
        <Link href="/logout">
          <a>
            <img src="/logout-logo.png" alt="Logout" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
