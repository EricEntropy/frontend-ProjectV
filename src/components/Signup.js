import React from "react";
import { Redirect } from "react-router";
import { userActions } from "../actions/UserActions";
import { connect } from "react-redux";

class Signup extends React.Component{

    state = {
        username: "",
        password: "",
        redirecttoHome: false
      }

    handleSubmit =(event) =>{
        event.preventDefault();
        const data = {
            user: {
                username: this.state.username,
                password: this.state.password
        }};
        this.props.userActions(data);
        this.setState({
            redirecttoHome: true
        })
    };

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        })
    };

    render(){
        if(this.state.redirecttoHome){
            return <Redirect to="/" />;
        } else{
            return(
                <form onSubmit={this.handleSubmit}>
                    <h1>Sign Up!</h1>
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
                    value="Signup"/>
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
        userActions: (data) => dispatch(userActions(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);