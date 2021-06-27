import React from "react";
import Selfie from '../Selfie';
import "./style.css";

function Introduction() {
    return (
        <div class="container-md">
            <h2 id="About-me">About Me</h2>

            <div class="row">
                <Selfie />
                <div class="col-12 col-sm-6">
                    <p>
                        Hi Everyone, This is Jou-An Chen!
                        I would like to introduce myself a little bit in this corner.I moved to United State since 2011. Had live in Seattle area since then.
                        Currently waorking at NAKAMURA USA INC as frieght forwarder.before that I had work in several areas such as translating and market..etc.
                        I was insteresting with coding is because of my friend who is software engineer and once I started coding I found out that is very fun to build up a thing.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
