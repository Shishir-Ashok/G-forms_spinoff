import React, { useEffect } from "react";
import "./OptinalNavbar.scss";
import { NavLink, useLocation } from "react-router-dom";

export default function OptionalNavbar() {
  const location = useLocation();
  const textColorStyle =
    location.pathname !== "/signUp" ? { color: "black" } : {};

  const onScrollNavbar = (e) => {
    console.log("scrolling", e);
  };
  useEffect(() => {
    document
      .querySelector(".OptionalNavbar")
      .addEventListener("scroll", onScrollNavbar);
    return () => {
      document
        .querySelector(".OptionalNavbar")
        .removeEventListener("scroll", onScrollNavbar);
    };
  });
  return (
    <div className="OptionalNavbar">
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
        <NavLink
          exact
          activeClassName="linkActive"
          to="/signUp"
          style={textColorStyle}
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
}
