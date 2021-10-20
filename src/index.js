import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./components/Home";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom";


// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

ReactDOM.render(
  <Router>
    <div>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </div>
  </Router>,
  document.getElementById('root')
);

