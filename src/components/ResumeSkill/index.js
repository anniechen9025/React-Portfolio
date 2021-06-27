import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function SkillList() {
    return (
        <div>
            <h2>Skills</h2>
            <ul>
                <li>Detail oriented</li>
                <li>Team-player</li>
                <li>Strong with communication</li>
                <li>Problem solving and creation of multiple solutions.</li>
                <li>Entrepreneurial attitude</li>
                <li>Microsoft Systems</li>
            </ul>
            <ol> Quadrilingual:
                <li>Chinese (Mandarin)</li>
                <li>English</li>
                <li>Japanese</li>
                <li>Korean</li>
            </ol>
        </div>
    );
}

export default SkillList;
