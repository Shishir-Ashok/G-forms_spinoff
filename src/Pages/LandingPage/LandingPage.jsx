import React from "react";
import "./LandingPage.scss";
import { useDispatch } from "react-redux";
import { setNavbarColor } from "../../actions";

export default function LandingPage() {
  const dispatch = useDispatch();
  dispatch(setNavbarColor("black"));
  return (
    <div className="Page landingImage">
      <div className="Content">
        <div className="welcome">
          <h1 className="welcomeHeader">Welcome to Forms</h1>
          <button className="getStarted">Get Started</button>
        </div>
      </div>
    </div>
  );
}
