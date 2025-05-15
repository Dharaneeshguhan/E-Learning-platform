import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Learn with Joy</h1>
        <p className="subtitle">Your Ultimate Learning Platform</p>
        <div className="landing-buttons">
          <button 
            className="button primary"
            onClick={() => navigate('/login')}
          >
            Sign in as User
          </button>
          <button 
            className="button outline"
            onClick={() => navigate('/admin-login')}
          >
            Admin Login
          </button>
        </div>
        <div className="landing-features">
          <div className="feature-item">
            <h3>For Students</h3>
            <ul>
              <li>Access to comprehensive courses</li>
              <li>Interactive learning materials</li>
              <li>Track your progress</li>
              <li>Join the community</li>
            </ul>
          </div>
          <div className="feature-item">
            <h3>For Administrators</h3>
            <ul>
              <li>Manage courses and content</li>
              <li>Monitor student progress</li>
              <li>Generate reports</li>
              <li>Control platform settings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
