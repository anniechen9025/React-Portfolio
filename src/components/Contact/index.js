import React from "react";
import "./style.css";
import email from "./email-2.png";
import github from "./github-2.png";
import linkdin from "./linkdin.png";

function Contact() {
    return (
        <div class="container">
            <div class="space"><h2></h2></div>
            <div class="row">
                <div class="col-12 col-md-6  col-sm-5"></div>
                <div class="col-12 col-md-3 col-sm-3">
                    <p class="text-start">Currently open to jobs</p>
                    <p class="text-end">Contact me if interested :)</p>
                </div>
                <div class="col align-self-end pb-5">
                    <div class="row justify-content-evenly">
                        <div class="col-3">
                            <a href="mailto:anniechen9025@gmail.com"><img src={email} /></a>
                        </div>
                        <div class="col-3">
                            <a href="https://github.com/anniechen9025/React-Portfolio"><img src={github} /></a>
                        </div>
                        <div class="col-3">
                            <a href="https://www.linkedin.com/in/jou-an-chen-9025/"><img src={linkdin} /></a>
                        </div>
                        <div class="col-12 col-md-3 col-sm-3"></div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default Contact;
