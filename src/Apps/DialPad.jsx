import React, { useState } from "react";
import "../AppStyles/DialPad.css";

const DialPad = () => {
  const [input, setInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
    setErrorMessage("");
  };

  const handleClearButtonClick = () => {
    setInput("");
    setErrorMessage("");
  };

  const handleCallButtonClick = () => {
    if (input.length === 10) {
      // Use tel: URI to initiate a phone call
      window.location.href = `tel:${input}`;
      // Reset input after initiating the call
      setInput("");
    } else {
      setErrorMessage("Please enter a valid 10-digit number");
    }
  };

  return (
    <div className="dial-pad">
      <div className="display">{input}</div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="buttons">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick("#")}>#</button>
        <button onClick={handleClearButtonClick} className="clear-button">
          Clear
        </button>
        <button onClick={handleCallButtonClick} className="call-button">
          📞
        </button>
      </div>
    </div>
  );
};

export default DialPad;
