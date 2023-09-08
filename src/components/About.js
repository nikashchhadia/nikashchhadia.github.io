import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div id="box">
        <div id="description">
          <h2>About Me</h2>
          <p>Hi! I'm Nikash, a passionate computer science and mathematics student at Stanford University.
          Hailing from the Chicagoland area, I thrive on exploring the synergy between math and technology,
          holding a keen interest in fields like machine learning and data science. Eager to dive into cutting-edge
          advancements and innovation, I aim to leverage my education and skills and venture into a career path in
          these dynamic fields. Ultimately, in this rapidly evolving technological landscape, I am excited to embrace
          challenges, learn voraciously, and collaborate with brilliant minds.</p>
        </div>
      </div>
      <div id="boxes">
        <div id="coursework">
          <h3>Coursework</h3>
          <ul>
            <li>CS 106B - Programming Abstractions</li>
            <li>CS 103 - Mathematical Foundations of Computing</li>
            <li>CS 109 - Probability for Computer Science</li>
            <li>CS 107 - Computer Organization and Systems</li>
            <li>CS 111 - Operating Systems Principles</li>
            <li>CS 148 - Computer Graphics and Imaging</li>
            <li>CS 161 - Design and Analysis of Algorithms</li>
            <li>CS 221 - Principles of Artificial Intelligence</li>
            <li>Math 51 - Linear Algebra</li>
            <li>Math 53 - Differential Equations</li>
            <li>Math 104 - Applied Matrix Theory</li>
          </ul>
        </div>
        <div id="interests">
          <h3>Interests</h3>
          <ul>
          <li>Machine Learning</li>
            <li>Data Science</li>
            <li>Finance</li>
            <li>Basketball</li>
            <li>Golf</li>
            <li>Skiing</li>
            <li>Chess</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;