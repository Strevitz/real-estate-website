import React, { Component } from "react";
import logo from "../images/logo2.png";
import { Slant as Hamburger } from "hamburger-react";
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
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <Hamburger rounded={true} className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/rooms">About Propriété</Link>
            </li>
            <li>
              <Link to="/rooms">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
