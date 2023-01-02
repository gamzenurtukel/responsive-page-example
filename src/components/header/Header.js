import "./Header.scss";

import { RiArrowRightLine, RiArrowDownSLine } from "react-icons/ri";
import logo from "../../icons/logo_last.png";
import help from "../../icons/help.png";
import FAQ from "../../icons/FAQ.png";

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <div>
            <img src={logo} alt="logo" className="logo" />
          </div>
        </div>
        <div className="header-list">
          <ul className="header-list-items">
            <li className="header-list-item">
              <p>About Us</p>
            </li>
            <li className="header-list-item">
              <p>Blog</p>
            </li>
            <li className="support-list header-list-item">
              <p>Support</p>
              <RiArrowDownSLine className="arrow-down" />
              <ul className="support-dropdown">
                <li className="dropdown-item">
                  <div className="item">
                    <img src={help} alt="help" className="item-img" />
                    <span>Get Help</span>
                  </div>
                  <RiArrowRightLine className="icon" />
                </li>
                <li className="dropdown-item">
                  <div className="item">
                    <img src={FAQ} alt="FAQ" className="item-img" />
                    <span>FAQ</span>
                  </div>
                  <RiArrowRightLine className="icon" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="header-button">
          <span>Get started</span>
          <i>
            <RiArrowRightLine className="ok-right-icon" />
          </i>
        </div>
      </div>
    </div>
  );
}

export default Header;
