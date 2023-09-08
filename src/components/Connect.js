import React from 'react';
import './Connect.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Connect = () => {
  return (
    <section id="connect">
      <a href="mailto:chhadia@stanford.edu" target="_blank" rel="noopener noreferrer">
        Email &nbsp; <FontAwesomeIcon icon={faEnvelope} beat />
      </a>
      <a href="https://www.linkedin.com/in/nikashchhadia/" target="_blank" rel="noopener noreferrer">
        LinkedIn &nbsp; <FontAwesomeIcon icon={faLinkedin} beat />
      </a>
      <a href="https://github.com/nikashchhadia" target="_blank" rel="noopener noreferrer">
        Github &nbsp; <FontAwesomeIcon icon={faGithub} beat />
      </a>
      <a href={process.env.PUBLIC_URL + "/resume.pdf"} target="_blank" rel="noopener noreferrer">
        Resume &nbsp; <FontAwesomeIcon icon={faFileLines} beat />
      </a>
    </section>
  );
};

export default Connect;