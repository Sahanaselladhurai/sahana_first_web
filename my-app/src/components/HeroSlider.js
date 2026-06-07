import React, { useEffect, useState } from 'react';
import './panel.css';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&q=80&auto=format&fit=crop',
    title: 'Nurture every field with smarter farming',
    description: 'Monitor crop health, water needs, and harvest timing from a single farm dashboard.'
  },
  {
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80&auto=format&fit=crop',
    title: 'Seed-to-shelf farm management',
    description: 'Plan planting, track seed inventory, and stay ahead of seasonal growth cycles.'
  },
  {
    image: 'https://images.unsplash.com/photo-1472393365320-db77a5abbecc?w=1600&q=80&auto=format&fit=crop',
    title: 'Harvest insights for every season',
    description: 'Understand weather, soil, and crop trends to optimize yields with confidence.'
  }
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [partners, setPartners] = useState(0);
  const [uptime, setUptime] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5200);
    return () => clearInterval(timer);
  }, []);

  // Animate counters when slide changes
  useEffect(() => {
    const animate = (from, to, setter, steps = 30, format) => {
      let current = from;
      const delta = (to - from) / steps;
      let i = 0;
      const t = setInterval(() => {
        i += 1;
        current += delta;
        setter((val) => {
          return format ? format(current) : Math.round(current);
        });
        if (i >= steps) {
          clearInterval(t);
          setter(format ? format(to) : to);
        }
      }, 18);
    };

    animate(0, 150, (v) => setPartners(Math.round(v)), 40);
    animate(0, 99.99, (v) => setUptime(Number(v.toFixed(2))), 40, (n) => Number(n.toFixed(2)));
    animate(0, 4.8, (v) => setRating(Number(v.toFixed(1))), 30, (n) => Number(n.toFixed(1)));
  }, [activeIndex]);

  return (
    <aside className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`hero-slide ${index === activeIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <div className="hero-content">
        <div>
          <div className="brand-row">
            <div className="brand-mark">AF</div>
            <div className="brand-copy">
              <span className="brand-label">AgriFarm</span>
              <p>Farm management built for growers.</p>
            </div>
          </div>
          <h1 className="hero-title">Your farm dashboard for sky, soil, and seed planning.</h1>
          <p className="hero-subtitle">Track fields, manage seed inventory, and watch your harvest grow with a nature-inspired workflow.</p>
          <div className="hero-highlights">
            <div className="highlight-card">
              <h4>Team-first collaboration</h4>
              <p>Empower cross-functional squads with transparent workflows and real-time intelligence.</p>
            </div>
            <div className="highlight-card">
              <h4>Built for enterprise scale</h4>
              <p>Secure infrastructure, seamless integrations, and performance that keeps pace.</p>
            </div>
          </div>
        </div>

        <div className="hero-footer">
          <div className="hero-stat">
            <strong>{partners}{partners >= 150 ? '+' : ''}</strong>
            <span>Worldwide partners</span>
          </div>
          <div className="hero-stat">
            <strong>{uptime}%</strong>
            <span>Platform reliability</span>
          </div>
          <div className="hero-stat">
            <strong>{rating}/5</strong>
            <span>Customer satisfaction</span>
          </div>
        </div>
      </div>

      <div className="hero-nav">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            type="button"
            aria-label={`View slide ${index + 1}`}
          />
        ))}
      </div>
    </aside>
  );
}
