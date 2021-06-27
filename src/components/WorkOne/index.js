import React from "react";
import "./style.css";
import Pokemon from './project2.png';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function WorkOne() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <a href="https://whos-the-pokemon.herokuapp.com">
                    <img alt="Whos-That-Pokemon" src={Pokemon} />
                </a>
                <a href="https://github.com/anniechen9025/Whos-That-Pokemon.git">
                    <button class="button">Pokemon!!!</button>
                </a>
            </div>
        </nav>
    );
}

export default WorkOne;
