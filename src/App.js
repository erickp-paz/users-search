import React, { useState } from "react";
import axios from "axios";

import Form from "./Components/Form";
import Header from "./Components/Header";
import RepoList from "./Components/RepoList";
import StarredList from "./Components/StarredList";

import "./App.css";

export default function App() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [repos, setRepos] = useState([]);
  const [starreds, setStarreds] = useState([]);
  const [notLoad, setNotLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  async function handleUser(info) {
    if (info === "repos") {
      setLoading(true);
    } else {
      setLoading2(true);
    }
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${user}/${info}`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );
      if (info === "repos") {
        setRepos(data);
        setStarreds([]);
      } else {
        setStarreds(data);
        setRepos([]);
      }
      setError("");
      setLoading(false);
      setLoading2(false);
      setNotLoad(true);
    } catch (error) {
      console.log(error);
      setError("Usuário não encontrado");
      setStarreds([]);
      setRepos([]);
      setLoading(false);
      setLoading2(false);
    }
  }

  return (
    <div className="App">
      <Header error={error} />
      <Form
        changeUser={(value) => setUser(value)}
        user={user}
        loading={loading}
        loading2={loading2}
        buttonAction={() => handleUser("repos")}
        buttonAction2={() => handleUser("starred")}
      />
      {notLoad ? (
        <>
          <div className="content">
            <RepoList repos={repos} />
          </div>
          <div className="content">
            <StarredList starreds={starreds} />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
