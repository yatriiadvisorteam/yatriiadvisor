"use client";
import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <div className="bg-br">
      <div className="navbar-container bg-button pb-8 border-b border-black">
        <div className="logo">
          <img
            src="/logo.png" // Replace with the path to your logo image in the public folder
            alt=""
            width={200} // Specify the desired width of the image
            height={200} // Specify the desired height of the image
          />
        </div>
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
      `}</style>
    </div>
  );
}
