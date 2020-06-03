import React from "react";
import "./Content.scss";

export default function Content() {
  return (
    <div className="Content-Main">
      <div className="Content">
        <div className="welcome">
            <h1 className="welcomeHeader">Welcome to Forms</h1>
            <button className="getStarted">Get Started</button>
        </div>
      </div>
      <div className="landingImage" alt="Landing Page" />
    </div>
  );
}
