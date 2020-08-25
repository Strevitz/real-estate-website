import React, { Component } from "react";
import logo from "../images/logo2.png";
import { Slant as Hamburger } from "hamburger-react";
import { Link, NavLink } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleLinks = () => {
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
            <li onClick={this.handleLinks}>
              <NavLink
                to="/"
                exact
                activeStyle={{ fontWeight: "bold", color: "#af9a7d" }}
              >
                Home
              </NavLink>
            </li>
            <li onClick={this.handleLinks}>
              <NavLink
                to="/apartments"
                exact
                activeStyle={{ fontWeight: "bold", color: "#af9a7d" }}
              >
                Apartments
              </NavLink>
            </li>
            <li onClick={this.handleLinks}>
              <NavLink
                to="/about"
                exact
                activeStyle={{ fontWeight: "bold", color: "#af9a7d" }}
              >
                About Propriété
              </NavLink>
            </li>
            <li onClick={this.handleLinks}>
              <NavLink
                to="/contact"
                exact
                activeStyle={{ fontWeight: "bold", color: "#af9a7d" }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
