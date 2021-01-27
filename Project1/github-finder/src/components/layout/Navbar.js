import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeace } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
export class Navbar extends Component {
  // incase of not passing any props to this component rather than displaing nothing we can use the
  // below defaultProps object... If we pass the props will be overridden so its a better safe way to use this way
  static defaultProps = {
    title: "Default name",
    array:[1, 2, 3],
  };

//  Typechecking With PropTypes
static propTypes = {
    title:PropTypes.string.isRequired,
    array:PropTypes.array.isRequired,
}
// it logs and throws some warnings if we pass any type other than this
  render() {
    return (
      <nav className="navbar bg-primary ">
        <h1>
          <FontAwesomeIcon icon={faPeace} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

Navbar.defaultProps = {
  title: "another way of using the defaultProps",
};
export default Navbar;
