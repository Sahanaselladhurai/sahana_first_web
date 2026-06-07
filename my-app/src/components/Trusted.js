import React from 'react';
import './panel.css';

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/9/96/Logo_Amazon_%282019%29.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/8/8e/Netflix_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'
];

export default function Trusted() {
  return (
    <div>
      <div className="section-header">
        <p className="section-label">Trusted Clients</p>
        <h2 className="section-title">Forward-thinking companies rely on our platform.</h2>
      </div>
      <div className="trusted-grid">
        {logos.map((logo, index) => (
          <img key={index} className="trusted-logo" src={logo} alt={`Trusted brand ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
