import React, { useEffect } from "react";
import "./OptinalNavbar.scss";
import { NavLink, useLocation } from "react-router-dom";

export default function OptionalNavbar(props) {
  const location = useLocation();

  const signInActive = location.pathname === "/signIn";

  const textColorStyle =
    !location.pathname === "/dashboard" && location.pathname !== "/signIn"
      ? { color: "black" }
      : {};

  const onScrollNavbar = (e) => {
    console.log("scrolling", e);
  };

  const changeBg = location.pathname === "/dashboard" && {
    background: "#18124C",
    borderRadius: "0 0 1.5rem 1.5rem",
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
  console.log(changeBg);
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
