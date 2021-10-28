import React, { Component } from 'react';
import LoginContainer from "./container/LoginContainer"
import Navbar from "./components/Navbar"
import SignupContainer from './container/SignupContainer';
import HomeContainer from './container/HomeContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Logout from "./components/Logout"
import Welcome from "./components/Welcome"
import Posts from './components/Posts';
import './App.css'
import UserContainer from './container/UserContainer';

class App extends Component {
  render() {
    console.log(this.props.posts);
    console.log(this.props.signedup);
    console.log(this.props.user);
    

    if (localStorage.jwt && this.props.signedup === true){
      return (
        <Router>
          <div className="App">
          <Navbar signedup={this.props.signedup} user={this.props.user}/>
            <Switch>
              <Route exact path="/posts" render={() => <Posts user={this.props.user} posts={this.props.posts} getPosts={this.props.getPosts}/>}/>
              <Route exact path="/" component={HomeContainer} />
              <Route exact path={`/user/${this.props.user.username}`} render={() => <UserContainer user={this.props.user} totalPosts={this.props.posts.length}/>}/>
              <Route exact path="/logout" component={Logout} signedup={this.props.signedup} />
              </Switch>
          </div>
          </Router>
      );
    } else if(this.props.signedup === false ){
      return(
        <Router>
        <div className="App">
          <Navbar signedup={this.props.signedup}/>
          <Welcome/>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/signup" component={SignupContainer} />
        </div>
        </Router>
      )
    } 
  }
};

const mapStateToProps = (state) => {
  return{
    user: state.user,
    signedup: state.signedup,
    postSuccess: state.postSuccess,
    posts: state.posts,
    getPosts: state.getPosts
  };
};

export default connect(mapStateToProps)(App);
