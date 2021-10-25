import React from "react";
import { userLogout } from "../actions/UserActions";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class Logout extends React.Component{

    handleSubmit= (e) =>{
        e.preventDefault();
        this.props.userLogout();
    }
    

    render(){
        if(this.props.signedup){
            return <Redirect to="/login" />;
        } else{
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Goodbye!</h2>
                    <input type="submit" value='Log out'/>
                </form>
            </div>
        )
    }
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        userLogout: () => dispatch(userLogout()),
    };
};
export default connect(null, mapDispatchToProps)(Logout);