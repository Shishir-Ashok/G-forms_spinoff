import React from "react";
import "./Content.scss";

export default function Content() {
    return (
        <div className="Main">
            <div className="Content">
                <img src='/assets/svg/Rectangle_main.svg' className="Content-main_rect" alt="Main rectangle" />
            
                <div className="welcome">
                    <img src='/assets/svg/Square_main.svg' className="Content-main_square" alt="Main rectangle" />
                    <h1 className="welcomeHeader">Welcome to Forms</h1>
                    <button className="getStarted">Get Started</button>
                    
                </div>
                
            </div>
        </div>
    );
}
                        