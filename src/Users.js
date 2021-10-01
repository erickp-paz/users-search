import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./App.css";
import StarredList from "./Components/StarredList";
import RepoList from "./Components/RepoList";
import UserInfo from "./Components/UserInfo";

export default function Users() {
  const location = useLocation();
  const [repos, setRepos] = useState([]);
  const [starreds, setStarreds] = useState([]);
  const [user, setUser] = useState([]);
  async function handleUser() {
    try {
      const { data: _user } = await axios.get(
        `https://api.github.com/users${location.pathname}`,
        {
          headers: {
            Authorization: "token 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",
          },
        }
      );
      const { data: _repos } = await axios.get(
        `https://api.github.com/users${location.pathname}/repos`,
        {
          headers: {
            Authorization: "token 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",
          },
        }
      );
      const { data: _starreds } = await axios.get(
        `https://api.github.com/users${location.pathname}/starred`,
        {
          headers: {
            Authorization: "token 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",
          },
        }
      );

      setStarreds(_starreds);
      setRepos(_repos);
      setUser(_user);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    handleUser();
    console.log("renderizou a pagina");
  }, []);
  return (
    <div className="Users">
      <UserInfo user={user} />
      <div className="content">
        <RepoList repos={repos} />
        <StarredList starreds={starreds} />
      </div>
    </div>
  );
}
