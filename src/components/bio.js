import React from "react";

class Bio extends React.Component {
  render() {
    return (
      <div className="bio-section col-4">
        <h1 className="about-me animate__animated animate__bounceInLeft">ABOUT ME</h1>
        <div className="bio animate__animated animate__bounceInLeft">
          <div className="introduction">
          <img src={require("../graphic-assets/images/bitmoji.jpg")} class="bitmoji" alt="..." />
          <h1>
            Hi, I'm Savion!
          </h1>
          <h2>
          I'm a front-end web developer able to build and maintain interactive web pages with UI effects, animations, dynamic user experiences! 
          </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
