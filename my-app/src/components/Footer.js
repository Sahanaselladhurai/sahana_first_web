import React from 'react';
import './panel.css';

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-title">AstraLogic</div>
          <p>Modern enterprise technology delivered with trust, speed, and security across every digital journey.</p>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Company</h4>
            <div className="footer-links">
              <a href="#">About us</a>
              <a href="#">Partners</a>
              <a href="#">Careers</a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Solutions</h4>
            <div className="footer-links">
              <a href="#">Cloud strategy</a>
              <a href="#">Data intelligence</a>
              <a href="#">Security</a>
            </div>
          </div>
          <div className="footer-column">
            <h4>Connect</h4>
            <div className="footer-links">
              <a href="#">Contact</a>
              <a href="#">Support</a>
              <a href="#">Documentation</a>
            </div>
          </div>
        </div>
      </div>
      <div className="social-icons">
        <a className="social-icon" href="#" aria-label="Twitter">T</a>
        <a className="social-icon" href="#" aria-label="LinkedIn">L</a>
        <a className="social-icon" href="#" aria-label="Instagram">I</a>
        <a className="social-icon" href="#" aria-label="Facebook">F</a>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} AstraLogic · All rights reserved</div>
    </footer>
  );
}
