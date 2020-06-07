import React from "react";
import "./Dashboard.scss";

export default function Dashboard() {
  return (
    <>
      <div className="Dashboard-grid">
        <div className="Left-Sidebar">
          <ul className="Left-Sidebar-List">
            <li>
              <a href="/#">Dashboard</a>
            </li>
            <li>
              <a href="/#">Create Form</a>
            </li>
            <li>
              <a href="/#">Templates</a>
            </li>
            <li>
              <a href="/#">How to use</a>
            </li>
            <li>
              <a href="/#">Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
