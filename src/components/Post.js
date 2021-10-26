import React from "react";

class Post extends React.Component {
  render() {
    console.log(this.props)
    const postList = this.props.posts.map((post) => {
      return(
        <div>
          <li>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
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