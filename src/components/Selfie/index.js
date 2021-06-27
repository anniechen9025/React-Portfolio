import React from "react";
import "./style.css";
import Me from './jouan.JPG';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <img src={Me} alt="Selfie" />
            </div>
        </nav>
    );
}

export default Navbar;
