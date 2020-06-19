import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects col-6 container">
        <div className="row">
            <h1 className="portfolio-head">PORTFOLIO PROJECTS</h1>
            <div className="port-proj col-12">
                <img src={require("../graphic-assets/images/CC-screenshot.JPG")} class="CC" alt="..." />
                <div className="proj-text">
                <h1>CAVLIN'S CUTS</h1>
                <p>A FICTIONAL BARBER WEBSITE</p>
                </div>
            </div>
            <div className="port-proj col-12">
                <img src={require("../graphic-assets/images/DD-screenshot.JPG")} class="DD" alt="..." />
                <div className="proj-text">
                <h1>DINNER DUCK</h1>
                <p>A TOOL THAT PLANS A MEAL FOR MANY</p>
                </div>
            </div>
            <div className="port-proj col-12">
                <img src={require("../graphic-assets/images/AA-screenshot.JPG")} class="AA" alt="..." />
                <div className="proj-text">
                <h1>ASHWORTH'S ADOPTIONS</h1>
                <p>A FICTIONAL PET ADOPTION WEBSITE</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Projects;
