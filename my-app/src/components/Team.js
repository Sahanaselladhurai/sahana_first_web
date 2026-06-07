import React from 'react';
import './panel.css';

const members = [
  { name: 'Alyssa Grant', role: 'CEO', image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&q=80&auto=format&fit=crop' },
  { name: 'Elijah Ramos', role: 'CTO', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80&auto=format&fit=crop' },
  { name: 'Mina Kapoor', role: 'VP, Product', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop' },
  { name: 'Julian Reed', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop' }
];

export default function Team() {
  return (
    <div>
      <div className="section-header">
        <p className="section-label">Leadership team</p>
        <h2 className="section-title">A world-class team building secure digital experiences.</h2>
      </div>
      <div className="team-grid">
        {members.map((member) => (
          <div key={member.name} className="team-card">
            <img className="team-photo" src={member.image} alt={member.name} />
            <div>
              <h4>{member.name}</h4>
              <span>{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
