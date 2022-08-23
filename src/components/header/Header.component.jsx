import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Button from "../button/Button.component";
import "./Header.style.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <nav className="navigation">
        <div className="header-logo" onClick={() => navigate("/")}>
          <img src={Logo} alt="MI" />
          <span>MOON INNOVATION</span>
        </div>
        <ul className="nav-list">
          <li onClick={() => navigate("/")}>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <div className="nav-btn">
          <span onClick={() => navigate("/login")}>
            <Button content="Login" bg="light" />
          </span>
          <Button content="Download App" bg="dark" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
