import React from "react";
import { connect } from "react-redux";
import {homeGetAllPosts} from '../actions/HomeActions'


class AllPosts extends React.Component {

  componentDidMount(){
    
    if(this.props.allPostsReceived === false){
    this.props.homeGetAllPosts()}
}

  render() {
    console.log(this)
    let allPostsList;
    if(this.props.allPostsReceived){
    allPostsList = this.props.allPosts.map((post) => {
      return(
          <div className="post" id={post.id} key={post.id}>
            <h3 className="post-title">{post.title}</h3>
            <p>{post.content}</p>
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

const mapDispatchToProps = (dispatch) =>{
  return{
    homeGetAllPosts: () => dispatch(homeGetAllPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);