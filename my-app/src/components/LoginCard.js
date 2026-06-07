import React, { useState } from 'react';
import './panel.css';

export default function LoginCard({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      window.alert('Please enter both email and password to continue.');
      return;
    }

    // Demo credential check
    const demoEmail = 'admin@gmail.com';
    const demoPassword = 'admin123';

    if (email === demoEmail && password === demoPassword) {
      // show loading animation then success, then call onLogin
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onLogin?.(email);
        }, 700);
      }, 1100);
    } else {
      window.alert('Invalid Login');
    }
  };

  return (
    <section className="login-panel">
      <div className="login-card">
        <div className="card-top">
          <span className="company-badge">AgriConnect</span>
          <h2 className="card-title">Farm login portal</h2>
          <p className="card-subtitle">Sign in to access your agricultural dashboard, seed inventory, and field management tools.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-label">Email address</div>
            <div className="input-field">
              <span className="input-icon">✉</span>
              <input
                className="login-input"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="name@company.com"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <div className="input-label">Password</div>
            <div className="input-field password-group">
              <span className="input-icon">🔒</span>
              <input
                className="login-input"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                required
              />
              <button className="show-hide" type="button" onClick={() => setShowPassword((current) => !current)}>
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="form-row">
            <label className="remember">
              <input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} /> Remember me
            </label>
            <a className="forgot" href="#">Forgot password?</a>
          </div>

          <button className="primary-button" type="submit" disabled={loading || success} aria-busy={loading}>
            {loading ? <span className="btn-spinner" /> : success ? <span className="btn-success">✓</span> : 'Sign In'}
          </button>

          {success && (
            <div className="login-success-overlay" aria-hidden>
              <svg width="96" height="96" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#6EE7B7" strokeWidth="1.6" />
                <path d="M7 13l3 3 7-7" stroke="#6EE7B7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}

          <div className="social-grid">
            <button className="social-button" type="button">
              <span>🌱</span> Farm Login
            </button>
            <button className="social-button" type="button">
              <span>☁️</span> Cloud Farm Sync
            </button>
            <button className="social-button" type="button">
              <span>🌾</span> Seed Inventory
            </button>
          </div>

          <div className="create-account">
            <span>New to AgriConnect?</span>
            <button className="ghost" type="button">Register Farm</button>
          </div>
        </form>
      </div>
    </section>
  );
}
