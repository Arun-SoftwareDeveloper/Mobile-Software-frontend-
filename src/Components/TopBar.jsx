// TopBar.js

import React, { useState } from "react";
import "../Styles/TopBar.css"; // Import your CSS file

const TopBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setMenuOpen(false); // Close the menu when an option is clicked

    // Show an alert with the selected option
    alert(`Selected option: ${option}`);
  };

  // Dummy names for rendering in the top bar
  const dummyNames = ["Name1", "Name2", "Name3"];

  // Options for the menu
  const menuOptions = [
    "Brightness",
    "WiFi",
    "Mobile Data",
    "Bluetooth",
    "Flashlight",
    "Auto Rotate",
    "Power Saving",
    "Airplane Mode",
  ];

  return (
    <div className="top-bar">
      <div className="bar-content">
        {/* Toggle Menu button (Left corner) */}
        <button className="toggle-menu" onClick={toggleMenu}>
          ☰
        </button>

        {/* Charging Percentage (Right corner) */}
        <span className="battery-charge" style={{ color: "green" }}>
          <i className="fas fa-battery-full"></i>100%
        </span>

        {/* Overlay for Menu options */}
        {isMenuOpen && (
          <div className="overlay">
            <div className="menu-options">
              {menuOptions.map((option, index) => (
                <div
                  key={index}
                  className={`option ${
                    selectedOption === option ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
