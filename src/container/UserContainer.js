import React, { Component } from 'react';
import User from "../components/User"

class UserContainer extends Component{

    render(){
        console.log(this.props)
        return(
            <div>
                <User/>
            </div>
        )
    }
}

export default UserContainer;