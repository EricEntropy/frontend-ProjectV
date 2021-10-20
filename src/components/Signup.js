import React from "react";

class Signup extends React.Component{

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
        const configuration = {
            method: 'POST', 
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify(data)
        };
        fetch("http://localhost:4000/users", configuration)
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        })
      }

    render(){
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

export default Signup;