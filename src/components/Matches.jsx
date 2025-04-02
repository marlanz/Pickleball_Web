import React from "react";
import TourMatchCard from "./TourMatchCard";

const tour = [1, 2];
const Matches = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {tour.map(() => (
        <TourMatchCard />
      ))}
    </div>
  );
};

export default Matches;
