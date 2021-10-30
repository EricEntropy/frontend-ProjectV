import React, { Component } from 'react';
import PostInput from "../components/PostInput"
import AllPosts from "../components/AllPosts"

class HomeContainer extends Component{

    render(){
        return(
            <div>
                <PostInput/>
                <AllPosts/>
            </div>
        )
    }
}

export default HomeContainer;