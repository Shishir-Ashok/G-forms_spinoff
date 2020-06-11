import React from "react";
import './Dashboard.scss';

export default function Dashboard() {
    return (
        <>
            <div className="Dashboard-Grid">
                <div className="Dashboard-header">
                    <h1>My Dashboard</h1>
                </div>
                <div className="Dashboard-activeForms">
                    <h3>Active Forms</h3>
                </div>
                <div className="Dashboard-analytics">
                    <h3>Analytics</h3>
                </div>
            </div>
        </>
    )
}