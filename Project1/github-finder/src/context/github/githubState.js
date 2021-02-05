import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SET_LOADING,
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";
import githubContext from "./githubContext";
import Search from "../../components/users/Search";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos:[]    
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // search users
  const searchUsers = async (searchName) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchName}&client_id=${process.env.ID}&client_secret=${process.env.SECRET}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // get user

  // get repos

  // Clear users

  // set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
