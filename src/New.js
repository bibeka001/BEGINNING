import React from "react";
const New = () => {
  return (
    <>
      <h1>This is New Component</h1>
      <nav className="navbar navbar-dark bg-dark">
        <Link to="new" className="navbar-brand">
          NEW Component
        </Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link"></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default New;
