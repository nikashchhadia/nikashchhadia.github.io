import React from 'react';
import { Link } from 'react-scroll';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav id="navigation">
      <Link to="header" smooth={true} duration={750}>Home</Link>
      <Link to="about" smooth={true} duration={750}>About</Link>
      <Link to="projects" smooth={true} duration={750}>Projects</Link>
      <Link to="connect" smooth={true} duration={750}>Connect</Link>
    </nav>
  );
};

export default Navigation;