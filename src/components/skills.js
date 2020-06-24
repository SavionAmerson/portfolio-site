import React from "react";

class Skills extends React.Component {
  render() {
    return (
        <div className="main-skills">
            <h1 className="animate__animated animate__zoomIn">MAIN SKILLS</h1>
            <div className="skills-section">
                <div className="skills">
                    <img data-toggle="tooltip" data-placement="top" title="HTML 5" src={require("../graphic-assets/images/html.png")} class="skill-icon animate__animated animate__zoomIn" alt="..." />
                    <img data-toggle="tooltip" data-placement="top" title="CSS 3" src={require("../graphic-assets/images/css.png")} class="skill-icon animate__animated animate__zoomIn" alt="..." />
                    <img data-toggle="tooltip" data-placement="top" title="Javascript" src={require("../graphic-assets/images/javascript.png")} class="skill-icon animate__animated animate__zoomIn" alt="..." />
                    <img data-toggle="tooltip" data-placement="top" title="React" src={require("../graphic-assets/images/react.png")} class="skill-icon animate__animated animate__zoomIn" alt="..." />
                    <img data-toggle="tooltip" data-placement="top" title="Angular" src={require("../graphic-assets/images/angular.png")} class="skill-icon animate__animated animate__zoomIn" alt="..." />
                    <img data-toggle="tooltip" data-placement="top" title="Sass" src={require("../graphic-assets/images/sass.png")} class="skill-icon animate__animated animate__zoomIn" alt="..." />
                    <img data-toggle="tooltip" data-placement="top" title="Bootstrap" src={require("../graphic-assets/images/bootstrap.png")} class="skill-icon animate__animated animate__zoomIn" alt="..." />
                    <img data-toggle="tooltip" data-placement="top" title="Git" src={require("../graphic-assets/images/git.png")} class="skill-icon animate__animated animate__zoomIn" alt="..." />
                </div>
            </div>
      </div>
    );
  }
}

export default Skills;
