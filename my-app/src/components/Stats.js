import React, { useEffect, useState } from 'react';
import './panel.css';

function Counter({ end, label, suffix = '', duration = 1400 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.max(1, Math.ceil(end / (duration / 30)));
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="stat-card">
      <h3>{value}{suffix}</h3>
      <p>{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <div>
      <div className="section-header">
        <p className="section-label">Enterprise Metrics</p>
        <h2 className="section-title">Performance and scale that moves your business forward.</h2>
      </div>
      <div className="stats-grid">
        <Counter end={12000} suffix="+" label="Global customers" />
        <Counter end={180} suffix="+" label="Active regions" />
        <Counter end={99.99} suffix="%" label="Platform reliability" />
        <Counter end={4.9} suffix="/5" label="Customer satisfaction" />
      </div>
    </div>
  );
}
