import React from 'react';

const AboutMe = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-3">About Me</h2>
        <div className="content has-text-centered">
          <figure className="image is-128x128 is-inline-block">
            <img className="is-rounded" src="/assets/images/photo.jpg" alt="Developer" />
          </figure>
          <p>
            Hello, I am Chris and have gone through a fast-paced class to become a Full-Stack Developer. This 
            app will showcase some of my work in the class and how far I have come from the start. I would appreciate
            an input on my work and possibly even suggestions on apps to create to have my portfolio standout.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;