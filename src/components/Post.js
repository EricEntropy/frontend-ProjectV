import React from "react";

class Post extends React.Component {
    render() {
        const postData = this.props.location.state;
        console.log(postData)
        return(
            <div>
                <br/>
                HELLO WORLD
            </div>
        )
    }
}

export default Post;
