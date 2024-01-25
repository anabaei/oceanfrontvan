// components/layout.tsx
import React from 'react';
import Navbar from './navbar'; // Assuming Navbar is in the same directory
import Footer from './footer'; // Assuming Footer is in the same directory

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar title=''/>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
