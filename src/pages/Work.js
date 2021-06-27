import React from "react";
import WorkOne from "../components/WorkOne";
import WorkTwo from "../components/WorkTwo";
import WorkThree from "../components/WorkThree";
import WorkFour from "../components/WorkFour";


function Work() {
    return (
        <div>
            <h2 id="Work">Work </h2>
            <h2 id="Work"> Click on picture to website. Click button to work Git Repo.</h2>

            <WorkOne />
            <WorkTwo />
            <WorkThree />
            <WorkFour />
        </div>
    );
}


export default Work;
