import React from 'react';

class Resume extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title is-3">Resume</h2>
          <h3 className="title is-4 mt-4">Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Resume;
