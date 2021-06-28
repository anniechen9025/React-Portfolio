import React from "react";
import ResumeIcon from "../components/ResumeIcon";
import SkillList from "../components/ResumeSkill";


function Resume() {
    return (
        <div class="container">
            <div class ="row">
                <ResumeIcon />
                <SkillList />
            </div>
        </div>

    );
}


export default Resume;
