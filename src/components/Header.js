import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faEnvelope, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header id="header">
      <div id="contacts">
        <h1>Nikash Chhadia</h1>
        <a className="contact" href="mailto:chhadia@stanford.edu" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} beat />
        </a>
        <a className="contact" href="https://www.linkedin.com/in/nikashchhadia/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} beat />
        </a>
        <a className="contact" href="https://github.com/nikashchhadia" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} beat />
        </a>
        <a className="contact" href={process.env.PUBLIC_URL + "/resume.pdf"} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFileLines} beat />
        </a>
      </div>
      <div id="down-arrow">
        <Link to="about" smooth={true} duration={750}>
          <FontAwesomeIcon icon={faAngleDown} bounce />
        </Link>
      </div>
    </header>
  );
};

export default Header;