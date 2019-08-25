import React from "react";
import './hamburgerButton.css';

const hamburgerButton = props => (
    <button className="hamburger-button">
        <div className="hamburger-button_line" />
        <div className="hamburger-button_line" />
        <div className="hamburger-button_line" />        
    </button>
);

export default hamburgerButton;