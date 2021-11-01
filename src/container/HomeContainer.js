import React, { Component } from 'react';
import PostInput from "../components/PostInput"
import AllPosts from "../components/AllPosts"
import { connect } from "react-redux";
import {homeGetAllPosts} from '../actions/HomeActions'

class HomeContainer extends Component{

    componentDidMount(){
        if(this.props.allPostsReceived === false){
        this.props.homeGetAllPosts()}
    }
    
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

const mapDispatchToProps = (dispatch) =>{
    return{
      homeGetAllPosts: () => dispatch(homeGetAllPosts())
    }
}

export default connect(null, mapDispatchToProps)(HomeContainer);