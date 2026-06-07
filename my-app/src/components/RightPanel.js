import React, { useState } from 'react';
import './panel.css';

export default function RightPanel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);

  const submit = e => {
    e.preventDefault();
    alert(`Signing in ${email}`);
  };

  return (
    <section className="right-panel">
      <div className="login-card">
        <div className="card-top">
          <div className="company-brand">ACME Cloud</div>
          <p className="card-sub">Enterprise-grade platform for modern teams</p>
        </div>

        <form className="login-form" onSubmit={submit}>
          <label>
            Email Address
            <input type="email" placeholder="name@company.com" value={email} onChange={e => setEmail(e.target.value)} required />
          </label>

          <label>
            Password
            <div className="password-wrap">
              <input type={show ? 'text' : 'password'} placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} required />
              <button type="button" className="show-btn" onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'}</button>
            </div>
          </label>

          <div className="row between small">
            <label className="remember">
              <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} /> Remember me
            </label>
            <a className="forgot" href="#">Forgot Password?</a>
          </div>

          <button className="primary-button" type="submit">Sign In</button>

          <div className="social-row">
            <button type="button" className="social google">Sign in with Google</button>
            <button type="button" className="social ms">Sign in with Microsoft</button>
            <button type="button" className="social li">Sign in with LinkedIn</button>
          </div>

          <div className="create-account">
            <span>New to ACME?</span>
            <button className="ghost" type="button">Create Account</button>
          </div>
        </form>
      </div>
    </section>
  );
}
