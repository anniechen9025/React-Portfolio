import React from "react";
import "./style.css";
import Me from './jouan.JPG';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Selfie() {
    return (
        <div class="col-12 col-md-5 col-sm-6">
            <img class="img-thumbnail selfie" src={Me} alt="Selfie" />
        </div>
    );
}

export default Selfie;
