import React from "react";


class User extends React.Component {
  render() {
    console.log(this.props)
    return (
        <div>
            <h1> Welcome {`${this.props.user.username}`} </h1>
            <div className="total-posts">
            <p>Your total number of posts:</p>
            <h2>{this.props.totalPosts}</h2>
            </div>
        </div>
    )
  }
}

export default User;