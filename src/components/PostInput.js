import React from "react";
import { connect } from "react-redux";
import { userPost, userGetPosts, userDeletePost } from "../actions/UserActions";
import { Redirect } from "react-router";
import Posts from "./Posts";

class PostInput extends React.Component {
    state = {
        title: "",
        content: "",
        redirect: false
    }

    handleSubmit =(event) =>{
        event.preventDefault();
        const data = {
            user_id: this.props.user.id,
            post: {
                title: this.state.title,
                content: this.state.content
        }};
        this.props.userPost(data);
        this.setState({ redirect: true})
        event.target.reset();
    };

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        })
    };

    componentDidMount(){
        if(this.props.getPosts === false){
        this.props.userGetPosts(this.props.user.id)}
    }

    render() {
        if(this.props.postSuccess && this.state.redirect){
            return <Redirect to="/posts" render={<Posts userDeletePost={this.props.userDeletePost}/>}/>;
        } else{
        return (
            <div className="post-input">
            <form onSubmit={this.handleSubmit} >
                    <h3>Create a New Post:</h3>
                    <div>
                        <input 
                        type="text"
                        id="title"
                        onChange={this.handleChange}
                        placeholder="Title"/>
                    </div>
                    <br/>
                    <div>
                        <input 
                        type="text"
                        id="content"
                        onChange={this.handleChange}
                        placeholder="Content"/>
                    </div>
                    <br/>
                    <input 
                    type="submit" 
                    value="Create Post"/>
                </form>
                </div>
        );
        }
    }
}

const mapStateToProps = (state) => {
    return{
      user: state.UserReducer.user,
      signedup: state.UserReducer.signedup,
      postSuccess: state.UserReducer.postSuccess,
      posts: state.UserReducer.posts,
      getPosts: state.UserReducer.getPosts
    };
  };

  const mapDispatchToProps = (dispatch) =>{
    return{
        userPost: (data) => dispatch(userPost(data)),
        userGetPosts: (user_id) => dispatch(userGetPosts(user_id)),
        userDeletePost: (user_id, post_id) => dispatch(userDeletePost(user_id, post_id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostInput);