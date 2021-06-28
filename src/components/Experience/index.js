import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Experience() {
    return (
        <div class="container">
            <div class = "p-3 border-top border-2 border-secondary"></div>
            <div class="row">
                <div class="col-12 col-sm-6">
                    
                </div>
                <div class="col-12 col-sm-6 align-self-center justify-content-center">
                    <div class=" row justify-content-center">
                        <h2 class="col-12 col-sm-6 font-monospace">Skills</h2>
                        <div class="col-sm-=6"></div>
                        <div>
                            <h2 class="h-50"></h2>
                        </div>
                    </div>
                    <div class="row fs-5 fw-light">
                        <ul class="col-12 col-sm-6">
                            <li>Detail oriented</li>
                            <li>Team-player</li>
                            <li>Strong with communication</li>
                            <li>Problem solving and creation of multiple solutions.</li>
                            <li>Entrepreneurial attitude</li>
                            <li>Microsoft Systems</li>
                            <li>Quadrilingual in EN, CN, JP, KR</li>
                        </ul>
                        <ol class="col-12 col-sm-6"> Tech Skill:
                            <li>Chinese (Mandarin)</li>
                            <li>English</li>
                            <li>Japanese</li>
                            <li>Korean</li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default Experience;
