import React from "react";

import StarredItem from "./Components/StarredItem";

const StarredList = ({ starreds }) => {
  return (
    <div className="starredsListContainer">
      {starreds.length === 0 ? (
        <span className="title">Usuário sem starred</span>
      ) : (
        starreds.map((starred) => (
          <StarredItem key={starred.Id} starred={starred} />
        ))
      )}
    </div>
  );
};

export default StarredList;
