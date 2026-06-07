import React from 'react';
import './panel.css';

export default function AboutCompany() {
  return (
    <div className="about-company">
      <div className="about-copy">
        <div className="section-header">
          <p className="section-label">About the company</p>
          <h2 className="section-title">We help visionary corporations modernize with precision and polish.</h2>
        </div>
        <p>
          AstraLogic combines deep industry experience, secure architecture, and elegant interface design to help teams deliver consistent, measurable results. Our corporate solutions span digital transformation, cloud engineering, and analytics for enterprise clients.
        </p>
        <div className="about-badges">
          <div className="about-badge">
            <strong>Global offices</strong>
            <p>Supporting clients from New York to Singapore with dedicated account services.</p>
          </div>
          <div className="about-badge">
            <strong>Security first</strong>
            <p>Adopting industry-leading privacy controls, compliance, and risk management.</p>
          </div>
        </div>
      </div>
      <div className="about-badges">
        <div className="about-badge">
          <strong>Digital transformation</strong>
          <p>Guiding executives through every stage of cloud, product, and operational modernization.</p>
        </div>
        <div className="about-badge">
          <strong>Executive alignment</strong>
          <p>Delivering consistent business impact through strategic planning and innovation.</p>
        </div>
      </div>
    </div>
  );
}
