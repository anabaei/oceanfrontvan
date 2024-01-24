// components/Footer.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Footer.module.css'; // Import a CSS module for styling

export default function Footer() {
  return (
    <footer className={`footer mt-auto py-3 ${styles.footer}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <img src="/logo.png" alt="Logo" className={styles.logo} />
          </div>
          <div className="col-12 col-md-6">
            <div className="text-md-right">
              <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className={styles.icon} />
              </a>
              <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
              </a>
              <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
