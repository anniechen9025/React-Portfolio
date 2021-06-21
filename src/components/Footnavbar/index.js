import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Footnavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        JOU-AN CHEN
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="https://github.com/anniechen9025/HW02.git">Github</a>
          </li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/jou-an-chen-9025/">Linkedln</a>
          </li>
          <li className="nav-item">
            <a href="index.html">Website</a>
          </li>
          <li className="nav-item">
            <a href="mailto:anniechen9025@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Footnavbar;
