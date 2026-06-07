import React from 'react';
import './panel.css';

export default function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard-root">
      <header className="dashboard-header glass-card">
        <div>
          <p className="dashboard-welcome">Welcome back,</p>
          <h1 className="dashboard-title">{user?.email || 'Learner'}</h1>
          <p className="dashboard-subtitle">Your IT job training centre dashboard is ready. Explore courses, schedule sessions, and track your progress.</p>
        </div>
        <button className="secondary-button" type="button" onClick={onLogout}>
          Sign Out
        </button>
      </header>

      <section className="dashboard-grid">
        <article className="dashboard-card glass-card">
          <h2>Active training paths</h2>
          <p>Full Stack Developer, Cloud Support, Cybersecurity, and Data Analytics cohorts are currently open.</p>
          <ul>
            <li>Weekly live workshops</li>
            <li>Mentor-led practical labs</li>
            <li>Placement preparation sessions</li>
          </ul>
        </article>

        <article className="dashboard-card glass-card">
          <h2>Progress summary</h2>
          <div className="dashboard-stat-grid">
            <div className="dashboard-stat">
              <strong>8</strong>
              <span>Completed modules</span>
            </div>
            <div className="dashboard-stat">
              <strong>2</strong>
              <span>Live classes this week</span>
            </div>
            <div className="dashboard-stat">
              <strong>4</strong>
              <span>Mentor sessions scheduled</span>
            </div>
          </div>
        </article>

        <article className="dashboard-card glass-card">
          <h2>Upcoming sessions</h2>
          <ul className="dashboard-list">
            <li>Monday: Resume workshop - 10:00 AM</li>
            <li>Wednesday: Interview preparation - 2:00 PM</li>
            <li>Friday: Cloud certification lab - 4:00 PM</li>
          </ul>
        </article>

        <article className="dashboard-card glass-card dashboard-actions">
          <h2>Get ready</h2>
          <p>Browse open career tracks, submit your project demo, or join the next live mentoring session.</p>
          <div className="dashboard-buttons">
            <button className="primary-button" type="button">View course catalog</button>
            <button className="ghost" type="button">Schedule mentor call</button>
          </div>
        </article>
      </section>
    </div>
  );
}
