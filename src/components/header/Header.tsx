import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <Link to={'/'} className="header-item">
          Home
        </Link>
        <Link to={'/about'} className="header-item">
          About
        </Link>
      </div>
    </div>
  );
};
