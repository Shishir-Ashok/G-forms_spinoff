import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Main">
      <div className="navbar">
        <div className="navbarLeft">
          <span></span>
          <h3 className="Logostyle">
            <span>LOGO</span>
          </h3>
          <span></span>
        </div>
        <div className="navbarRight">
          <NavLink exact activeClassName="linkActive" to="/">
            About
          </NavLink>
          <NavLink exact activeClassName="linkActive" to="/">
            Contact
          </NavLink>
          <NavLink exact activeClassName="linkActive" to="/signUp">
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
}
