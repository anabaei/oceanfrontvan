// components/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

interface NavbarProps {
  title: string;
}

// this part helps to display colapse
const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
      <div className="container">
        <Link href="/">
          <div className="navbar-brand">
          <img src="/of.png" alt="Logo" style={{ maxHeight: '50px'}} />
          </div>
        </Link>

        <button
          className={`navbar-toggler ${isNavCollapsed ? '' : 'collapsed'}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <div className="nav-link">Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <div className="nav-link">About</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <div className="nav-link">Contact Us</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
