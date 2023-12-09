import React, { useState } from "react";
import "../Styles/LockScreen.css";

const LockScreen = () => {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const correctPassword = "1234"; // Change this to your desired password

  const handleButtonClick = (value) => {
    if (value === "clear") {
      setInput("");
      setErrorMessage("");
    } else if (value === "unlock") {
      if (input === correctPassword) {
        // Password is correct, redirect to /home or perform desired action
        window.location.href = "/home";
      } else {
        setErrorMessage("Incorrect password. Try again.");
        setInput("");
      }
    } else {
      setInput((prevInput) =>
        prevInput.length < 4 ? prevInput + value : prevInput
      );
    }
  };

  return (
    <div className="lock-screen-container">
      <h1>Numeric Lock Screen</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div>
        <input type="text" value={input} readOnly />
      </div>
      <div className="button-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button key={number} onClick={() => handleButtonClick(number)}>
            {number}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => handleButtonClick("clear")}>Clear</button>
        <button onClick={() => handleButtonClick("unlock")}>Unlock</button>
      </div>
    </div>
  );
};

export default LockScreen;
