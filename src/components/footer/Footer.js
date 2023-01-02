import "./Footer.scss";

import {
  RiArrowRightSLine,
  RiLinkedinBoxFill,
  RiDiscordFill,
  RiInstagramFill,
  RiTwitterFill,
} from "react-icons/ri";
import logo from "../../icons/logo_request.png";
import bradrain from "../../icons/logo_last.png";
import gesture from "../../icons/gesture.png";

function Footer() {
  return (
    <div className="footer">
      <p className="footer-title">
        Join Our Community & Club
        <img src={gesture} alt="gesture" className="title-icon" />
      </p>
      <p className="footer-subtitle">
        If you want to be informed about the services that Bradrain offers and
        works on,
        <br />
        click the “Get Started” button, leave your e-mail and be a part of this
        unique experience!
      </p>
      <div className="footer-button">
        <div className="button-icon">
          <img src={logo} alt="avatar" className="icon-logo" />
        </div>
        <span className="button-text">Get Started</span>
        <RiArrowRightSLine className="icon" />
      </div>
      <div className="footer-menu">
        <div className="menu-item-1">
          <img src={bradrain} alt="logo" className="item-logo" />
          <p className="item-subtitle">Everything About Brain Drain.</p>
        </div>
        <div className="menu-item-2">
          <a href="/" className="first-item">
            Bradrain
          </a>
          <a href="/" className="a-item">
            Home
          </a>
          <a href="/" className="a-item">
            About Us
          </a>
          <a href="/" className="a-item">
            Blog
          </a>
        </div>
        <div className="menu-item-2">
          <a href="/" className="first-item">
            Others
          </a>
          <a href="/" className="a-item">
            Get Help
          </a>
          <a href="/" className="a-item">
            FAQ
          </a>
          <a href="/" className="a-item">
            Privacy Policy
          </a>
          <a href="/" className="a-item">
            Terms of Service
          </a>
        </div>
        <div className="menu-item-4">
          <p className="item-text">Follow us on social media</p>
          <p className="item-text">|</p>
          <RiLinkedinBoxFill className="item-icon" />
          <RiDiscordFill className="item-icon" />
          <RiInstagramFill className="item-icon" />
          <RiTwitterFill className="item-icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
