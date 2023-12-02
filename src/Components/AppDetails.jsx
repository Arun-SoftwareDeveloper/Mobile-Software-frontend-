// AppDetails.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackendApi from "../BackendApi";

function AppDetails() {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    const fetchAppDetails = async () => {
      try {
        const response = await axios.get(`${BackendApi}/app/${id}`);
        console.log(response.data); // Log the data to inspect the structure
        setApp(response.data);
      } catch (error) {
        console.error("Error fetching app details:", error);
      }
    };

    fetchAppDetails();
  }, [id]);

  return (
    <div className="container mt-4">
      <div className="col-md-8">
        <div className="row">
          {app ? (
            <>
              <h2>{app.appName}</h2>

              {/* Displaying Image */}
              {app.appImageUrl && (
                <div>
                  <img
                    src={app.appImageUrl}
                    alt={`${app.appName} Image`}
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              )}

              {/* Displaying Icon */}
              {app.icon && app.icon.iconUrl && (
                <div>
                  <img
                    src={app.icon.iconUrl}
                    alt={`${app.appName} Icon`}
                    style={{ maxWidth: "100px" }}
                  />
                </div>
              )}

              {/* Displaying Gallery Images */}
              {app.id === "5" &&
                app.galleryImages &&
                app.galleryImages.length > 0 && (
                  <div>
                    <h3>Gallery</h3>
                    <div className="gallery-container">
                      {app.galleryImages.map((image, index) => (
                        <img
                          key={index}
                          src={image.imageUrl}
                          alt={`Gallery Image ${index + 1}`}
                          style={{ maxWidth: "100%", margin: "8px" }}
                        />
                      ))}
                    </div>
                  </div>
                )}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppDetails;
