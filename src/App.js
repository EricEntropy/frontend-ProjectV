import React, { Component } from 'react';
import LoginContainer from "./container/LoginContainer"
import Navbar from "./components/Navbar"
import SignupContainer from './container/SignupContainer';
import HomeContainer from './container/HomeContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Logout from "./components/Logout"

class App extends Component {
  render() {
    console.log(this.props.user);
    console.log(this.props.signedup);
  
    return (
    <Router>
      <div>
        <Navbar signedup={this.props.signedup}/>
        <Route exact path="/" component={HomeContainer } />
        <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/logout" component={Logout} signedup={this.props.signedup} />
      </div>
    </Router>
    );
    }
};

const mapStateToProps = (state) => {
  return{
    user: state.user,
    signedup: state.signedup
  };
};

export default connect(mapStateToProps)(App);
