// components/layout.tsx
import React from 'react';
import Navbar from './navbar'; // Assuming Navbar is in the same directory
import Footer from './footer'; // Assuming Footer is in the same directory
import { GoogleAnalytics } from '@next/third-parties/google'

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar title=''/>
      <main>
        {children}
      </main>
      <Footer />
      <GoogleAnalytics gaId="G-HXJTKRHCTJ" />
    </>
  );
}
