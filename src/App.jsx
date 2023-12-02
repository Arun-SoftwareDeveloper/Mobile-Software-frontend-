import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppList from "./Components/AppList";
import AppDetails from "./Components/AppDetails";
import DialPad from "./Apps/DialPad";
import Home from "./Components/Home";
import Gallery from "./Apps/Gallery";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/appList" element={<AppList />} />
          <Route path="/apps/:id" element={<AppDetails />} />
          <Route path="/dialPad" element={<DialPad />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
