import React from "react";
import RepoItem from "./Components/RepoItem";

const RepoList = ({ repos }) => (
  <div className="reposListContainer">
    {repos.map((repo) => (
      <RepoItem key={repo.Id} repo={repo} />
    ))}
  </div>
);

export default RepoList;
