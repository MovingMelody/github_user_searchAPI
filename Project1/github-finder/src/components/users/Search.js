import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";
const Search = ({ showAlert, clearAlert, showClear, clearUsers }) => {
  const githubContext = useContext(GithubContext);
  // todo: now we are on the allfncomps branch to convert all the class components to functional components
  // you can switch to master branch to see the class components
  // lets convert this class component to functional component
  // and implement better state management in this branch using context api and other state management techniques
  // state = {
  // valid in class component
  //   text: "",
  // };
  const [text, setText] = useState("");
  const formSubmitprevent = (e) => {
    e.preventDefault();
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      //   alert("enter a name"); instead of a default alert message lets create our own custom alert
      showAlert("Enter something...", "light");
    } else {
     githubContext.searchUsers(text);
      setText("");
      clearAlert();
    }
  };
  const onchangeinputHandler = (e) => setText(e.target.value);

  // const { showClear, clearUsers } = props;
  return (
    <div>
      <form className="form" onSubmit={formSubmitprevent}>
        <input
          onChange={onchangeinputHandler}
          type="text"
          name="text"
          placeholder="Search Users here...."
          value={text}
        />
        <input
          type="submit"
          value="Search"
          onClick={onSubmit}
          className="btn btn-block btn-dark"
        />
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            clear
          </button>
        )}
      </form>
    </div>
  );
};

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  showAlert: PropTypes.func.isRequired,
};
export default Search;
