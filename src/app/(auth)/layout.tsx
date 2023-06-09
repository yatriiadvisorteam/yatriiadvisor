import React, { useState } from 'react';
import Image from 'next/image';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <div className="h-screen w-screen overflow-hidden bg-primary relative">
      <div style={{ position: 'absolute', top: 20, left: -10 }}>
        
      </div>
      {children}
    </div>
  );
}