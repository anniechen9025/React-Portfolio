import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Experience() {
    return (
        <div class="container">
            <div class="p-3 border-top border-2 border-secondary"></div>
            <div class="row">
                <div class="col-12 col-sm-6 row">
                    <h2 class="col-12 col-sm-9 pb-3 font-monospace text-center">Experiences</h2>
                    <div class="col-12 col-sm-3">
                    </div>
                    <div class="col-12 col-sm-2">
                    </div>
                    <div class="col-12 col-sm-10">
                        <div>
                            <h4 class="fs-5">Freight Forwarder | July, 2018 - Current</h4>
                            <p class="fs-6 fw-light">Seattle, Washington</p>
                        </div>
                        <div>
                            <h4 class="fs-5">Japanese Translator | Oct, 2014 - Current</h4>
                            <p class="fs-6 fw-light">Seattle, Washington</p>
                        </div>
                        <div>
                            <h4 class="fs-5">Chinese Tutor | Jan, 2015 - May, 2015</h4>
                            <p class="fs-6 fw-light">Bellingham, Washington</p>
                        </div>
                    </div>

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
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>MySQLDB</li>
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>Node</li>
                            <li>React</li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default Experience;
