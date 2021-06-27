import React from "react";
import "./style.css";
import Deer from './greydeer.png'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <img class="img-fluid" src={Deer} alt="grey deer" />
      </div>
    </nav>
  );
}

export default Navbar;
