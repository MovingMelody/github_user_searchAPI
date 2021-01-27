import React, { Component } from "react";
import PropTypes from "prop-types";
class Search extends Component {
  state = {
    text: "",
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired,
  };
  formSubmitprevent = (e) => {
    e.preventDefault();
  };
  onSubmit = (e) => {
    // console.log(this.state.text);
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
    e.preventDefault();
  };
  onchangeinputHandler = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
      const {showClear, clearUsers} = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.formSubmitprevent}>
          <input
            onChange={this.onchangeinputHandler}
            type="text"
            name="text"
            placeholder="Search Users here...."
            value={this.state.text}
          />
          <input
            type="submit"
            value="Search"
            onClick={this.onSubmit}
            className="btn btn-block btn-dark"
          />
          {showClear && (
            <button
              className="btn btn-light btn-block"
              onClick={clearUsers}
            >
              clear 
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default Search;
