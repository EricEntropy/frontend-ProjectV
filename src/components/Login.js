import React from "react";
import { userLogin } from "../actions/UserActions";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class Login extends React.Component{
    state = {
        username: "",
        password: ""
      }

      handleSubmit =(event) =>{
        event.preventDefault();
        const data = {
            user: {
                username: this.state.username,
                password: this.state.password
        }};
        this.props.userLogin(data);
    };

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        })
    };

    render(){
        if(this.props.signedup){
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
      user: state.user,
      signedup: state.signedup,
    };
  };
  
const mapDispatchToProps = (dispatch) =>{
    return{
        userLogin: (data) => dispatch(userLogin(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);