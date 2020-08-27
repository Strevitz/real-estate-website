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

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Propertie" />
            </Link>
            <button
              onClick={this.handleToggle}
              type="button"
              className="nav-btn"
            >
              <Hamburger
                size={18}
                duration={0.5}
                rounded
                className="nav-icon"
              />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li onClick={this.closeMenu}>
              <NavLink
                to="/"
                exact
                activeStyle={{ fontWeight: "bold", color: "#af9a7d" }}
              >
                Home
              </NavLink>
            </li>
            <li onClick={this.closeMenu}>
              <NavLink
                to="/apartments"
                exact
                activeStyle={{ fontWeight: "bold", color: "#af9a7d" }}
              >
                Apartments
              </NavLink>
            </li>
            <li onClick={this.closeMenu}>
              <NavLink
                to="/about"
                exact
                activeStyle={{ fontWeight: "bold", color: "#af9a7d" }}
              >
                About Propriété
              </NavLink>
            </li>
            <li onClick={this.closeMenu}>
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
