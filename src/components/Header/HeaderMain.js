import React, { Component } from 'react';
import logo from "./gambanner.jpg" // Tell Webpack this JS file uses this image


class Header extends Component {
  render() {
    return (
        <div className="AppDarkMode">
        <img src={logo} className="responsive" alt="Logo" />
        </div>
    );
  }
}

export default Header;