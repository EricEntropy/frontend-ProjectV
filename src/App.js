import React, { Component } from 'react';
import LoginContainer from "./container/LoginContainer"
import Navbar from "./components/Navbar"
import SignupContainer from './container/SignupContainer';
import HomeContainer from './container/HomeContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Logout from "./components/Logout"
import Welcome from "./components/Welcome"
import Post from './components/Post';

class App extends Component {
  render() {
    console.log(this.props.user);
    console.log(this.props.signedup);

    if(this.props.signedup === false ){
      return(
        <Router>
        <div>
          <Navbar signedup={this.props.signedup}/>
          <Welcome/>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/signup" component={SignupContainer} />
          <Route exact path="/post" component={Post} />
        </div>
        </Router>
      )
    } else {
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
  }
};

const mapStateToProps = (state) => {
  return{
    user: state.user,
    signedup: state.signedup,
    postSuccess: state.postSuccess
  };
};

export default connect(mapStateToProps)(App);
