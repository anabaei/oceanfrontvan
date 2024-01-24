// components/Navbar.tsx
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link href="/">
          <div className="navbar-brand">
            {/* Sample logo (replace with your actual logo) */}
            <img src="/logo.png" alt="Logo" className={styles.logo} />
            
          </div>
        </Link>
        <div>
          <ul className="navbar-nav">
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
