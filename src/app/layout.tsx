"use client";
import { useState } from "react";
import "../styles/globals.css";
import Providers from "./providers";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { RiHome2Line, RiLogoutBoxLine, RiUserLine } from "react-icons/ri";
import { FaHeart, FaHireAHelper, FaMapMarkerAlt, FaRegPaperPlane } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import Link from "next/link";
interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <div className="bg-br ">
          {" "}
          <div
            className="navbar-container bg-button pb-4 border-b border-black"
            style={{ position: "fixed", top: 0, width: "100%", zIndex: 999 }}
          >
            <div className="logo">
              <img
                src="/logo.png" // Replace with the path to your logo image in the public folder
                alt=""
                width={200} // Specify the desired width of the image
                height={200} // Specify the desired height of the image
              />
            </div>
            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
              <ul>
                <li>
                  <Link href="/">
                    <RiHome2Line />
                    Home
                  </Link>
                </li>
                <li>
                  <a href="/Dashboard/DestinationPage">
                    <FaMapMarkerAlt/>
                    Destination
                  </a>
                </li>
                <li>
                  <a href="/Dashboard/Profile">
                    <RiUserLine />
                    Profile
                  </a>
                </li>
                <li>
                  <a href="">
                    <FcAbout />
                    About US
                  </a>
                </li>
                <li>
                  <a href="/Dashboard/Favourite">
                    <FaHeart />
                    Favourites
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaRegPaperPlane />
                    Plans
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaHireAHelper className="text-button" />
                   Help
                  </a>
                </li>
                <li>
                  <a href="/Dashboard/TouristExperience">
                    <FaHireAHelper className="text-button" />
                   Experience
                  </a>
                </li>
              
              <div className=" container flex pt-20"><li>
                  <a href="">
                    <RiLogoutBoxLine/>
                   Logout
                  </a>
                </li></div>
              </ul>
            </div>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
              {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineBars />}
            </button>
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
              right: 20px;
              background-color: transparent;
              border: none;
              color: ;
              font-size: 24px;
              cursor: pointer;
            }
          `}</style>
        </div>
        <main className="h-full w-full overflow-y-scroll">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
