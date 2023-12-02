import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import SearchBar from "../Apps/SearchBar";
import DateTimeDisplay from "../Apps/DateTimeDisplay";
import Wallpaper from "../Apps/Wallpaper";
import "../Styles/Home.css"; // Import the CSS file
import AppList from "../Components/AppList";
import SwipeAppsList from "../Components/SwipeAppsList"; // Import your SwipeAppsList component

function Home() {
  const [showSwipeAppsList, setShowSwipeAppsList] = useState(false);

  const handlers = useSwipeable({
    onSwipedUp: () => {
      // Implement logic for swiping up, e.g., showing more applications
      console.log("Swiped up!");
      setShowSwipeAppsList(true);
    },
    onSwipedDown: () => {
      // Implement logic for swiping down, e.g., hiding applications
      console.log("Swiped down!");
      setShowSwipeAppsList(false);
    },
    onSwipedLeft: () => {
      // Implement logic for swiping left, e.g., navigate to the next item
      console.log("Swiped left!");
    },
    onSwipedRight: () => {
      // Implement logic for swiping right, e.g., navigate to the previous item
      console.log("Swiped right!");
    },
    // You can add more swipe handlers as needed
  });

  return (
    <div className="container mt-4" {...handlers}>
      <Wallpaper />
      <div className="overlay">
        <div className="content">
          <SearchBar />
          <DateTimeDisplay />
          <AppList />
          {showSwipeAppsList && <SwipeAppsList />}
        </div>
      </div>
    </div>
  );
}

export default Home;
