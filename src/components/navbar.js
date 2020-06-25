import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <span class="head-text">Savion Devs</span>
          <ul class="nav-buttons">
          <a href="https://linkedin.com/in/savion-amerson-629a32190/" target="blank"><li><img src={require("../graphic-assets/images/linkedin.png")} class="" alt="..." /></li></a>
          <a href="https://github.com/savionamerson" target="blank"><li><img src={require("../graphic-assets/images/github.png")} class="" alt="..." /></li></a>
          <div className="resume">
          <a href="Savion Amerson Resume 2020.pdf" download><li><img src={require("../graphic-assets/images/download.png")} class="" alt="..." /></li>
          </a><h1>RESUME</h1>
          </div>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
