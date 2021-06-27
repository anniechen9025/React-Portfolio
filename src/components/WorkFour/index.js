import React from "react";
import "./style.css";
import Foodies from './foodies.png';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function WorkFour() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <a href="https://anniechen9025.github.io/Foodies/">
                    <img alt="note-taker" src={Foodies} />
                </a>
                <a href="https://github.com/anniechen9025/Foodies.git">
                    <button class="button">Foodies</button>
                </a>
            </div>
        </nav>
    );
}

export default WorkFour;
