"use client"
import React, { useState } from 'react';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import { RiHome2Line, RiSettings2Line, RiUserLine } from 'react-icons/ri';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-br">
      <div className="navbar-container bg-button pb-4 border-b border-black">
        <div className="logo">
          <img
            src="/logo.png" // Replace with the path to your logo image in the public folder
            alt=""
            width={200} // Specify the desired width of the image
            height={200} // Specify the desired height of the image
          />
        </div>
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="/">
                <RiHome2Line />
                Home
              </a>
            </li>
            <li>
              <a href="/settings">
                <RiSettings2Line />
                Settings
              </a>
            </li>
            <li>
              <a href="/Dashboard/Profile">
                <RiUserLine />
                Profile
              </a>
            </li>
          </ul>
        </div>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
  {isSidebarOpen ? (
    <AiOutlineClose />
  ) : (
    <AiOutlineBars />
  )}
</button>

        {children}
      </div>
      <style jsx>{`
        .navbar-container {
          display: flex;
          align-items: center;
          padding: 10px;
        }

        .bg-br {
          background-color: #e9e8e8;
        }

        .sidebar {
          position: fixed;
          top: 96px;
          right: -200px; /* Adjust the width of the sidebar here */
          width: 200px; /* Adjust the width of the sidebar here */
          height: 100vh;
          background-color: #ffffff;
          transition: right 0.3s ease-in-out;
          overflow-y: auto;
        }

        .sidebar.open {
          right: 0;
        }

        .sidebar ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        .sidebar li {
          padding: 10px;
          border-bottom: 1px solid #eaeaea;
        }

        .sidebar a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #333333;
        }

        .sidebar-toggle {
          position: fixed;
          top: 100px;
          right: 10px;
          background-color: transparent;
          border: none;
          color: #333333;
          font-size: 24px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
