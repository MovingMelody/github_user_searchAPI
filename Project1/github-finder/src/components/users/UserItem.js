import React from "react";
import img from "../../assets/1.png";
import PropTypes from "prop-types";
const UserItem = ({user:{avatar_url, login, html_url}, dummy}) => {
  // const UserItem = ({ login, avatar_url, html_url }) => { // valid way of destructuring the props
  // and previously this was a class component and now we changed it to functional component
  // checkout previous commit to see changes
  // todo: the below defaultProps are no longer valid in functional components.. the below method can be only used in class components
  // static defaultProps = {
  //     id: "id",
  //     login: "moving",
  //     avatar_url: img,
  //     html_url: "https://github.com/kevinclark",
  //   };

  // destructuring
  // const { login, avatar_url, html_url } = props.user;

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="error"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      {/* <h3>{dummy}</h3> */}
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};
UserItem.defaultProps = {
  id: "id",
  login: "defaultSafeName",
  avatar_url: img,
  html_url: "https://github.com/kevinclark",
};
UserItem.propTypes = {
  user:PropTypes.object.isRequired,
};

export default UserItem;
