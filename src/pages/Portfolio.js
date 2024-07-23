import React, { Component } from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Note-Taker',
    image: './assets/NoteTaker.PNG',
    deployedLink: 'https://note-taker-dx8q.onrender.com/',
    githubLink: 'https://github.com/leafite/Note-Taker'
  },
  {
    title: 'First Portfolio',
    image: '/assets/Portfolio.PNG',
    deployedLink: 'https://leafite.github.io/My-Portfolio/',
    githubLink: 'https://github.com/leafite/My-Portfolio'
  },
  {
    title: 'Project 1',
    image: '/assets/project1.PNG',
    deployedLink: 'https://jovanna24.github.io/Room-3-Project-1',
    githubLink: 'https://github.com/jovanna24/Room-3-Project-1'
  },
];

class Portfolio extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title is-3">Portfolio</h2>
          <div className="columns is-multiline">
            {projects.map((project, index) => (
              <div className="column is-one-third" key={index}>
                <Project project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;