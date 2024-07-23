import React from 'react';

const Resume = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-3">Resume</h2>
        <a className="button is-link" href="/assets/resume.pdf" download>Download Resume</a>
        <h3 className="title is-4 mt-4">Proficiencies</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
