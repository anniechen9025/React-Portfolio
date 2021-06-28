import React from "react";
import Selfie from '../Selfie';
import "./style.css";

function Introduction() {
    return (
        <div class="container-md">
            <div class="row">
                <div class="col-12 col-sm-6"></div>
                <div class="col-12 col-sm-6 text-center"></div>
            </div>


            <div class="row">
                <Selfie />
                <div class="col-12 col-md-6 col-sm-6">
                    <div class="h-50 text-center font-monospace" id="text1">
                        <div class="h-50"></div>
                        <h2 id="About-me">About Me</h2>
                    </div>
                    <p class="fs-5 fw-light">
                        Hi Everyone, This is Jou-An Chen!
                        I would like to introduce myself a little bit in this corner.
                    </p>
                    <p class="fs-5 fw-light">
                        I moved to the United State since 2011. Had live in Seattle area since then.
                        Currently working at NAKAMURA USA INC as frieght forwarder. Before that I had work in several areas such as translating and market..etc.
                        I was interesting with coding is because of my friend who is software engineer and once I started coding I found out that is very fun to build up a thing.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Introduction;
