import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import { FaUser, FaUsers, FaHeart } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import "./Footer.css";

const Footer = () => {
  return (
    // Needs routing
    <nav className="bottom-nav">
      <NavLink to="/profile" activeClassName="active">
        <FaUser />
        <span>Profile</span>
      </NavLink>
      <NavLink to="/forums" activeClassName="active">
        <FaUsers />
        <span>Forums</span>
      </NavLink>
      <NavLink to="/matches" activeClassName="active">
        <FaHeart />
        <span>Match</span>
      </NavLink>
      <NavLink to="/messages" activeClassName="active">
        <IoChatbubbleEllipsesSharp />
        <span>Messages</span>
      </NavLink>
    </nav>
  );
};

export default Footer;
