import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <span class="head-text">Savion Devs</span>
          <ul class="nav-buttons">
          <li><img src={require("../graphic-assets/images/linkedin.png")} class="" alt="..." /></li>
          <li><img src={require("../graphic-assets/images/github.png")} class="" alt="..." /></li>
          <li><img src={require("../graphic-assets/images/download.png")} class="" alt="..." /></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;