import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>
          Citadel | Citadel Securities Summer Invitational Datathon 2023 &nbsp;
          <a href="https://drive.google.com/file/d/1vdMG928yACV9ZuojUT7U7s5cgfoR3BJV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} fade />
          </a>
        </h3>
        <p>Data science project analyzing the performance of airline stocks in relation to factors
          such as flight reliability, jet fuel prices, US events, and natural disasters.</p>
        <i>python, jupyter notebook, numpy, pandas, matplotlib </i>
      </div>
      <div className="project">
        <h3>
          Naïve Bayes Classifier &nbsp;
          <a href="https://github.com/nikashchhadia/naive-bayes-classifier" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} fade />
          </a>
        </h3>
        <p>Machine learning model trained to predict class labels assuming the independence of features.</p>
        <i>python, numpy, pandas</i>
      </div>
      <div className="project">
        <h3>
          Heap Allocator &nbsp;
          <a href="https://github.com/nikashchhadia/heap-allocator" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} fade />
          </a>
        </h3>
        <p>Explicit and implicit heap allocators simulating dynamic memory allocation in the C language.</p>
        <i>C</i>
      </div>
      <div className="project">
        <h3>
          Tetris &nbsp;
          <a href="https://github.com/nikashchhadia/tetris" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} fade />
          </a>
        </h3>
        <p>Classic Tetris implemented in Java with interactive controls and GUI.</p>
        <i>java</i>
      </div>
      <div className="project">
        <h3>
          Personal Website &nbsp;
          <a href="https://nikashchhadia.github.io/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLink} fade />
          </a>
        </h3>
        <p>The website you're on right now!</p>
        <i>react, javascript, html, css</i>
      </div>
    </section>
  );
};

export default Projects;