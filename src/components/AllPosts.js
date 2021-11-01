import React from "react";
import { connect } from "react-redux";
import ButtonForLikes from "./ButtonForLikes";

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
            <ButtonForLikes post={post}/>
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