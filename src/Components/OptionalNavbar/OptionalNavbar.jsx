import React from "react";
import "./OptinalNavbar.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function OptionalNavbar() {
  const location = useLocation();
  const signInActive = location.pathname === "/signIn";
  const textColorStyle = useSelector((state) => state.navbarReducer);
  const changeBg = location.pathname === "/dashboard" && {
    background: "black",
    borderRadius: "0 0 1rem 1rem",
  };

  return (
    <div className="OptionalNavbar" style={changeBg ? changeBg : {}}>
      <div className="OptionalNavbar-navbarLeft">
        <h3 className="Logostyle">
          <span>LOGO</span>
        </h3>
      </div>
      <div className="OptionalNavbar-navbarRight">
        <NavLink
          exact
          activeClassName="linkActive"
          to="/"
          style={textColorStyle}
        >
          Home
        </NavLink>
        <NavLink
          exact
          activeClassName="linkActive"
          to="/"
          style={textColorStyle}
        >
          About
        </NavLink>
        {signInActive ? (
          <NavLink
            exact
            activeClassName="linkActive"
            to="/signUp"
            style={textColorStyle}
          >
            Sign Up
          </NavLink>
        ) : (
          <NavLink
            exact
            activeClassName="linkActive"
            to="/signIn"
            style={textColorStyle}
          >
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
}
