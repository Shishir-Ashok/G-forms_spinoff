import React from "react";
import "./DashboardMain.scss";
import { useDispatch, useSelector } from "react-redux";
import { setActiveDashboard, setNavbarColor } from "../../actions";
import Dashboard from "../../Components/DashboardComponents/Dashboard.jsx";
import Settings from "../../Components/DashboardComponents/Settings";
import CreateForm from "../../Components/DashboardComponents/CreateForm";

export default function DashboardMain() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.dashboardReducer.active);
  let value = "Dashboard";

  const display = (e) => {
    console.log("DISPLAY " + e);
    value = e;
    console.log("VALUE : " + value);
    dispatch(setActiveDashboard(value));
    console.log("ACTIVE " + activeTab);
  };
  const getActiveTab = (activeTab) => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Createform":
        return <CreateForm />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };
  dispatch(setNavbarColor("white"));

  return (
    <>
      <div className="Dasboard-image" />
      <div className="Dashboard-grid">
        <div className="Left-Sidebar">
          <div className="Left-Sidebar-List">
            <div className="headers" onClick={() => display("Dashboard")}>
              <h3>Dashboard</h3>
            </div>
            <div className="headers" onClick={() => display("Createform")}>
              <h3>Create Form</h3>
            </div>
            <div className="headers" onClick={() => display("Templates")}>
              <h3>Templates</h3>
            </div>
            <div className="headers" onClick={() => display("Howtouse")}>
              <h3>How to use</h3>
            </div>
            <div className="headers" onClick={() => display("Settings")}>
              <h3>Settings</h3>
            </div>
          </div>
        </div>
        <div className="Right-Grid">{getActiveTab(activeTab)}</div>
      </div>
    </>
  );
}
