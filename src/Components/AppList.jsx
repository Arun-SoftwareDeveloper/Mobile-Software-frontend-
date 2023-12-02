// AppList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/AppList.css"; // Import the CSS file
import BackendApi from "../BackendApi";

function AppList() {
  const [appList, setAppList] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await axios.get(`${BackendApi}/app/appsList`);
        setAppList(response.data);
      } catch (error) {
        console.log(`Internal Server Error`);
      }
    };
    fetchApps();
  }, []);

  const handleLinkClick = (url, id) => {
    if (id === "6") {
      window.location.href = "https://arunramasamy.netlify.app/#project";
    }
    if (id === "3") {
      window.location.href = "https://www.google.com/";
    } else {
      navigate(url);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <ul className="app-list">
          {appList.slice(0, 6).map(
            (
              app // Only map the first 6 items
            ) => (
              <li key={app.id} className="app-item">
                {app.appUrl ? (
                  <a
                    href={app.appUrl}
                    className="app-link-external"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="app-info">
                      {app.icon && (
                        <img
                          src={app.icon.iconUrl}
                          alt={app.appName}
                          className="app-icon"
                        />
                      )}
                    </div>
                  </a>
                ) : (
                  <Link
                    to={
                      app.id === "1"
                        ? "/dialPad"
                        : app.id === "3"
                        ? "https://www.google.com"
                        : app.id === "5"
                        ? "/gallery"
                        : `/apps/${app.id}`
                        ? "https://web.whatsapp.com/"
                        : app.id === "2"
                    }
                    className="app-link"
                    onClick={() =>
                      handleLinkClick(
                        app.id === "6"
                          ? "https://main--glowing-souffle-5649f7.netlify.app/"
                          : null,
                        app.id
                      )
                    }
                  >
                    <div className="app-info">
                      {app.icon && (
                        <img
                          src={app.icon.iconUrl}
                          alt={app.appName}
                          className="app-icon"
                        />
                      )}
                    </div>
                  </Link>
                )}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default AppList;
