import "./App.css";
import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User"; // each github user
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const searchUsers = async (searchName) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchName}&client_id=${process.env.ID}&client_secret=${process.env.SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };
  // clearing the search results
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
  };

  const clearAlert = () => {
    setAlert(null);
  };
  // after adding router to our app now let's work on single user component
  // todo: Get single GITHUB User
  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.ID}&client_secret=${process.env.SECRET}`
    );
    setUser(res.data);
    setLoading(false);
  };
  const arr = [11, 22, 33, 44, 55];
  return (
    <Router>
      <div className="App">
        <Navbar arr={arr} title="Github Finder" />
        {/* <UserItem /> */}
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    clearAlert={clearAlert}
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    showAlert={showAlert}
                  />
                  <Users loading={loading} users={users} />
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
                  getUser={getUser}
                  user={user}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
