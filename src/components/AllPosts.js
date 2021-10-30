import React from "react";
import { connect } from "react-redux";

class AllPosts extends React.Component {

  render() {
    console.log(this)
    let allPostsList;
    if(this.props.allPostsReceived){
    allPostsList = this.props.allPosts.map((post) => {
      return(
          <div className="post" id={post.id} key={post.id}>
            <h3 className="post-title">{post.title}</h3>
            <p>{post.content}</p>
            <button className="upvote">Upvote</button>
            <b>{post.likes}</b>
            <button className="downvote">Downvote</button>
          </div>
      )}
    )}

    return (
    <div>
      {allPostsList}
    </div>
    )
    
  }
}

const mapStateToProps = (state) => {
  return{
    allPosts: state.HomeActionsReducer.allPosts,
    allPostsReceived: state.HomeActionsReducer.allPostsReceived
  };
};

export default connect(mapStateToProps)(AllPosts);