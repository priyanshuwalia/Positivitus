import React from 'react';
import './Navbar.css'; // For styling

export function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src="src/assets/Positivitus-logo.png" alt="Positivus Logo" className="logo-icon" />
     
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>About us</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      {/* Button */}
      <button className="navbar-button">Request a quote</button>
    </nav>
  );
}

export default Navbar;
