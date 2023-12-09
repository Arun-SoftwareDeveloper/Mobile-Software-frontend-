// ScreenSaver.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../Components/TopBar";
import DateTimeDisplay from "../Apps/DateTimeDisplay";
import "../Styles/ScreenSaver.css";

const ScreenSaver = ({ onExit }) => {
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let timeout;

    const handleActivity = () => {
      if (!isActive) {
        setIsActive(true);
      }

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsActive(false);
      }, 5000); // Change this value to adjust the idle time before the screen saver activates
    };

    document.addEventListener("mousemove", handleActivity);
    document.addEventListener("keydown", handleActivity);

    return () => {
      document.removeEventListener("mousemove", handleActivity);
      document.removeEventListener("keydown", handleActivity);
      clearTimeout(timeout);
    };
  }, [isActive]);

  const handleUnlockClick = () => {
    // Navigate to the /lockScreen route when the h3 is clicked
    navigate("/lockScreen");
  };

  return (
    <div className={`screen-saver ${isActive ? "active" : ""}`}>
      <TopBar onExit={onExit} />
      <div className="content">
        <DateTimeDisplay />
        {/* Click here to unlock */}
        <h3 onClick={handleUnlockClick}>Click here to unlock</h3>
      </div>
    </div>
  );
};

export default ScreenSaver;
