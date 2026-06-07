import React, { useEffect, useState } from 'react';
import './panel.css';

const reviews = [
  {
    name: 'Sophia Lee',
    role: 'Chief Innovation Officer, NovaCorp',
    quote: 'AstraLogic helped us scale secure cloud operations without losing speed. Their team feels like an extension of ours.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop'
  },
  {
    name: 'Marcus Grant',
    role: 'VP Product, Skyward Labs',
    quote: 'The onboarding experience was fast, polished, and aligned to our enterprise controls. We launched in weeks, not months.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&auto=format&fit=crop'
  },
  {
    name: 'Priya Raman',
    role: 'Head of Engineering, BlueWave',
    quote: 'Every interaction with AstraLogic felt premium — from roadmap planning to deployment and analytics.',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&q=80&auto=format&fit=crop'
  }
];

export default function Reviews() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, 5400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="section-header">
        <p className="section-label">Customer reviews</p>
        <h2 className="section-title">Organizations trust us to deliver measurable results.</h2>
      </div>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={review.name} className="review-card" style={{ opacity: index === active ? 1 : 0.5 }}>
            <div className="review-head">
              <img className="review-avatar" src={review.avatar} alt={review.name} />
              <div className="review-meta">
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
            </div>
            <p className="review-text">“{review.quote}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}
