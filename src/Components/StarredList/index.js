import React from "react";
import StarredItem from "./Components/StarredItem";

const StarredList = ({ starreds }) => (
  <div className="starredsListContainer">
    {starreds.map((starred) => (
      <StarredItem starred={starred} />
    ))}
  </div>
);

export default StarredList;
