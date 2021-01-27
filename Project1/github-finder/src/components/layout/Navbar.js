import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeace } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
const Navbar = ({icon, title}) => {
  // incase of not passing any props to this component rather than displaing nothing we can use the
  // below defaultProps object... If we pass the props will be overridden so its a better safe way to use this way
  // static defaultProps = {
  //   title: "Default name",
  //   arr:[1, 2, 3],
  // };
  // todo : the way of using defaultProps and PropTypes is no longer valid in this functinal based components
  //  Typechecking With PropTypes
  // static propTypes = {
  //     title:PropTypes.string.isRequired,
  //     arr:PropTypes.array.isRequired,
  // }
  // it logs and throws some warnings if we pass any type other than this
  return (
    <nav className="navbar bg-primary ">
      <h1>
        <FontAwesomeIcon icon={faPeace} /> {title}
      </h1>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Default name",
  arr: [1, 2, 3],
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  arr: PropTypes.array.isRequired,
};
export default Navbar;
