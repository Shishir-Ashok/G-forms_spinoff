import React, { useEffect } from "react";
import "./OptinalNavbar.scss";
import { NavLink, useLocation } from "react-router-dom";

export default function OptionalNavbar(props) {
  const location = useLocation();

  const signInActive = 
    location.pathname === "/signIn";



  const textColorStyle =
    !props.isDashboard && location.pathname !== "/signIn" ? { color: "black" } : {};


  const onScrollNavbar = (e) => {
    console.log("scrolling", e);
  };

  const changeBg = 
    props.isDashboard && {background: "black", "borderRadius": "0 0 1rem 1rem" }

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
    <div className="OptionalNavbar"  style={changeBg}>
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
        {signInActive?
        <NavLink 
          exact 
          activeClassName="linkActive" 
          to="/signUp" 
          style={textColorStyle}
        >
          Sign Up
        </NavLink> :
        <NavLink 
          exact 
          activeClassName="linkActive" 
          to="/signIn" 
          style={textColorStyle}
        >
          Sign In
        </NavLink>}
      </div>
    </div>
  );
}
