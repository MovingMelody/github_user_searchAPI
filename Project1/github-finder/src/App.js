import './App.css';
import React,  { Component } from "react";
import Navbar from "./components/layout/Navbar"
// import UserItem from "./components/users/UserItem"
import Users from "./components/users/Users"
class App extends Component {
  render() {
    const arr = [11,22,33,44,55];
    return (
      <div className="App">
      <Navbar arr={arr} title="Github Finder" />
      {/* <UserItem /> */}
      <div className="container">

      <Users /> 
      </div>
    </div>
    );
  }
}

export default App;
