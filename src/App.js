import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Header from "./Components/Header";
import Form from "./Components/Form";
import RepoList from "./Components/RepoList";
import StarredList from "./Components/StarredList";

class App extends Component {
  state = {
    user: "",
    repos: [],
    starreds: [],
    error: "",
    loading: false,
    loading2: false,
  };

  changeUser = (user) => {
    this.setState({ user });
  };

  searchUser = async () => {
    const { user } = this.state;
    this.setState({ loading: true });

    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );

      console.log(repos);

      this.setState({ repos, error: "", loading: false });
    } catch (error) {
      this.setState({
        error: "Usuário não encontrado",
        repos: [],
        loading: false,
      });
    }
  };

  searchStarred = async () => {
    const { user } = this.state;
    this.setState({ loading2: true });

    try {
      const { data: starreds } = await axios.get(
        `https://api.github.com/users/${user}/starred`
      );

      console.log(starreds);

      this.setState({ starreds, error: "", loading2: false });
    } catch (error) {
      this.setState({
        error: "Usuário não encontrado",
        starreds: [],
        loading2: false,
      });
    }
  };

  render() {
    const { user, repos, error, starreds, loading } = this.state;
    return (
      <div className="App">
        <Header />
        <Form
          changeUser={this.changeUser}
          user={user}
          error={error}
          loading={loading}
          buttonAction={this.searchUser}
          buttonAction2={this.searchStarred}
        />
        <RepoList repos={repos} />
        <StarredList starreds={starreds} />
      </div>
    );
  }
}

export default App;
