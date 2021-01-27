import React, { Component } from "react";
import img from "../../assets/1.png";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from 'prop-types';
const Users = (props) => {
  // todo : we don't need the below users array of objects anymore.. because they are coded values
  // so we will fetch users from github api in main App component and pass them down here
  const state = {
    users: [
      {
        id: 1,
        login: "moving",
        avatar_url: img,
        html_url: "https://github.com/kevinclark",
      },
      {
        id: 2,
        login: "moving 2",
        avatar_url:
          "https://www.flaticon.com/svg/vstatic/svg/2040/2040632.svg?token=exp=1611718454~hmac=35d223ef10d4e52650ffb5adceb205fe",
        html_url: "https://github.com/movingmelody",
      },
    ],
  };
  const { users, loading } = props;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={usersStyle}>
        {users.map((user) => (
          <div>
            <UserItem key={user.id} user={user} dummy="osama" />
          </div>
        ))}
      </div>
    );
  }
};
const usersStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gridGap: "1rem",
};
Users.propTypes ={
    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired,
}
export default Users;
