import React from "react";
import "./style.css";
// import Pokemon from './pokemon.png';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Project({ project }) {
    return (
        <div className="col-12 col-sm-6">
            <div className ="card text-center">
                <a href={project.github}>
                    <img id="images" className="rounded card-img-top" src={require(`./${project.name}.png`).default} />
                </a>
                <div className="card-body">
                    <a href={project.repo}>
                        <button className="btn btn-light">{project.name}</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;
