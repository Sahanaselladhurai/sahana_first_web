import React from 'react';
import HeroSlider from '../components/HeroSlider';
import LoginCard from '../components/LoginCard';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (email) => {
    login(email);
    navigate('/dashboard');
  };

  return (
    <div className="page-root min-h-screen relative agri-login-background">
      <div className="agri-sky-clouds" aria-hidden="true">
        <div className="cloud cloud1" />
        <div className="cloud cloud2" />
        <div className="cloud cloud3" />
      </div>
      <div className="farm-trees" aria-hidden="true">
        <div className="tree" />
        <div className="tree tree-large" />
        <div className="tree" />
      </div>
      <main className="hero-grid w-full relative z-10">
        <HeroSlider />
        {/* Keep the login card visually above the slider */}
        <div className="login-overlay">
          <LoginCard onLogin={handleLogin} />
        </div>
      </main>
    </div>
  );
}
