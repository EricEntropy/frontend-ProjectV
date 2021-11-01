import React from "react";

class ButtonForLikes extends React.Component {

    state = {
        upvote: this.props.post.likes
    };

    handleDownvote = (e) =>{
        this.setState({
            upvote: this.state.upvote - 1
        })
    }

    handleUpvote = () => {
        this.setState({
            upvote: this.state.upvote + 1
        })
    }
    
    render(){
        return(
            <div>
                Votes: <b>{this.state.upvote}</b>
                <br/>
                <button className="upvote" onClick={this.handleUpvote}>Upvote</button>
                <button className="downvote" onClick={this.handleDownvote}>Downvote</button>
            </div>
        )
    }
}

export default ButtonForLikes;
