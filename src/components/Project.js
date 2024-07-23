import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="card project">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={project.image} alt={project.title} />
        </figure>
      </div>
      <div className="card-content">
        <h3 className="title is-4">{project.title}</h3>
        <div className="content">
          <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Project</a>
          <br />
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
    </div>
  );
};

export default Project;