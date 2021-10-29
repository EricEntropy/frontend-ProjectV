import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import {  userDeletePost, userEditPost } from "../actions/UserActions";

class Post extends React.Component {

    state = {
        title: "",
        content: "",
        doneEdit: false,
        doneDelete: false
    }

    handleDelete = (e) =>{
        e.preventDefault();
        this.props.userDeletePost(this.props.location.state.id, this.props.match.params.postID)
        this.setState({
            doneDelete: true
        });
      }
    
      handleUpdate = (e) =>{
        e.preventDefault();
        if(this.state.doneEdit){
            const updatedPost = {
                title: this.state.title,
                content: this.state.content
            }
        this.props.userEditPost(this.props.location.state.id, this.props.match.params.postID, updatedPost)
        }
      }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value,
          doneEdit: true
        })
    };


    render() {
        const postData = this.props.location.state;
        console.log(this.state)
        if(this.state.doneDelete){
            return <Redirect to="/"/>
        }
        return(
            <div>
                <br/>
                <form>
                    <input 
                    type="text" 
                    id="title"
                    onChange={this.handleChange}
                    defaultValue={postData.title}>
                    </input>
                    <br/>
                    <input 
                    type="text" 
                    id="content"
                    onChange={this.handleChange}
                    defaultValue={postData.content}>
                    </input>
                    <br/>
                    <button onClick={this.handleUpdate}>Complete Edit</button>
                    <br/>
                    <button onClick={this.handleDelete} className="delete-btn">Delete</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        userDeletePost: (user_id, post_id) => dispatch(userDeletePost(user_id, post_id)),
        userEditPost: (user_id, post_id, postData) => dispatch(userEditPost(user_id, post_id, postData)),
    };
  };

  export default connect(null, mapDispatchToProps)(Post);