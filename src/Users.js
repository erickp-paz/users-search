import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Header from "./Components/Header";
import RepoList from "./Components/RepoList";
import UserInfo from "./Components/UserInfo";
import StarredList from "./Components/StarredList";

import "./App.css";

export default function Users() {
  const location = useLocation();
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");
  const [starreds, setStarreds] = useState([]);
  const [notLoad, setNotLoad] = useState(false);

  async function handleUser() {
    try {
      const { data: _user } = await axios.get(
        `https://api.github.com/users${location.pathname}`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );
      const { data: _repos } = await axios.get(
        `https://api.github.com/users${location.pathname}/repos`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );
      const { data: _starreds } = await axios.get(
        `https://api.github.com/users${location.pathname}/starred`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );

      setStarreds(_starreds);
      setRepos(_repos);
      setUser(_user);
      setNotLoad(true);
    } catch (error) {
      setError("Usuário não encontrado");
    }
  }

  useEffect(() => {
    handleUser();
    console.log("renderizou a pagina");
  }, []);

  return (
    <div className="Users">
      <Header error={error} />
      {notLoad ? (
        <>
          <UserInfo user={user} />
          <div className="content">
            <RepoList repos={repos} />
            <StarredList starreds={starreds} />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
