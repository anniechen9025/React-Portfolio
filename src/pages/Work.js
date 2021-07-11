import React, { useState } from "react";
import Project from "../components/Project";



function Work() {

    const [project] = useState([{
        name: "Pokemon",
        github: "https://whos-the-pokemon.herokuapp.com",
        repo: "https://github.com/anniechen9025/Whos-That-Pokemon.git",
    }, {
        name: "Note-Taker",
        github: "https://jouan-note-taker.herokuapp.com/",
        repo: "https://github.com/anniechen9025/Note-Taker.git",
    }, {
        name: "Wheather-Dashboard",
        github: "https://anniechen9025.github.io/Server-Side-APIs-Weather-Dashboard/",
        repo: "https://github.com/anniechen9025/Server-Side-APIs-Weather-Dashboard.git",
    }, {
        name: "Foodies",
        github: "https://anniechen9025.github.io/Foodies/",
        repo: "https://github.com/anniechen9025/Foodies.git",
    }, {
        name: "Budget-Tracker",
        github: "https://jouan-budget-trackers.herokuapp.com",
        repo: "https://github.com/anniechen9025/Budget-Trackers",
    }, {
        name: "Workout-Tracker",
        github: "https://jouan-workout-tracker.herokuapp.com/?id=60bcd7a175645000157af490",
        repo: "https://github.com/anniechen9025/Workout-Tracker",
    }])

    return (
        <div>
            <h2>Work </h2>
            <h2> Click on picture to website. Click button to work Git Repo.</h2>
            <div className = "container-md">
                <div className="row">
                    {project.map((project, id) => {
                        return <Project project={project} key={id} />
                    })}
                </div>
            </div>

        </div>
    );
}


export default Work;
