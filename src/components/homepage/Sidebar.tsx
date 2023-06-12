"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';

const Sidebar1 = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link href="/">
            
              <FaHome /> Home
           
          </Link>
        </li>
        <li>
          <Link href="/about">
           
              <FaUser /> About
            
          </Link>
        </li>
        <li>
          <Link href="/contact">
            
              <FaEnvelope /> Contact
            
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar1;
