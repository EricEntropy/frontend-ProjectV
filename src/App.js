import React, { Component } from 'react';
import Home from "./components/Home";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </Router>
    );
  }
};

export default App;
