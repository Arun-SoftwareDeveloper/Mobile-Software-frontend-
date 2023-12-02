import React, { useState, useEffect } from "react";

function DateTimeDisplay() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="date-time">
      <p>{currentDate.toLocaleDateString("en-US", { weekday: "long" })}</p>
      <p>
        {currentDate.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })}
      </p>
      <p>{currentDate.toLocaleDateString()}</p>
    </div>
  );
}

export default DateTimeDisplay;
