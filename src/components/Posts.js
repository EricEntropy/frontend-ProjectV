import React from "react";

class Posts extends React.Component {
  render() {
    console.log(this.props)
    const postList = this.props.posts.map((post) => {
      return(
        <div className="post">
            <h3 className="post-title">{post.title}</h3>
            <p>{post.content}</p>
        </div>
      )
    })
    return (
        <div>
          <br/>
          {postList}
        </div>
    )
  }
}

export default Posts;