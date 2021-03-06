import React from "react";
import { NavLink } from "react-router-dom";

const link = {
    width: "100px",
    padding: "12px",
    margin: "6px 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

class Navbar extends React.Component{
    render(){
        if(this.props.signedup === false){
            return(
                <div>
                    <NavLink
                    to="/login"
                    exact
                    style={link}
                    activeStyle={{background: "red"}}>
                    Log In
                    </NavLink>

                    <NavLink
                    to="/signup"
                    exact
                    style={link}
                    activeStyle={{background: "red"}}>
                    Sign Up
                    </NavLink>
                </div>
            )
        }else if (localStorage.jwt && this.props.signedup === true){
            return(
                <div>
                    <NavLink
                    to="/"
                    exact
                    style={link}
                    activeStyle={{background: "red"}}>
                        Home
                    </NavLink>

                    <NavLink
                    to="/posts"
                    exact
                    style={link}
                    activeStyle={{background: "red"}}>
                    My Posts
                    </NavLink>

                    <NavLink
                    to={`/user/${this.props.user.username}`}
                    exact
                    style={link}
                    activeStyle={{background: "red"}}>
                    My Profile
                    </NavLink>

                    <NavLink
                    to="/logout"
                    exact
                    style={link}
                    activeStyle={{background: "red"}}>
                    Log Out
                    </NavLink>
                </div>
            );
        }
    }
}

export default Navbar;