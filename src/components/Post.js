import React from "react";

class Post extends React.Component {
  render() {
    console.log(this.props)
    const postList = this.props.posts.map((post) => {
      return(
        <div >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <hr/>
        </div>
      )
    })
    return (
        <ul>
          {postList}
        </ul>
    )
  }
}

export default Post;