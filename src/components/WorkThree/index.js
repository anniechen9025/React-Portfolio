import React from "react";
import "./style.css";
import WeatherDashboard from './hw06website.png';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function WorkThree() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <a href="https://anniechen9025.github.io/Server-Side-APIs-Weather-Dashboard/">
                    <img alt="note-taker" src={WeatherDashboard} />
                </a>
                <a href="https://github.com/anniechen9025/Server-Side-APIs-Weather-Dashboard.git">
                    <button class="button">Weather Dashboard</button>
                </a>
            </div>
        </nav>
    );
}

export default WorkThree;
