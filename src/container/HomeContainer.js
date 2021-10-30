import React, { Component } from 'react';
import PostInput from "../components/PostInput"
import AllPosts from "../components/AllPosts"

class HomeContainer extends Component{

    render(){
        return(
            <div>
                <h1>Welcome!</h1> 
                <PostInput/>
                <br/>
                <h2>Your Feed</h2>
                <AllPosts/>
            </div>
        )
    }
}

export default HomeContainer;