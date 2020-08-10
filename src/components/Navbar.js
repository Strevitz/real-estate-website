import React, { Component } from "react";
import logo from "../images/logo.svg";
import { Spin as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="beach resort" />
            </Link>
            <button type="button" className="nav-btn">
              <Hamburger color="black" rounded className="nav-icon" />
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
