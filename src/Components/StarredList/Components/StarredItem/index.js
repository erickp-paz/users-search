import React from "react";

const StarredItem = ({ starred }) => (
  <a href={starred.html_url} className="starredItemContainer" target="_blank">
    <span>{starred.name} </span>
    <span>Description: {starred.description} </span>
  </a>
);

export default StarredItem;
