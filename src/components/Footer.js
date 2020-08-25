import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";
import iconTwitter from "../images/icon-twitter.svg";
import iconInstagram from "../images/icon-instagram.svg";
import iconFacebook from "../images/icon-facebook.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={"container mx-5"}>
          <div className={"row"}>
            <div className={"col-md-6 col-sm-12"}>
              <div className={"widget__item"}>
                <div className={"logo"}>
                  <Link to="/" title={"Home"}>
                    <img alt={"Logo"} src={logo} style={{ width: "10rem" }} />
                  </Link>
                </div>

                <div className={"about"}>
                  <p>
                    Whether you are a landlord looking for a let only, rent
                    collection or full management service, Propriété will help
                    you with your legal, statutory and financial obligations
                    whilst finding the most suitable, fully referenced tenants
                    for your property.
                  </p>
                </div>
              </div>
            </div>

            <div className={"col-md-3 col-sm-12"}>
              <div className={"widget__item"}>
                <div className={"links"}>
                  <h4>Customer Service</h4>
                  <ul>
                    <li>
                      <Link to="/about" title={"About Us"}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" title={"Contact Us"}>
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy" title={"Privacy Policy"}>
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <a href="8078078074" title={"Phone number"}>
                        tel. 807-807-8074
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={"col-md-3 col-sm-12"}>
              <div className={"widget__item"}>
                <div className={"social"}>
                  <a
                    href="https://twitter.com"
                    target={"_blank"}
                    rel="noopener noreferrer"
                    title={"Twitter"}
                  >
                    <img alt={"Twitter"} src={iconTwitter} />
                  </a>

                  <a
                    href="https://www.instagram.com"
                    target={"_blank"}
                    rel="noopener noreferrer"
                    title={"Instagram"}
                  >
                    <img alt={"Instagram"} src={iconInstagram} />
                  </a>

                  <a
                    href="https://www.facebook.com"
                    target={"_blank"}
                    rel="noopener noreferrer"
                    title={"Facebook"}
                  >
                    <img alt={"Facebook"} src={iconFacebook} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={"copyright"}>
            <p>
              Copyright {new Date().getFullYear()}, {` `}{" "}
              <a href="https://strzewiczek.pl" title={"Propriété"}>
                Propriété
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
