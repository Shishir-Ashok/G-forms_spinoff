import React from "react";
import "./Dashboard.scss";
import { useDispatch, useSelector } from "react-redux";
import { setActiveDashboard } from "../../actions";




export default function Dashboard() {
  
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.dashboardReducer.active);
  let value = "dashboard";
  const display = (e) => {
    console.log("DISPLAY " +e);
    value = e;
    console.log("VALUE : "+value);
  dispatch(setActiveDashboard(value));
  console.log("ACTIVE " +activeTab.active);
  };
  
  
  
  
  return (
    <>
      <div className="Dasboard-image" />
        <div className="Dashboard-grid">
          <div className="Left-Sidebar">
            <div className="Left-Sidebar-List">
                <div className="headers" onClick={() =>display("dashboard")}>
                  <h3>Dashboard</h3>
                </div>
                <div className="headers" onClick={() => display("createform")}>
                  <h3>Create Form</h3>
                </div>
                <div className="headers" onClick={() => display("templates")}>
                  <h3>Templates</h3>
                </div>
                <div className="headers" onClick={() => display("howtouse")}>
                  <h3>How to use</h3>
                </div>
                <div className="headers" onClick={() => display("settings")}>
                  <h3>Settings</h3>
                </div>
            </div>
          </div>
          <div className="Right-Grid">
            <h1 className="Right-Heading">Username</h1>
          </div>
        </div>
    </>
  );
}
