import React from "react";
import { connect } from "react-redux";

class Posts extends React.Component {
    state = {
        title: "",
        content: ""
    }

    handleSubmit =(event) =>{
        event.preventDefault();
        const data = {
            post: {
                title: this.state.title,
                content: this.state.content
        }};
        this.submitPost(data);
    };

    submitPost = (data) =>{
        const token = localStorage.getItem("jwt");

        const configuration = {
            method: 'POST', 
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        };
        
        fetch(`http://localhost:4000/users/1/posts`, configuration)
        .then((resp) => resp.json())
        .then((response) => {
            return(
                <div>
                    {response.title}
                    {response.content}
                </div>
            )
        });
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        })
    };

    render() {
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

const mapStateToProps = (state) => {
    return{
      user: state.user,
      signedup: state.signedup,
    };
  };

export default connect(mapStateToProps)(Posts);