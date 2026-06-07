import React, { useEffect, useState } from 'react';
import './panel.css';

const images = [
  'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=1600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556767576-5ec41e3239ea?w=1600&q=80&auto=format&fit=crop'
];

export default function LeftPanel() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % images.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <aside className="left-panel">
      <div className="brand-top">
        <div className="brand-logo">ACME</div>
        <div className="brand-slogan">Innovate. Secure. Scale.</div>
      </div>

      <div className="carousel" style={{ backgroundImage: `url(${images[idx]})` }}>
        <div className="carousel-overlay">
          <h2>Built for modern teams</h2>
          <p>We help enterprises transform with secure cloud-native software and expert services.</p>
        </div>
      </div>

      <div className="brand-footer">
        <div className="stats-mini">
          <div>
            <strong>10k+</strong>
            <span>Customers</span>
          </div>
          <div>
            <strong>120+</strong>
            <span>Countries</span>
          </div>
          <div>
            <strong>99.99%</strong>
            <span>Uptime</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
