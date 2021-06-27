import React from "react";
import "./style.css";
import Notetaker from './notetaker.png';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function WorkTwo() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <a href="https://jouan-note-taker.herokuapp.com/">
                    <img alt="note-taker" src={Notetaker} />
                </a>
                <a href="https://github.com/anniechen9025/Note-Taker.git">
                    <button class="button">Note Taker</button>
                </a>
            </div>
        </nav>
    );
}

export default WorkTwo;
