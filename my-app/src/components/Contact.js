import React from 'react';
import './panel.css';

export default function Contact() {
  return (
    <div className="contact-grid">
      <div className="contact-details">
        <div className="contact-block">
          <div className="section-header">
            <p className="section-label">Contact information</p>
            <h2 className="section-title">Stay connected with our enterprise support team.</h2>
          </div>
          <p>Whether you're evaluating a new solution or scaling an existing deployment, our specialists are ready to help your business move faster with confidence.</p>
        </div>
        <div className="contact-block">
          <h4>Get in touch</h4>
          <div className="contact-links">
            <div className="contact-item">
              <strong>Email</strong>
              <span>hello@astralogic.com</span>
            </div>
            <div className="contact-item">
              <strong>Phone</strong>
              <span>+1 (888) 421-9020</span>
            </div>
            <div className="contact-item">
              <strong>Office</strong>
              <span>123 Harbor Street, San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-block">
        <h4>Our locations</h4>
        <p>We partner with clients across the Americas, EMEA, and APAC through local teams and 24/7 engineering support.</p>
      </div>
    </div>
  );
}
