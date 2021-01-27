import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
// import UserItem from "./components/users/UserItem"
import Users from "./components/users/Users";
import axios from "axios";
class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  // todo: using promises
  // componentDidMount() {
  //   axios.get("https://api.github.com/users").then((res) => {
  //     console.log(res.data);
  //   });
  // todo: with using async and await
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_API_ID}&client_secret=${process.env.REACT_APP_GITHUB_API_SECRET}`
    );
    console.log(res.data);
    this.setState({ users: res.data, loading: false });
    console.log(
      `Env variable from .env.local file : ${process.env.REACT_APP_GITHUB_API_ID}`
    );
  }
  render() {
    const arr = [11, 22, 33, 44, 55];
    return (
      <div className="App">
        <Navbar arr={arr} title="Github Finder" />
        {/* <UserItem /> */}
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
