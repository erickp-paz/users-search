import React from "react";
import StarredItem from "./Components/StarredItem";

const StarredList = ({ starreds }) => (
  <div className="starredsListContainer">
    {starreds.length === 0 ? (
      <span>"Usuário sem starred"</span>
    ) : (
      starreds.map((starred) => (
        <StarredItem key={starred.Id} starred={starred} />
      ))
    )}
  </div>
);

export default StarredList;
