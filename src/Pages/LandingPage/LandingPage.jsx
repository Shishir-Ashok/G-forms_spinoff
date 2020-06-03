import React from "react";
// import Navbar from './Navbar.jsx';
import OptionalNavbar from "../../Components/OptionalNavbar/OptionalNavbar";
import Content from './Content.jsx';
export default function LandingPage() {
  return (
    <div>
      <OptionalNavbar />
      <Content />
    </div>
  );
}
