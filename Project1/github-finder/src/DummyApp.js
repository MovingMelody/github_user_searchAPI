import "./App.css";
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User"; // each github user
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
// this dummy file is created because we are converting the main App.js file into functional component from a class component

class DummyApp extends Component {
  state = {
    users: [],
    user: {},
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
    this.setState({ users: res.data.items, loading: false });
  };
  // clearing the search results
  clearUsers = () => this.setState({ users: [], loading: false });
  // show alert message when user searches without entering name

  showAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
  };
  // function to clear the alert after user enters something and searches for user
  clearAlert = () => {
    this.setState({ alert: null });
  };
  // after adding router to our app now let's work on single user component
  // todo: Get single GITHUB User
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.ID}&client_secret=${process.env.SECRET}`
    );
    // console.log(res.data.items);
    this.setState({ user: res.data, loading: false });
  };
  render() {
    const arr = [11, 22, 33, 44, 55];
    return (
      <Router>
        <div className="App">
          <Navbar arr={arr} title="Github Finder" />
          {/* <UserItem /> */}
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      clearAlert={this.clearAlert}
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                      showAlert={this.showAlert}
                    />
                    <Users
                      loading={this.state.loading}
                      users={this.state.users}
                    />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={this.state.user}
                    loading={this.state.loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default DummyApp;
