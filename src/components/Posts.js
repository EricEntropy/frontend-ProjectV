import React from "react";
import { connect } from "react-redux";
import { userPost, userGetPosts } from "../actions/UserActions";
import { Redirect } from "react-router";

class Posts extends React.Component {
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
            return <Redirect to="/post" />;
        } else{
        return (
            <form onSubmit={this.handleSubmit}>
                    <h1>New post</h1>
                    <div>
                        <input 
                        type="text"
                        id="title"
                        onChange={this.handleChange}
                        placeholder="Title"/>
                    </div>
                    <div>
                        <input 
                        type="text"
                        id="content"
                        onChange={this.handleChange}
                        placeholder="Content"/>
                    </div>
                    <input 
                    type="submit" 
                    value="Create Post"/>
                </form>
        );
        }
    }
}

const mapStateToProps = (state) => {
    return{
      user: state.user,
      signedup: state.signedup,
      postSuccess: state.postSuccess,
      posts: state.posts,
      getPosts: state.getPosts
    };
  };

  const mapDispatchToProps = (dispatch) =>{
    return{
        userPost: (data) => dispatch(userPost(data)),
        userGetPosts: (user_id) => dispatch(userGetPosts(user_id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);