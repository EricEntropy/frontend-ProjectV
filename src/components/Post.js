import React from "react";


class Post extends React.Component {
  render() {
    console.log(this.props)

    return (
        <div>
           <h1> posts </h1>
        </div>
    )
  }
}

export default Post;