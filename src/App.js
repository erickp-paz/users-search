import React, { useState } from "react";
import axios from "axios";
import "./App.css";

import Form from "./Components/Form";
import RepoList from "./Components/RepoList";
import StarredList from "./Components/StarredList";

export default function App() {
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);
  const [starreds, setStarreds] = useState([]);
  const [error, setError] = useState("");
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
            Authorization: "token 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",
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
      <Form
        changeUser={(value) => setUser(value)}
        user={user}
        error={error}
        loading={loading}
        loading2={loading2}
        buttonAction={() => handleUser("repos")}
        buttonAction2={() => handleUser("starred")}
      />
      <div className="content">
        <RepoList repos={repos} />
      </div>
      <div className="content">
        <StarredList starreds={starreds} />
      </div>
    </div>
  );
}
