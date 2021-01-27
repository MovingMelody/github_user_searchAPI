import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
// import UserItem from "./components/users/UserItem"
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  // todo: with using async and await
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_API_ID}&client_secret=${process.env.REACT_APP_GITHUB_API_SECRET}`
  //   );
  //   console.log(res.data);
  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async (searchName) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${searchName}&client_id=${process.env.ID}&client_secret=${process.env.SECRET}`);
    console.log(res.data.items);
    // https://api.github.com/search/users?q=brad&client_id=a14e95e7e8076fafc044&client_secret=dbf286473b23e7ce44a2d25626fd71608d40769b
    this.setState({ users: res.data.items, loading: false });
  };
  // clearing the search results
  clearUsers = () => this.setState({ users: [], loading: false });
  render() {
    const arr = [11, 22, 33, 44, 55];
    return (
      <div className="App">
        <Navbar arr={arr} title="Github Finder"/>
        {/* <UserItem /> */}
        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
