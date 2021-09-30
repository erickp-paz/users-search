import React from "react";

const RepoItem = ({ repo }) => (
  <a
    href={repo.html_url}
    key={repo.Id}
    className="repoItemContainer"
    target="_blank"
  >
    <span>{repo.name} </span>
    <span>Stars: {repo.stargazers_count} </span>
  </a>
);

export default RepoItem;
