import React from "react";

const UserInfo = ({ user }) => (
  <div className="userInfoContainer">
    <img src={user.avatar_url} />
    <div className="description">
      <span>Nome: {user.name}</span>
      <span>Bio: {user.bio}</span>
    </div>
  </div>
);

export default UserInfo;
