import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BsChatFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { RiSettings4Fill, RiLogoutCircleFill } from "react-icons/ri";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="dash-logo">
        <img src={Logo} alt="" />
        <h1>Moon Innovation</h1>
      </div>
      <ul className="dash--nav-list">
        <li className="dash--nav-list-item">
          <Link to="/dashboard" className="sidebar-link">
            <MdDashboard />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="dash--nav-list-item">
          <Link to="/clients" className="sidebar-link">
            <FaUserTie />
            <span>Client</span>
          </Link>
        </li>
        <li className="dash--nav-list-item">
          <Link to="/chats" className="sidebar-link">
            <BsChatFill />
            <span>Chats</span>
          </Link>
        </li>
        <li className="dash--nav-list-item">
          <Link to="/dashboard" className="sidebar-link">
            <RiSettings4Fill />
            <span>Settings</span>
          </Link>
        </li>
        <li className="dash--nav-list-item">
          <Link to="/login" className="sidebar-link">
            <RiLogoutCircleFill />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
