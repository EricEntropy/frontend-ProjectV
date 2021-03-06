import React from "react";
import {  userLogin } from "../actions/UserActions";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class Login extends React.Component{
    state = {
        username: "",
        password: "",
        loggedin: false
      }

      handleSubmit =(event) =>{
        event.preventDefault();
        const data = {
            user: {
                username: this.state.username,
                password: this.state.password
        }};
        this.props.userLogin(data);
        this.setState({
            loggedin: true
        });
    };

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        })
    };

    render(){
        console.log(this.props)
        if(this.state.loggedin){
            return <Redirect to="/" />;
        } else{
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Log In</h1>
                <div>
                    <input 
                    type="text"
                    id="username"
                    onChange={this.handleChange}
                    placeholder="Username"/>
                </div>
                <div>
                    <input 
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                    placeholder="Password"/>
                </div>
                <input 
                type="submit" 
                value="Login"/>
            </form>
        );
    }
}
}

const mapStateToProps = (state) => {
    return{
      user: state.UserReducer.user,
      signedup: state.UserReducer.signedup,
    };
  };
  
const mapDispatchToProps = (dispatch) =>{
    return{
        userLogin: (data) => dispatch(userLogin(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);