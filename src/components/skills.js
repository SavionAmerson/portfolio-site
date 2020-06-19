import React from "react";

class Skills extends React.Component {
  render() {
    return (
        <div className="main-skills">
            <h1>MAIN SKILLS</h1>
            <div className="skills-section col-6">
                <div className="skills">
                    <img src={require("../graphic-assets/images/html.png")} class="skill-icon" alt="..." />
                    <img src={require("../graphic-assets/images/css.png")} class="skill-icon" alt="..." />
                    <img src={require("../graphic-assets/images/javascript.png")} class="skill-icon" alt="..." />
                    <img src={require("../graphic-assets/images/react.png")} class="skill-icon" alt="..." />
                    <img src={require("../graphic-assets/images/angular.png")} class="skill-icon" alt="..." />
                    <img src={require("../graphic-assets/images/sass.png")} class="skill-icon" alt="..." />
                    <img src={require("../graphic-assets/images/bootstrap.png")} class="skill-icon" alt="..." />
                    <img src={require("../graphic-assets/images/git.png")} class="skill-icon" alt="..." />
                </div>
            </div>
      </div>
    );
  }
}

export default Skills;
