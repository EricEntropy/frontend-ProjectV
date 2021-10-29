import React from "react";
import { connect } from "react-redux";
import {  userDeletePost, userEditPost } from "../actions/UserActions";
import { Link } from "react-router-dom";

class Posts extends React.Component {
  
  state ={
    redirectToManagePost: false,
  }

  handleDelete = (e) =>{
    e.preventDefault();
    const post_id = parseInt(e.target.id, 10)
    this.props.userDeletePost(this.props.user.id, post_id)
  }

  handleClick = () =>{
    this.setState({
      redirectToManagePost: true
    })
  }

  render() {
    console.log(this.props)
    const postList = this.props.posts.map((post) => {
      return(
        <div className="post" id={post.id} key={post.id}>
            <h3 className="post-title">{post.title}</h3>
            <p>{post.content}</p>
            <Link 
            key={post.id}
            to={{
              pathname: `/posts/${post.id}`,
              state: {title: post.title, content: post.content, id: post.id}}}>
              Manage Post
            </Link>
        </div>
      )
    });

    return (
        <div>
          <br/>
          {postList}
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
      userDeletePost: (user_id, post_id) => dispatch(userDeletePost(user_id, post_id)),
      userEditPost: (user_id, post_id) => dispatch(userEditPost(user_id, post_id)),
  };
};

export default connect(null, mapDispatchToProps)(Posts);