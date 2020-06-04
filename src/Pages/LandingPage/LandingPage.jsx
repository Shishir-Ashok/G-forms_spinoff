import React from "react";
// import Navbar from './Navbar.jsx';
import "./Content.scss";
export default function LandingPage() {
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
