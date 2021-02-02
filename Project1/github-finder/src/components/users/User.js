import React, { useEffect, useState, Fragment } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLock as fano } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const User = ({ user, getUser, match, loading }) => {
  const [repos, setRepos] = useState([]);
  // state = {
  //   repos: [],
  // };
  useEffect(() => {
    getUser(match.params.login);
    // get user repos
    (async () => {
      const res = await axios.get(
        `https://api.github.com/users/${match.params.login}/repos?per_page=5&sort=created:asc&client_id=${process.env.ID}&client_secret=${process.env.SECRET}`
      );
      setRepos(res.data);
    })();
    // console.log(repos);
    // eslint-disable-next-line
  }, []);

  // async componentDidMount() {
  //   // as soon as the component mounts to the dom this method will be called so at that time we are retrieving the particular
  //   // user details and storing them
  //   this.props.getUser(this.props.match.params.login);
  //   // get user repos
  //   const res = await axios.get(
  //     `https://api.github.com/users/${this.props.match.params.login}/repos?per_page=5&sort=created:asc&client_id=${process.env.ID}&client_secret=${process.env.SECRET}`
  //   );
  //   this.setState({ repos: res.data });
  //   console.log(this.state.repos);
  // }
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    company,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <FontAwesomeIcon icon={faCheck} className="text-success" />
      ) : (
        <FontAwesomeIcon icon={fano} className="text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} target="blank" className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website Link:</strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers:{followers}</div>
        <div className="badge badge-success">Following:{following}</div>
        <div className="badge badge-danger">Total Repos:{public_repos}</div>
        <div className="badge badge-light">Gists:{public_gists}</div>
      </div>
      <h4>User top 5 repos</h4>
      <div
        className="card"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {repos.map((repo) => (
          <div key={repo.name} className="text-center card">
            <p style={{ padding: "1rem" }}>{repo.name}</p>
            <a href={repo.html_url} target="blank" className="btn btn-light">
              view
            </a>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
User.propTypes = {
  loadig: PropTypes.bool,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
};
export default User;
