import React, { Component } from 'react';
import Home from "./components/Home";
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import SignupContainer from './container/SignupContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignupContainer} />
      </div>
    </Router>
    );
  }
};

export default App;
