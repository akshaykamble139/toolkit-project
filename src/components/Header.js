import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../resources/styles/Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        <div className="back-button-container">
          {location.pathname !== '/' && (
            <button className="back-button" onClick={() => navigate(-1)}>
              &larr; Back
            </button>
          )}
        </div>
        <h1 className="header-title">My Project Portfolio</h1>
        <div className="placeholder"></div>
      </div>
    </header>
  );
};

export default Header;