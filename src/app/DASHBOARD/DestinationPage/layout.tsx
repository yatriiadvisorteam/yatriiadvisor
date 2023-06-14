"use client";
import { useState } from "react";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Providers from "../../providers";
import { FaPlus, FaStar } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
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
              <div className="text-white pl-2"><a href="http://localhost:3000/"><RiArrowGoBackFill/></a></div>
            </div>
            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
              <ul>
                <li>
                  <a href="/Dashboard/DestinationPage/Ratings">
                    <FaStar className="text-button" />
                    Based on Rating
                  </a>
                </li>
                <li>
                  <a href="/Dashboard/DestinationPage/visitorscount">
                    <FaPlus className="text-button" />
                    Based on Visitors count
                  </a>
                </li>
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
              top: 112px;
              right: -250px; /* Adjust the width of the sidebar here */
              width: 250px; /* Adjust the width of the sidebar here */
              height: 14vh;
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
              top: px;
              right: 20px;
              background-color: transparent;
              border: none;
              color: white;
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
