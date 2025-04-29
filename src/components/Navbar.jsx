// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Navbar.css';

const Navbar = () => (
  <nav>
    <Link to="/feed">Feed</Link>
    <Link to="/profile">Profile</Link>
  </nav>
);

export default Navbar;
