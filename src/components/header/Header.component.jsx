import React from "react";
import Logo from "../../assets/logo.png";
import Button from "../button/Button.component";
import "./Header.style.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navigation">
        <div className="header-logo">
          <img src={Logo} alt="MI" />
          <span>MOON INNOVATION</span>
        </div>
        <ul className="nav-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <div className="nav-btn">
          <Button content="Login" bg="light" />
          <Button content="Download App" bg="dark" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
