import React, { Component } from "react";
import img from "../../assets/1.png";
import UserItem from "./UserItem";
class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        login: "moving",
        avatar_url: 'https://avatars.githubusercontent.com/u/20?v=4',
        html_url: "https://github.com/kevinclark",
      },
      {
        id: 2,
        login: "moving 2",
        avatar_url:
          "https://www.flaticon.com/svg/vstatic/svg/2040/2040632.svg?token=exp=1611718454~hmac=35d223ef10d4e52650ffb5adceb205fe",
        html_url: "https://github.com/movingmelody",
      },
      {
        id: 3,
        login: "moving melody",
        avatar_url: img,
        html_url: "https://github.com/ben",
      },
    ],
  };

  render() {
    return (
      <div style={usersStyle}>
        {this.state.users.map((user) => (
          /* <h1 key={user.id}>{user.login}</h1> */
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
const usersStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gridGap:'1rem'
};
export default Users;
