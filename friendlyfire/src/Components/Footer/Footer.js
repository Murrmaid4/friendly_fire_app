import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import { FaUser, FaUsers, FaHeart } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import "./Footer.css";
import Account from "../../Pages/Account/Account.js";
import Matches from "../../Pages/Matches/Matches.js";
import Messages from "../../Pages/Messages/Messages.js";

const Footer = () => {
  return (
    <nav className="bottom-nav">
      <NavLink
        to="../../Pages/Account/Account.js"
        exact
        activeClassName="active"
      >
        <FaUser />
        <span>Profile</span>
      </NavLink>
      <NavLink to="/" exact activeClassName="active">
        <FaUsers />
        <span>Forums</span>
      </NavLink>
      <NavLink
        to="../../Pages/Matches/Matches.js"
        exact
        activeClassName="active"
      >
        <FaHeart />
        <span>Match</span>
      </NavLink>
      <NavLink
        to="../../Pages/Messages/Messages.js"
        exact
        activeClassName="active"
      >
        <IoChatbubbleEllipsesSharp />
        <span>Messages</span>
      </NavLink>
    </nav>
  );
};

export default Footer;
