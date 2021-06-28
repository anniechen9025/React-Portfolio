import React from "react";
import "./style.css";
// import Pokemon from './pokemon.png';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Project({ project }) {
    return (
        <div class="col-12 col-sm-6">
            <div class ="card text-center">
                <a href={project.github}>
                    <img class="img-thumbnail card-img-top images" src={require(`./${project.name}.png`).default} />
                </a>
                <div class="card-body">
                    <a href={project.repo}>
                        <button class="btn btn-light">{project.name}</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;
