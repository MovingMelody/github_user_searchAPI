import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
// import UserItem from "./components/users/UserItem"
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
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
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchName}&client_id=${process.env.ID}&client_secret=${process.env.SECRET}`
    );
    // console.log(res.data.items);
    this.setState({ users: res.data.items, loading: false });
  };
  // clearing the search results
  clearUsers = () => this.setState({ users: [], loading: false });
  // show alert message when user searches without entering name
  
  showAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    // lets clear the displayed alert after sometime using setTimeOut()
    // setTimeout(() => {
    //   this.setState({ alert: null });
    // }, 4000);
    // the above SetTimeout fn is commented out because we are using the clearAlert function to achieve the functionality of clearing the alert whenever it is not needed
  };
  // function to clear the alert after user enters something and searches for user
  clearAlert = () => {
    this.setState({ alert: null });
  };
  render() {
    const arr = [11, 22, 33, 44, 55];
    return (
      <div className="App">
        <Navbar arr={arr} title="Github Finder" />
        {/* <UserItem /> */}
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            clearAlert={this.clearAlert}
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            showAlert={this.showAlert}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
