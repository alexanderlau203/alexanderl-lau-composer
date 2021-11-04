import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo">
        <div>Alexander Lau</div>
        <div>Composer</div>
      </div>

      {/* Navbar */}
      <div id="navLinks">
        <Link to="">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/compositions">Compositions</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;