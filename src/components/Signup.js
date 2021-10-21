import React from "react";
import { Redirect } from "react-router";

class Signup extends React.Component{

    state = {
        signedup: false,
        user: "",
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
        const configuration = {
            method: 'POST', 
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify(data)
        };
        fetch("http://localhost:4000/users", configuration)
        .then((resp) => resp.json())
        .then((response) => {
            localStorage.setItem("jwt", response.jwt);
            this.setUser(response)
        });
    }

    setUser = (data) =>{
        this.setState({
            signedup: true,
            user: data.user
        });        
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        })
      }

    render(){
        if(this.state.signedup){
            return <Redirect to="/" />;
        } else{
            return(
                <form onSubmit={this.handleSubmit}>
                    <h1>Sign Up!</h1>
                    <div>
                        <input 
                        type="text"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder="Username"/>
                    </div>
                    <div>
                        <input 
                        type="password"
                        id="password"
                        value={this.state.password}
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

export default Signup;