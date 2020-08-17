import React from "react";
import "../Footer.css";
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";
import iconTwitter from "../images/icon-twitter.svg";
import iconInstagram from "../images/icon-instagram.svg";
import iconFacebook from "../images/icon-facebook.svg";

export default function Footer() {
  return (
    <footer>
      <div className={"container mx-5"}>
        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"widget__item"}>
              <div className={"logo"}>
                <Link to="/" title={"Home"}>
                  <img alt={"Logo"} src={logo} style={{ width: "10rem" }} />
                </Link>
              </div>

              <div className={"about"}>
                <p>
                  Mościwego Pana zastępuje i zwycięzca, wydartych potomkom
                  Cezarów rzucił w Pańskim pisano zakonie i Rzeczpospolita!
                  Zawżdy z których by wychowanie poznano stołeczne.
                </p>
              </div>
            </div>
          </div>

          <div className={"col-3"}>
            <div className={"widget__item"}>
              <div className={"links"}>
                <h4>Service</h4>
                <ul>
                  <li>
                    <Link to="/contact" title={"Contact Us"}>
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
                      Private Policy
                    </Link>
                  </li>
                  <li>
                    <a href="519603221" title={"Phone number"}>
                      tel. 519 603 221
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={"col-3"}>
            <div className={"widget__item"}>
              <div className={"social"}>
                <a
                  href="https://twitter.com"
                  target={"_blank"}
                  title={"Twitter"}
                >
                  <img alt={"Twitter"} src={iconTwitter} />
                </a>

                <a
                  href="https://www.instagram.com"
                  target={"_blank"}
                  title={"Instagram"}
                >
                  <img alt={"Instagram"} src={iconInstagram} />
                </a>

                <a
                  href="https://www.facebook.com"
                  target={"_blank"}
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
