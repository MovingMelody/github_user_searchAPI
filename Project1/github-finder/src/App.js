import './App.css';
import React,  { Component } from "react";
import Navbar from "./components/layout/Navbar"
class App extends Component {
  render() {
    const name = 'sammy danny';
    const arr = [11,22,33,44,55];
    const boolValue  = true;
    return (
      <div className="App">
      {/* {boolValue?<h1>condional rendering {name}</h1>:<h2>loading...</h2>}  */}
      <Navbar array={arr} title="Github Finder" />
    </div>
    );
  }
}

export default App;
