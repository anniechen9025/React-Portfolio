import React from "react";
import "./style.css";
import Icon from './resumeimg.png';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function ResumeIcon() {
    return (
        <div>
            <a href="./RESUMEPDF.pdf">
            <img src={Icon} alt="resume icon" />
            </a>
        </div>
    );
}

export default ResumeIcon;
