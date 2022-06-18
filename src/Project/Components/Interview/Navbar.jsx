import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/compA" className="navbar-brand">
        This is the Navbar
      </Link>
      <div className="ml-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/category" className="nav-link">
              Category List
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/plist" className="nav-link">
              Product List
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cproduct" className="nav-link">
              Create Product
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
