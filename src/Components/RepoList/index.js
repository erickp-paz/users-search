import React from "react";

import RepoItem from "./Components/RepoItem";

const RepoList = ({ repos }) => (
  <div className="reposListContainer">
    {repos.length === 0 ? (
      <span className="title">Usuário sem repositórios</span>
    ) : (
      repos.map((repo) => <RepoItem key={repo.Id} repo={repo} />)
    )}
  </div>
);

export default RepoList;
