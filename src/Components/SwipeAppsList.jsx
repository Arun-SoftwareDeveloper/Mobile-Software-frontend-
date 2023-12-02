import React, { useState, useEffect } from "react";
import axios from "axios";
import BackendApi from "../BackendApi";

function SwipeAppsList() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await axios.get(`${BackendApi}/app/appsList`);
        setApps(response.data);
      } catch (error) {
        console.log(`Internal Server Error`);
      }
    };
    fetchApps();
  }, []);

  return (
    <div className="swipe-container container mt-4">
      <div className="row">
        <div className="col-md-12">
          {/* Start mapping from the 7th index */}
          {apps.slice(6).map((app, index) => (
            <div key={index} className="app-item">
              {/* Render your app content here */}
              <p>{app.appName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SwipeAppsList;
