import React, { Fragment } from "react";
import spinner from "../../assets/spinner.gif";
const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="loading..."
        style={{ margin: "auto", display: "flex", width: "150px" }}
      />
    </Fragment>
  );
};

export default Spinner;
