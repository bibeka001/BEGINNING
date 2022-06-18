import React from "react";
import { Link } from "react-router-dom";
const ContactNavbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/navbar" className="navbar-brand">
        Contact List App
      </Link>
      <div className="ml-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="contact" className="nav-link">
              ContactApp
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home Component
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ContactNavbar;
