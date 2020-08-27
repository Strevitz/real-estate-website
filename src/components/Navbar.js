import React, { Component } from "react";
import logo from "../images/logo2.png";
//import { Slant as Hamburger } from "hamburger-react";
import { HamburgerCollapse } from "react-animated-burgers";
import { Link, NavLink } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isActive: false,
  };

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  closeMenu = () => {
    this.setState({ isActive: false });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Propertie" />
            </Link>
            <button type="button" className="nav-btn">
              <HamburgerCollapse
                isActive={this.state.isActive}
                toggleButton={this.handleToggle}
                buttonColor="transparent"
                barColor="#af9a7d"
                buttonWidth={22}
              />
            </button>
          </div>
          <ul
            className={this.state.isActive ? "nav-links show-nav" : "nav-links"}
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
