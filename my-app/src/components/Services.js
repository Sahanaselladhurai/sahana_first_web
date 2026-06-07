import React from 'react';
import './panel.css';

const services = [
  { icon: '☁', title: 'Cloud strategy', description: 'Design secure, scalable cloud architecture that accelerates deployment and reduces risk.' },
  { icon: '🧠', title: 'AI & analytics', description: 'Turn operational data into executive insights with intelligent reporting and automation.' },
  { icon: '🔒', title: 'Security & compliance', description: 'Protect digital assets with enterprise-grade controls, auditing, and governance.' },
  { icon: '🤝', title: 'Collaboration enablement', description: 'Empower distributed teams with modern workflows, governance, and seamless communication.' }
];

export default function Services() {
  return (
    <div>
      <div className="section-header">
        <p className="section-label">Services</p>
        <h2 className="section-title">Capabilities built to support technology-led growth.</h2>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
