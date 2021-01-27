import React, { Component } from "react";
import img from "../../assets/1.png";
class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "id",
      login: "moving",
      avatar_url: img,
      html_url: "https://github.com/kevinclark",
    };
  }

  render() {
    // destructuring
    // const { id, login, avatar_url, html_url } = this.state;
    const { id, login, avatar_url, html_url } = this.props.user;

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="erroe"
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
