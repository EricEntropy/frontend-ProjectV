import React from "react";
import { connect } from "react-redux";
import {  userDeletePost } from "../actions/UserActions";

class Posts extends React.Component {

  handleDelete = (e) =>{

    e.preventDefault();
    const post_id = parseInt(e.target.id, 10)
    this.props.userDeletePost(this.props.user.id, post_id)
  }

  render() {
    console.log(this.props)
    const postList = this.props.posts.map((post) => {
      return(
        <div className="post" id={post.id} key={post.id}>
            <h3 className="post-title">{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={this.handleDelete} id={post.id}> X </button>
        </div>
      )
    })
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
  };
};

export default connect(null, mapDispatchToProps)(Posts);