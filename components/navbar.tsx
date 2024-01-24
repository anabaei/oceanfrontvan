// components/Navbar.tsx
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
      <div className="container">
        <Link href="/">
          <div className="navbar-brand">
            {/* Sample logo (replace with your actual logo) */}
            
            <img src="/of.png" alt="Logo" style={{ maxHeight: '50px'}} />
         
          </div>
        </Link>

        {/* Navbar toggler button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content for mobile */}
        <div className="collapse navbar-collapse" id="navbarNav">
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
}
