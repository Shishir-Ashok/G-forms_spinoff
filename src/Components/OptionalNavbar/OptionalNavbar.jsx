import React from "react";
import "./OptinalNavbar.scss";
import { NavLink } from "react-router-dom";

export default function OptionalNavbar() {
  return (
    <div className="OptionalNavbar">
      <div className="OptionalNavbar-navbarLeft">
        <h3 className="Logostyle">
          <span>LOGO</span>
        </h3>
      </div>
      <div className="OptionalNavbar-navbarRight">
        <NavLink exact activeClassName="linkActive" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="linkActive" to="/">
          About
        </NavLink>
        <NavLink exact activeClassName="linkActive" to="/signUp">
          Sign Up
        </NavLink>
      </div>
    </div>
  );
}
