import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  Navbar from "./components/Navbar";
import ProjectBoard from "./components/ProjectBoard";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <ProjectBoard />
      </div>
    );
  }
}

export default App;