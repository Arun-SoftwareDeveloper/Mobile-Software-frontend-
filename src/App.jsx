import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppList from "./Components/AppList";
import AppDetails from "./Components/AppDetails";
import DialPad from "./Apps/DialPad";
import Home from "./Components/Home";
import Gallery from "./Apps/Gallery";
import TopBar from "./Components/TopBar";
import ScreenSaver from "./Components/ScreenSaver";
import LockScreen from "./Components/LockScreen";

function App() {
  return (
    <div>
      <TopBar />

      <Router>
        <Routes>
          <Route path="/" element={<ScreenSaver />} />
          <Route path="lockScreen/" element={<LockScreen />} />

          <Route path="/home" element={<Home />} />

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
