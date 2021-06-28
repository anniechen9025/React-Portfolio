import React from "react";
import "./style.css";
import Icon from './resumeimg.png';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function ResumeIcon() {
    return (
        <div class ="col-12 col-sm-6">
            <a href="./RESUMEPDF.pdf">
            <img class="img-thumbnail selfie" src={Icon} alt="resume icon" />
            </a>
        </div>
    );
}

export default ResumeIcon;
