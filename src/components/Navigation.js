import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar is-dark">
      <div className="navbar-menu is-active">
        <div className="navbar-start">
          <NavLink className="navbar-item" exact to="/" activeClassName="is-active">About Me</NavLink>
          <NavLink className="navbar-item" to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
          <NavLink className="navbar-item" to="/contact" activeClassName="is-active">Contact</NavLink>
          <NavLink className="navbar-item" to="/resume" activeClassName="is-active">Resume</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
