import { Link } from "react-router-dom";
import React from "react";
import linkedIn from "../../img/icons/linkedIn.svg";
import gitHub from "../../img/icons/gitHub.svg";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <Link to="https://github.com/VahanKochkanyan">
                <img src={gitHub} alt="Link" />
              </Link>
            </li>
            <li className="social__item">
              <Link to="https://www.linkedin.com/in/vahan-kochkanyan-6779382aa ">
                <img src={linkedIn} alt="Link" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
