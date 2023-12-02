import React, { useState } from "react";

function Wallpaper() {
  const [wallpaper, setWallpaper] = useState(
    "https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg"
  ); // Replace with your actual image URL

  const updateWallpaper = () => {
    // You can leave this empty if you want to use a static image
  };

  return (
    <div
      className="wallpaper"
      style={{
        backgroundImage: `url("${wallpaper}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={updateWallpaper}
    ></div>
  );
}

export default Wallpaper;
