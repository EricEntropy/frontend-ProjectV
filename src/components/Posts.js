import React from "react";

class Posts extends React.Component {
  render() {
    console.log(this.props)
    const postList = this.props.posts.map((post) => {
      return(
        <div className="post" key={post.id}>
            <h3 className="post-title">{post.title}</h3>
            <p>{post.content}</p>
            <button></button>
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